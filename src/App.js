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

  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
  }

  useEffect(() => {

  });

  return (
    <div className="App">
      <div className='movie-area'>
        <Movie movie={{
          title: movieTitle,
          director: movieFormDirector,
          year: movieFormYearReleased,
          color: movieFormColor
        }} />
      </div>
      <MovieForm setMovieTitle={setMovieTitle}
        movieTitle={movieTitle}
        setMovieFormYearReleased={setMovieFormYearReleased}
        movieFormYearReleased={movieFormYearReleased}
        setMovieFormDirector={setMovieFormDirector}
        movieFormDirector={movieFormDirector}
        setMovieFormColor={setMovieFormColor}
        movieFormColor={movieFormColor}
        submitMovie={submitMovie} />

      <MovieList 
        filteredMovies={filteredMovies}
        handleDeleteMovie={handleDeleteMovie} 
      />
    </div>
  );
}

export default App;
