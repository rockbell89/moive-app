import { useEffect, useState } from "react";
import { Movie } from "../core";
import MainMovie from "../components/MainMovie/MainMovie";
import MovieList from "../components/Movie/MovieList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import axios from "axios";

const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const sentinelRef = useInfiniteScroll(
    () => setPage((prevPage) => prevPage + 1),
    page,
    isVisible
  );

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=ko-KR&page=${page}`
      );
      if (data.results) {
        setTotalPage(data.total_pages);
        if (isVisible && page > 1) {
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
        setTimeout(() => {
          setIsVisible(true);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (page > totalPage) {
      setHasMore(false);
    } else {
      fetchMovies();
    }
  }, [page]);

  return (
    <div>
      {movies && <MainMovie item={movies[0]} />}
      <MovieList
        items={movies}
        sentinelRef={sentinelRef}
        isVisible={isVisible}
        hasMore={hasMore}
      />
    </div>
  );
};

export default MainPage;
