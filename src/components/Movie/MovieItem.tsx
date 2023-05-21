import { FC } from "react";
import { Movie } from "../../core";
import "./MovieItem.scss";
import { Link } from "react-router-dom";
import { IMAGE_SIZE, imageApi } from "../../uils";

interface MovieItemProps {
  item: Movie;
}

const MovieItem: FC<MovieItemProps> = ({ item }) => {
  return (
    <div className="movie-item">
      <Link to={`/movie/${item.id}`}>
        <figure className="movie-poster">
          {item.poster_path ? (
            <img
              src={imageApi(item.poster_path, IMAGE_SIZE.MD)}
              alt={`${item.original_title} 포스터 이미지`}
            />
          ) : (
            <div className="default-image">BONGFLIX</div>
          )}
        </figure>
        {/* <div className="movie-desc">
          <h3>{item.title}</h3>
        </div> */}
      </Link>
    </div>
  );
};

export default MovieItem;
