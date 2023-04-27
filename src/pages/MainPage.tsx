import { useEffect, useState } from "react";
import { Movie, MovieResponse } from "../core";
import MainMovie from "../components/MainMovie/MainMovie";
import MovieList from "../components/Movie/MovieList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import axios, { AxiosResponse } from "axios";

const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const sentinelRef = useInfiniteScroll(
    () => setPage((prevPage) => prevPage + 1),
    page
  );

  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=ko-KR&page=${page}`
      );
      if (data.results) {
        setTotalPage(data.total_results);
        if (page !== 1) {
          setMovies((prevState) => {
            const merged = [...prevState, ...data.results];
            const uniqueMovies = Array.from(
              new Set(merged.map((movie) => movie.id))
            ).map((id) => {
              return merged.find((movie) => movie.id === id);
            });
            return uniqueMovies;
          });
        } else {
          setMovies(data.results);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [page]);

  return (
    <div>
      {movies && <MainMovie item={movies[0]} />}
      <MovieList items={movies} sentinelRef={sentinelRef} />
    </div>
  );
};

export default MainPage;
