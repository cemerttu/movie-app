import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* <img src={movie.posterURL} alt={movie.title} /> */}
        <div className="movie-card-content">
          <img src={movie.posterURL} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
