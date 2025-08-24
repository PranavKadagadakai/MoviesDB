import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import React, { memo, useRef } from "react";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";

const MovieCard = memo(function MovieCard({ movie }) {
  const { addToFavorites, removeFroFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const cardRef = useRef(null);
  useKeyboardNavigation(cardRef, (e) => {
    if (e.key === "Enter") {
      handleFavoriteClick(e);
    }
  });
  function handleFavoriteClick(event) {
    event.preventDefault();
    if (favorite) removeFroFavorites(movie.id);
    else addToFavorites(movie);
  }
  return (
    <div
      className="movie-card"
      tabIndex={0}
      ref={cardRef}
      aria-label={`Movie card for ${movie.title}`}
      role="group"
    >
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
          aria-pressed={favorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
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
});

export default MovieCard;
