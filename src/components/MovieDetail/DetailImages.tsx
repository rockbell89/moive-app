import React from "react";
import { Image } from "../../core";
import "./DetailImages.scss";

interface DetailImagesProps {
  logos?: Image[];
  backdrops?: Image[];
  posters?: Image[];
}

const DetailImages: React.FC<DetailImagesProps> = ({
  logos,
  backdrops,
  posters,
}) => {
  return (
    <section className="movie-detail-section">
      <h3>Images</h3>
      <div className="carousel-list">
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => (
            <div key={index} className="image-card">
              {logo.file_path ? (
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w200${
                    logo.file_path
                  }`}
                  alt={`로고 이미지`}
                />
              ) : (
                <div className="default-image">BONGFLIX</div>
              )}
            </div>
          ))}
      </div>
      <div className="carousel-list">
        {posters &&
          posters.length > 0 &&
          posters.map((poster, index) => (
            <div key={index} className="image-card">
              {poster.file_path ? (
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w200${
                    poster.file_path
                  }`}
                  alt={`포스터 이미지`}
                />
              ) : (
                <div className="default-image">BONGFLIX</div>
              )}
            </div>
          ))}
      </div>
      <div className="carousel-list">
        {backdrops &&
          backdrops.length > 0 &&
          backdrops.map((backdrops, index) => (
            <div key={index} className="image-card">
              {backdrops.file_path ? (
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w200${
                    backdrops.file_path
                  }`}
                  alt={`포스터 이미지`}
                />
              ) : (
                <div className="default-image">BONGFLIX</div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default DetailImages;
