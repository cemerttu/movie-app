import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Dune: Part Two',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.3,
      description:
        'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.',
      trailerLink: "https://www.youtube.com/embed/n9xhJrPXop4",
    },
    {
      id: 2,
      title: 'Godzilla x Kong: The New Empire',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 6.8,
      description:
        'The epic battle continues! Legendary Pictures’ cinematic Monsterverse follows up the explosive showdown of “Godzilla vs. Kong” with an all-new adventure pitting the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence—and our own.',
      trailerLink: 'https://www.youtube-nocookie.com/embed/lV1OOlGwExM',
    },
    {
      id: 3,
      title: 'Kung Fu Panda 4',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzJlNGYxYzQtOTg4MC00OTMyLTkwYzMtZDRlNTgwY2YwOWYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 7.2,
      description:
        'After three death-defying adventures defeating world-class villains with his unmatched courage and mad martial arts skills, Po, the Dragon Warrior, is called upon by destiny to become the Spiritual Leader of the Valley of Peace.',
      trailerLink: 'https://www.youtube-nocookie.com/embed/_inKs4eeHiI',
    },
    {
      id: 4,
      title: 'Ghostbusters: Frozen Empire',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMGI0Yjg2ODAtNDYzNi00Njc2LTlkMmMtMmRmYWI5MDE4ZGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 6.7,
      description:
        'The Spengler family returns to where it all started—the iconic New York City firehouse—to team up with the original Ghostbusters, who have developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.',
      trailerLink: 'https://www.youtube-nocookie.com/embed/HpOBXh02rVc',
    },
    {
      id: 5,
      title: 'Oppenheimer',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.4,
      description:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      trailerLink: 'https://www.youtube-nocookie.com/embed/uYPbbksJxIg',
    },
    {
      id: 6,
      title: 'Deadpool & Wolverine',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg',
      rating: 8.8,
      description:
        'Wolverine, recovering from a recent surgery, is forced to team up with an unlikely ally to save the world from an ancient evil.',
      trailerLink: 'https://www.youtube-nocookie.com/embed/73_1biulkYk',
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
    setMovies([
      ...movies,
      {
        ...newMovie,
        id: movies.length + 1,
        rating: Number(newMovie.rating)
      }
    ]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  );

  return (
    <div className="container">
      <h1>🎬 My Movie App</h1>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />

        {/* Movie Detail Page */}
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
