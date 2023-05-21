import React from "react";
import { MovieDetail } from "../../core/interfaces/movie-detail.interface";
import "./DetailVisual.scss";
import { dateToYear } from "../../core";
import { IMAGE_SIZE, imageApi } from "../../uils";

interface DetailVisualProps {
  item: MovieDetail;
}

const DetailVisual: React.FC<DetailVisualProps> = ({ item }) => {
  return (
    <section className="detail-visual">
      <figure className="detail-visual-poster">
        <img
          src={imageApi(
            item?.backdrop_path || item?.poster_path,
            IMAGE_SIZE.LG
          )}
        />
      </figure>
      <div className="detail-visual-desc">
        <h2>
          {item?.original_title}
          {item.release_date && <>({dateToYear(item?.release_date)})</>}
        </h2>
        {item?.tagline && <p>{item?.tagline}</p>}
        {item.genres.length > 0 && (
          <div className="tag-list">
            {item.genres.map((genre) => (
              <span key={genre.id} className="tag">
                {genre.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailVisual;
