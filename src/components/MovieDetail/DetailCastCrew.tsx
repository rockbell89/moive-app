import React from "react";
import { Cast } from "../../core";

interface DetailCastCrewProps {
  casts: Cast[];
}

const DetailCastCrew: React.FC<DetailCastCrewProps> = ({ casts }) => {
  return (
    <section className="movie-detail-section">
      <h3>Cast & Crew</h3>
      <div className="carousel-list">
        {casts &&
          casts.length > 0 &&
          casts.map((cast) => (
            <div key={cast.id} className="profile-card">
              <figure className="profile-card-image">
                {cast.profile_path ? (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w500${
                      cast.profile_path
                    }`}
                    alt={`${cast.character} 이미지`}
                  />
                ) : (
                  <div className="default-image">BONGFLIX</div>
                )}
              </figure>
              <div className="profile-card-info">
                <h5>{cast.character}</h5>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DetailCastCrew;
