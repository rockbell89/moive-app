import React from "react";
import { MovieDetail } from "../../core/interfaces/movie-detail.interface";
import "./DetailVisual.scss";
import { dateToYear } from "../../core";

interface DetailVisualProps {
  item: MovieDetail;
}

const DetailVisual: React.FC<DetailVisualProps> = ({ item }) => {
  return (
    <section className="detail-visual">
      <figure className="detail-visual-poster">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w1280${
            item?.backdrop_path
          }`}
        />
      </figure>
      <div className="detail-visual-desc">
        <h2>
          {item?.original_title} ({dateToYear(item.release_date)})
        </h2>
        <div className="tag-list">
          {item.genres.map((genre) => (
            <span key={genre.id} className="tag">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailVisual;
