import { useEffect, useState } from "react";
import { Movie } from "../core";
import MainMovie from "../components/MainMovie/MainMovie";
import MovieList from "../components/Movie/MovieList";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovies] = useState<Movie | null>(null);

  const fetcher = async () => {
    const result = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return result.json();
  };

  useEffect(() => {
    fetcher().then((res) => {
      console.log(res);
      setMovies(res.results);
      setMainMovies(res.results[0]);
    });
  }, []);

  return (
    <div>
      {mainMovie && <MainMovie item={mainMovie} />}
      <MovieList items={movies} />
    </div>
  );
};

export default MainPage;
