import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFroFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function handleFavoriteClick(event) {
    event.preventDefault();
    if (favorite) removeFroFavorites(movie.id);
    else addToFavorites(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-overlay">
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
