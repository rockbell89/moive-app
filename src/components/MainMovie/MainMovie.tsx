import { Movie } from "../../core";
import "./MainMovie.scss";

interface MainMovieProps {
  item: Movie;
}

const MainMovie: React.FC<MainMovieProps> = ({ item }) => {
  return (
    <section className="main-movie">
      <figure className="main-movie-poster">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w1280${
            item?.backdrop_path
          }`}
        />
      </figure>
      <div className="main-movie-desc">
        <h2>{item?.original_title}</h2>
        <p className="main-movie-summary">
          <span> {item?.release_date}</span>
          <span>
            {item?.vote_average} ({item?.vote_count})
          </span>
          <span>{item?.popularity}</span>
        </p>
        <p>{item?.overview}</p>
      </div>
    </section>
  );
};

export default MainMovie;
