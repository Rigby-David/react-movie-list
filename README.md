Events	
On changing the movie form, the movie preview updates	1
On submitting the movie form, a new movie is added to the view, the form clears out, and the preview resets	2
On clicking a movie the movie gets deleted	1
On typing in the filter input, the movies are filtered by title	2
When you add or delete a movie, the filter resets and all movies are shown	1
Components	
App() : tracks state for allMovies, filteredMovies, movieFormYearReleased, movieFormDirector, movieTitle, movieFormColor	1
App() : passes state as props correctly to MovieForm, Movie, and MovieList	1
App() : define a handleDeleteMovie function that deleted a movie from the state array using title	2
App() : define a handleFilterMovies function that takes in a string and set filteredMovies to an array of movies whose name matches that string	2
App() : add a useEffect: whenever the state of allMovies changes for any reason, reset the visible movies in state to show all movies. (Clearing out the filter input box would be nice too, but it's optional)	1
MovieForm({ movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, submitMovie }) : on change for each input, call the appropriate state handler prop with the correct e.target.value to update App.js state.	2
MovieForm({ movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, handleSubmitMovie }) : on submit, add a movie to state.	2
MovieList({ movies }) : takes in a movies prop and renders a list of Movie components.	1
Movie({ movie }) : takes in a movie and renders it with the correct color background	1