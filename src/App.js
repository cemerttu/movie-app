import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dream inside a dream.",
      posterURL: "https://m.media-amazon.com/images/I/51h5oN1T3eL._AC_.jpg",
      rating: 8.8
    },
    {
      title: "Interstellar",
      description: "Space and time travel.",
      posterURL: "https://m.media-amazon.com/images/I/81XpoYyQEjL._AC_SY679_.jpg",
      rating: 8.6
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.rating) return;
    setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  );

  return (
    <div className="container">
      <h1>🎬 My Movie App</h1>

      <div className="filter-container">
        <Filter
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
        />
      </div>

      <div className="add-movie-container">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
