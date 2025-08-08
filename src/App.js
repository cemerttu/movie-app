import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Dune: Part Two',
      posterURL: 'https://image.tmdb.org/t/p/w500/czP52i3gIuD4hB5B2H3mJ1t6T4b.jpg',
      rating: 8.3,
      description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.',
      trailerLink: 'https://www.youtube.com/embed/5U7R38g_w5A',
    },
    {
      id: 2,
      title: 'Godzilla x Kong: The New Empire',
      posterURL: 'https://image.tmdb.org/t/p/w500/k2tCgYlSj10fK05BqR8XkEwY9Xm.jpg',
      rating: 6.8,
      description: 'The epic battle continues! Legendary Pictures’ cinematic Monsterverse follows up the explosive showdown of “Godzilla vs. Kong” with an all-new adventure pitting the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence—and our own.',
      trailerLink: 'https://www.youtube.com/embed/PbrjN1P3GfE',
    },
    {
      id: 3,
      title: 'Kung Fu Panda 4',
      posterURL: 'https://image.tmdb.org/t/p/w500/fR7mO75wMvB3vJ5s7L5Q2p9hE5q.jpg',
      rating: 7.2,
      description: 'After three death-defying adventures defeating world-class villains with his unmatched courage and mad martial arts skills, Po, the Dragon Warrior, is called upon by destiny to become the Spiritual Leader of the Valley of Peace.',
      trailerLink: 'https://www.youtube.com/embed/g2A501LqS9Y',
    },
    {
      id: 4,
      title: 'Ghostbusters: Frozen Empire',
      posterURL: 'https://image.tmdb.org/t/p/w500/x5ZgGg6ZtSg6hF7X5w8m42b2T0u.jpg',
      rating: 6.7,
      description: 'The Spengler family returns to where it all started—the iconic New York City firehouse—to team up with the original Ghostbusters, who have developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.',
      trailerLink: 'https://www.youtube.com/embed/h0hE3B6-v-k',
    },
    {
      id: 5,
      title: 'Oppenheimer',
      posterURL: 'https://image.tmdb.org/t/p/w500/8G4X6sLhM3tT4sXv1jS4FkL33wE.jpg',
      rating: 8.4,
      description: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II.',
      trailerLink: 'https://www.youtube.com/embed/uGvV6aLzXjE',
    },
    {
      id: 6,
      title: 'Deadpool & Wolverine',
      posterURL: 'https://image.tmdb.org/t/p/w500/aHl2c5F4N53sA0G3x2f9jS5z2Nq.jpg',
      rating: 8.8,
      description: 'Wolverine, recovering from a recent surgery, is forced to team up with an unlikely ally to save the world from an ancient evil.',
      trailerLink: 'https://www.youtube.com/embed/WJ6959bH8eY',
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
