import { useState, useEffect } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {


  const [allMovies, setAllMovies] = useState([
    {
      title: 'A Knight\'s Tale',
      director: 'Brian Helgeland',
      year: '2001',
      color: 'red'
    },
    {
      title: 'The Northman',
      director: 'Robert Eggers',
      year: '2022',
      color: 'blue'
    },
    {
      title: 'The Black Phone',
      director: 'Scott Derrickson',
      year: '2022',
      color: 'violet'
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [filterMovie, setFilterMovie] = useState('');

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(filterMovie) {
    setFilterMovie(filterMovie);

    const updatedMovies = allMovies.filter(newMovie => newMovie.title.includes(filterMovie));
    setFilteredMovies(updatedMovies);
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
    setFilteredMovies(allMovies);
    setFilterMovie('');
  }, [allMovies]);

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
      <div className='movie-filter'>
        Filter Movies by Name (case sensitive)
        <input value={filterMovie} onChange={(e) => handleFilterMovies(e.target.value)} />
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
