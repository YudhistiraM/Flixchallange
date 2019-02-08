import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



import {
  Card,
  CardTitle, CardText, Row, Col, CardImg, CardBody,
} from 'reactstrap';
import requestNowPlaying from './action';
import './style.css';
import { GetPrices } from './util';


// eslint-disable-next-line
class MovieList extends React.Component {


  state = {
    activeTab: '1',
  }

  componentDidMount = () => {
    const { requestNowPlaying } = this.props;
    requestNowPlaying();
  }

  setDataFromStorage = () => {
    const { nowPlayingReducer: { data: { results } } } = this.props;
    const storage = window.localStorage;
    storage.setItem('result', JSON.stringify(results));
  }

  getDataFromStorage = () => {
    const { waitingFromStorage } = this;
    const storage = window.localStorage;
    const temp = storage.getItem('result');
    if (waitingFromStorage(temp)) {
      return JSON.parse(temp);
    }
  }

  waitingFromStorage = data => data !== 'undefined'

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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

  renderNowPlaying = () => {
    const { nowPlayingReducer: { activeRequests } } = this.props;

    const {
      setDataFromStorage, getDataFromStorage,
      handleLinkToMovieDetail,
    } = this;

    setDataFromStorage();
    const storageResults = getDataFromStorage();

    if (storageResults && activeRequests === 0) {
      return (
        <Row>
        {storageResults.map(item => (
          <Col key={item.id} md="3">
          <Card className="card customCard">
          <Link to={handleLinkToMovieDetail(item)}>
          <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image cap" />
          </Link>
          <CardBody>
          <CardTitle>
          <b>{item.title}</b>
          </CardTitle>
          <CardText>
          <b> Rating : </b> {item.vote_average}
          </CardText>
          <CardText>
          <b> Price : </b> {GetPrices(item.vote_average)}
          </CardText>
          </CardBody>
          </Card>
          </Col>
        ))}

        </Row>
      );

    }
  }

  render() {
    const { renderNowPlaying } = this;
    return (
      <div>
      <div align="center">
      <h3> Now Playing </h3>
      </div>
      <div>
      {renderNowPlaying()}
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ nowPlayingReducer }) => ({
  nowPlayingReducer,
});

export default connect(mapStateToProps, { requestNowPlaying })(MovieList);
