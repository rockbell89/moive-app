import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import MovieList from "../components/Movie/MovieList";
import { Movie } from "../core";
import { useSearchParams } from "react-router-dom";
import SearchVisual from "../components/Search/SearchVisual";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const sentinelRef = useInfiniteScroll(
    () => {
      setPage((prevPage) => prevPage + 1);
    },
    page,
    isVisible
  );

  const searchMovies = async () => {
    console.log("load");
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${query}&language=ko-KR&page=${page}`
      );
      if (data.results) {
        setTotalCount(data.total_results);
        setTotalPage(data.total_pages);
        if (isVisible && page > 1) {
          setMovies((prevState) => {
            const merged = [...prevState, ...data.results];
            const uniqueMovies = Array.from(
              new Set(merged.map((movie) => movie.id))
            )
              .map((id) => {
                return merged.find((movie) => movie.id === id);
              })
              .filter((movie) => movie.poster_path !== null);
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

  // 검색 상단 비쥬얼 랜덤 노출
  const searchVisual = useMemo(() => {
    const data = movies.filter((movie) => {
      if (movie.backdrop_path !== null) {
        return true;
      }
    });
    return data[Math.floor(Math.random() * data.length)];
  }, [movies]);

  useEffect(() => {
    setPage(1);
    setMovies([]);
    setHasMore(true);
    setQuery(searchParams.get("query"));
  }, [searchParams]);

  useEffect(() => {
    if (!query) return;
    if (page > totalPage) {
      setHasMore(false);
    } else {
      searchMovies();
    }
  }, [page, totalPage, query]);

  return (
    <>
      <SearchVisual item={searchVisual} totalCount={totalCount} />
      <MovieList
        items={movies}
        sentinelRef={sentinelRef}
        isVisible={isVisible}
        hasMore={hasMore}
      />
    </>
  );
};

export default SearchPage;
