import React, { Component } from 'react';
import MovieListCard from './Movie/MovieListCard';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AppActions from '../actions/actions';


class IndonesiaMovies extends Component {
  render() {
    // console.log("DATA", this.props.movies);
    const {movies, actions } = this.props
    let filteredData = movies;

    let dataMovies = filteredData.map(function(item, index){
      return(
        <MovieListCard key={index} movie={item} {...actions} />
      )
    });

    return (
      <div className="container">
      <br/>
      <h4>Film Indonesia</h4>
      <br/>
      <div>
      {dataMovies}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndonesiaMovies)
