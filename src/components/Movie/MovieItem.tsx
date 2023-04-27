import { FC } from "react";
import { Movie } from "../../core";
import "./MovieItem.scss";

interface MovieItemProps {
  item: Movie;
}

const MovieItem: FC<MovieItemProps> = ({ item }) => {
  return (
    <div className="movie-item">
      <figure className="movie-poster">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w1280${
            item.poster_path
          }`}
          alt=""
        />
      </figure>
      <div className="movie-desc">
        <h3>{item.original_title}</h3>
      </div>
    </div>
  );
};

export default MovieItem;
