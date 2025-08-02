import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
      <img src={movie.posterURL} alt={movie.title} width="150" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
