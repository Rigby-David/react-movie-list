export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div className="movie-poster" style={{ backgroundColor: movie.color }}
      onClick={(e) => handleDeleteMovie && handleDeleteMovie(movie.title)}>
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
      
    </div>
  );
}