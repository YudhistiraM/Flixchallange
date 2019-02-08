import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Jumbotron, Badge, Row, Col, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Trailers from './Trailers';

import { FaMoney } from 'react-icons/lib/fa/';

import './style.css';
import { requestMovieDetail, requestMovieCast, requestSimilarMovie } from './action';
import LoadingBar from '../LoadingBar';
import person from '../../common/Images/profile.png';
import movie from '../../common/Images/Movie.jpg';
import { GetPrices } from './util';
import Alert from '../Alert';

class MovieDetail extends Component {


  state = {
    openAlert: false,
  }

  componentDidMount() {
    const {
      requestMovieDetail, requestMovieCast, requestSimilarMovie, location,
    } = this.props;

    // remove the '/' for getting the movie id
    const movieId = location.pathname.split('-')[0].slice(1);
    requestMovieDetail(movieId);
    requestMovieCast(movieId);
    requestSimilarMovie(movieId);
  }

  componentDidUpdate(prevProps) {
    const {
      requestMovieDetail, requestMovieCast, requestSimilarMovie, location,
    } = this.props;

    const { handleResetAlert } = this;

    if (location.pathname !== prevProps.location.pathname) {
      const movieId = location.pathname.split('-')[0].slice(1);
      handleResetAlert();
      requestMovieDetail(movieId);
      requestMovieCast(movieId);
      requestSimilarMovie(movieId);
    }
  }

  handleResetAlert = () => {
    this.setState({
      openAlert: false,
    });
  }

  handleOpenAlert = () => {
    this.setState({
      openAlert: true,
    });
  }


  handleLinkToMovieDetail = (movie) => {
    const { id, title } = movie;
    const tempTitle = title.split(' ').length;
    if (tempTitle > 1) {
      const res = `${id}-${title.split(' ').join('-')}`;
      return res;
    }
    return `${id}-${title}`;
  }


  renderCast = () => {
    const { movieCastReducer: { data: { cast } } } = this.props;
    if (cast) {
      return (
        <Row>
        { cast.map(item => (
          <Col key={item.id}>
          <Card>
          <CardImg top width="100%" src={item.profile_path === null ? person : `https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="Card image cap" />
          <CardBody>
          <CardTitle>
          {item.name}
          </CardTitle>
          <CardSubtitle>
          <b> as </b> {item.character}
          </CardSubtitle>
          </CardBody>
          </Card>
          </Col>
        ))
      }
      </Row>
    );
  };
}


renderSimilar = () => {
  const { similarMovieReducer: { data: { results } } } = this.props;
  const { handleLinkToMovieDetail } = this;


  if (results) {
    if (results.length === 0) {
      return (
        <Badge color="info">
        Coming soon
        </Badge>
      );
    }
    return (
      <Row className="horizontalScrollingcast">
      { results.map(item => (
        <Col key={item.id} md="3">
        <Card className="nowPlayingCard">
        <Link to={handleLinkToMovieDetail(item)}>
        <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image cap" />
        </Link>
        <CardBody>
        <CardTitle>
        {item.title}
        </CardTitle>
        </CardBody>
        </Card>
        </Col>
      ))
    }
    </Row>
  );
}
}


renderPrice = rate => (
  <div>
  <FaMoney size={30} />
  <span className="miniTag">
  {GetPrices(rate)}
  </span>
  </div>
)

renderOverview = overview => (
  overview === 'Add the plot.' ? (
    <Badge color="info">
    Coming soon
    </Badge>
  ) : overview
)

renderPurchaseButton = rate => (
  <Button className="miniInfo" color="dark" size="lg" block disabled={rate === 0} onClick={() => this.handleOpenAlert()}>
  {rate === 0 ? 'Coming Soon' : 'PURCHASE'}
  </Button>
)

render() {
  const { openAlert } = this.state;
  const { movieDetailReducer: { data, activeRequests } } = this.props;
  const {
    renderOverview, renderCast,
    renderPrice, renderPurchaseButton,
    renderSimilar,
  } = this;



  if (data && activeRequests === 0) {
    const price = GetPrices(data.vote_average);
    let trailerId = String(data.id);
    return (
      <div>
      <Jumbotron className="jumbo">
      <Row>
      <Col md="6">
      <h1 className="display-3">
      {data.title}
      </h1>
      <Row>
      <b>Rating</b>: {data.vote_average}
      </Row>
      <Row>
      <b>Release Date</b>: {data.release_date}
      </Row>
      <Row>
      <b>Duration</b>: {data.runtime} Minutes
      </Row>
      <Row>
      {renderPrice(data.vote_average)}
      </Row>
      <Row>
      <h5><b>Synopsis</b></h5>
      </Row>
      <Row>
      <p>
      {renderOverview(data.overview)}
      </p>
      </Row>
      <Row>
      {renderCast()}
      </Row>
      </Col>
      <Col md="6">
      <Card>
      <CardImg top width="100%" src={data.poster_path === null || data.poster_path === 'np' ? movie : `https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Card image cap" />
      {renderPurchaseButton(data.vote_average)}
      </Card>
      <CardBody>
      <Trailers movieId= "450465"/>
      </CardBody>
      </Col>
      </Row>
      <hr className="my-2" />
      <h5>
      Similar
      </h5>
      {renderSimilar()}
      </Jumbotron>
      <Alert show={openAlert} purchase={openAlert} title={data.title} price={price} />
      </div>
    );
  }

  return <LoadingBar progress={activeRequests} />;
}
}

const mapStateToProps = ({ movieDetailReducer, movieCastReducer, similarMovieReducer }) => ({
  movieDetailReducer,
  movieCastReducer,
  similarMovieReducer,
});

export default connect(mapStateToProps, { requestMovieDetail, requestMovieCast, requestSimilarMovie })(MovieDetail);
