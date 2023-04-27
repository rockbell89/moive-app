import React from "react";
import MovieItem from "./MovieItem";
import { Movie } from "../../core";
import "./MovieList.scss";

interface MovieListProps {
  items: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ items }) => {
  return (
    <div className="movie-list">
      {items && items.map((movie) => <MovieItem item={movie} />)}
    </div>
  );
};

export default MovieList;
