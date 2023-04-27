import { FC } from "react";
import { Movie } from "../../core";
import "./MovieItem.scss";
import { Link } from "react-router-dom";

interface MovieItemProps {
  item: Movie;
}

const MovieItem: FC<MovieItemProps> = ({ item }) => {
  return (
    <div className="movie-item">
      <Link to={`/movie/${item.id}`}>
        <figure className="movie-poster">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w500${
              item.poster_path
            }`}
            alt={`${item.original_title} 포스터 이미지`}
          />
        </figure>
        <div className="movie-desc">
          <h3>{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
