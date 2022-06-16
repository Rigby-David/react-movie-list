import { useState, useEffect } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [filterString, setFilterString] = useState('');

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies() {

  }

  function submitMovie() {

  }

  useEffect(() => {

  });

  return (
    <div className="App">
      <div className='movie'>

      </div>
      <MovieForm setMovieTitle={setMovieTitle}
        movieTitle={setMovieTitle}
        movieFormYearReleased={setMovieFormYearReleased}
        movieFormDirect={movieFormDirector}
        setMovieFormColor={setMovieFormColor}
        movieFormColor={movieFormColor}
        submitMovie={submitMovie} />

    </div>
  );
}

export default App;
