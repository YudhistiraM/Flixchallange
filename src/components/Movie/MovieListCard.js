import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import TextTruncate from 'react-text-truncate';

class MovieListCard extends Component {
  render() {
    const {movie, getMovie} = this.props
    let bought = []
    if (this.props.purchasedlist.length !== 0) {
      bought = JSON.parse(this.props.purchasedlist)
      bought = bought.purchasedlist
    }
    let isbought;
    if(bought.indexOf(movie.id) < 0){
      isbought = '';
    }else{
      isbought = '<div>Bought</div>';
    }

    return(
      <div>
        <div className="ispurchased" dangerouslySetInnerHTML={{__html: isbought}}></div>
        <div className="movie-card">

        <div className="movie-header myBackgroundImg" style={{background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
          <div className="header-icon-container">
            <NavLink to={`/${movie.id}-${movie.original_title.replace(/ /g, '-')}`} onClick={()=>{getMovie(movie.id)}}>
              <i className="material-icons header-icon"></i>
            </NavLink>
          </div>
        </div>

        <div className="movie-content manOfSteel">
          <div className="movie-content-header">
            <NavLink to={`/${movie.id}-${movie.original_title.replace(/ /g, '-')}`} onClick={()=>{getMovie(movie.id)}}>
              <h3 className="movie-title">{movie.title}</h3>
            </NavLink>
            <div className="imax-logo">
            </div>
          </div>
          <br />
          <TextTruncate
          line={3}
          truncateText="…"
          text={movie.overview}
          />

          <div className="movie-info">
            <div className="info-section">
              <label>Release Date</label>
              <span>{movie.release_date}</span>
            </div>
            <div className="info-section">
              <label>Popularity</label>
              <span>{movie.popularity}</span>
            </div>
            <div className="info-section">
              <label>Vote Count</label>
              <span>{movie.vote_count}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default MovieListCard;
