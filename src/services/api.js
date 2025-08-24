const API_KEY =
  import.meta.env.VITE_MOVIE_DB_API_KEY || process.env.REACT_APP_MOVIES_API_KEY;
const API_URL =
  import.meta.env.VITE_MOVIE_DB_API_URL || process.env.REACT_APP_MOVIES_API_URL;

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch popular movies");
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) throw new Error("Failed to search movies");
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};
