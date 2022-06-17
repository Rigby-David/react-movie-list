import Movie from './Movie';

export default function MovieList({ filteredMovies, handleDeleteMovie }) {
  return (
    <div>
      {
        filteredMovies.map((movie, i) => <Movie key={movie + i} movie={movie} handleDeleteMovie={handleDeleteMovie}/>)
      }
    </div>
  );
}