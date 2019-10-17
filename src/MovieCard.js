import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  const movieSrc = 'https://image.tmdb.org/t/p/original/' + props.src;
  return(
    <div className="movie-card">
      <img src= {movieSrc} className="movie-img" alt={props.title}></img>
      <p className="movie-title">{props.title}</p>
      <div><span>{props.date}</span></div>
    </div>
  );
}

export default MovieCard;