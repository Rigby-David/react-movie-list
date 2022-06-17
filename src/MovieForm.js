export default function MovieForm({ 
  setMovieTitle, 
  movieTitle, 
  setMovieFormYearReleased, 
  movieFormYearReleased, 
  setMovieFormDirector, 
  movieFormDirector, 
  setMovieFormColor, 
  movieFormColor, 
  submitMovie }) {
  return (
    <div>
      <form onSubmit={submitMovie}>
        <label>
            Movie title
          <input value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        </label>
        <label>
          Year released
          <input type="number" value={movieFormYearReleased} onChange={(e) => setMovieFormYearReleased(e.target.value)} />
        </label>
        <label>
          Director
          <input value={movieFormDirector} onChange={(e) => setMovieFormDirector(e.target.value)} />
        </label>
        <label>
          Color
          <select value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)}>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}