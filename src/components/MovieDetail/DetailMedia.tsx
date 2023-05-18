import React from "react";
import { Video } from "../../core";
import "./DetailMedia.scss";

interface DetailMediaProps {
  videos: Video[];
}

const DetailMedia: React.FC<DetailMediaProps> = ({ videos }) => {
  return (
    <section className="movie-detail-section">
      <h3>Videos</h3>
      <div className="carousel-list">
        {videos.length > 0 &&
          videos.map((video) => (
            <div className="video-card" key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.key}`}
                target="_blank"
              >
                <img
                  src={`https://i1.ytimg.com/vi/${video.key}/mqdefault.jpg`}
                  alt={`${video.name} 유튜브 썸네일`}
                />
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DetailMedia;
