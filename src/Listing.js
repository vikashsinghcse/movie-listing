import React from 'react';
import MovieCard from './MovieCard';
import './MovieListing.css';

function Listing(props) {
  const movies = props.movies;
  
  return(
    <div className="movie-list">
      {
        movies.map((movie, key) => {
          return <MovieCard src={movie.poster_path} title={movie.title} date={movie.release_date} key={key} />
        })
      }
    </div>
  );
}

export default Listing;