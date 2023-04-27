import React from "react";
import { Col, Row } from "antd";
import { DetailInfoProps } from "../../core/interfaces/movie-credits.interface";
import "./DetailInfo.scss";

const DetailInfo: React.FC<DetailInfoProps> = ({ item, credit }) => {
  const { cast: casts } = credit;

  return (
    <div className="movie-detail-info">
      <section className="movie-score-info">
        <div>
          <h5>평점</h5>
          <span>{item?.vote_average.toFixed(1)} / 10</span>
        </div>
        <div>
          <h5>인기도</h5>
          <span>{item?.popularity}</span>
        </div>
        <div>
          <h5>매출액</h5>
          <span>
            {item?.revenue
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </section>
      <section className="movie-detail-section">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <figure className="movie-detail-poster">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w500${
                  item?.poster_path
                }`}
              />
            </figure>
          </Col>
          <Col span={16}>
            <div className="movie-detail-outline">
              <p>
                <span>제목</span>
                {item.title}
              </p>
              <p>
                <span>원제목</span>
                {item.original_title}
              </p>
              <p>
                <span>개봉일</span>
                {item.release_date}
              </p>
              <p>
                <span>지원언어</span>
                {item.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section className="movie-detail-section">
        <h3>Overview</h3>
        <p>{item?.overview}</p>
      </section>
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
      <section className="movie-detail-section">
        <h3>Production Companies</h3>
        <Row gutter={[16, 16]}>
          {item.production_companies.length > 0 &&
            item.production_companies.map((company) => (
              <Col span={24} md={12} key={company.id}>
                <div className="company-card">
                  <Row gutter={[16, 16]} align={"middle"}>
                    {company.logo_path && (
                      <Col span={6}>
                        <figure className="company-logo-image">
                          <img
                            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w500${
                              company.logo_path
                            }`}
                            alt={`${company.name} 로고 이미지`}
                          />
                        </figure>
                      </Col>
                    )}
                    <Col span={company.logo_path ? 18 : 24}>
                      <div className="company-card-info">
                        {company.name} ({company.origin_country})
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
        </Row>
      </section>
    </div>
  );
};

export default DetailInfo;
