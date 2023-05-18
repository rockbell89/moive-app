import React from "react";
import { DetailInfoProps } from "../../core/interfaces/movie-credits.interface";
import DetailScoreInfo from "./DetailScoreInfo";
import DetailOutline from "./DetailOutline";
import DetailOverview from "./DetailOverview";
import DetailCastCrew from "./DetailCastCrew";
import DetailProductCompany from "./DetailProductCompany";
import "./DetailInfo.scss";
import DetailMedia from "./DetailMedia";

const DetailInfo: React.FC<DetailInfoProps> = ({ item, credit }) => {
  const { cast: casts } = credit;

  return (
    <div className="movie-detail-info">
      <DetailScoreInfo item={item} />
      <DetailOutline item={item} />
      {item.overview.length > 0 && <DetailOverview overview={item.overview} />}
      {casts.length > 0 && <DetailCastCrew casts={casts} />}
      {item.videos.results.length > 0 && (
        <DetailMedia videos={item.videos.results} />
      )}
      {item.production_companies.length > 0 && (
        <DetailProductCompany companies={item.production_companies} />
      )}
      {item?.homepage && (
        <section>
          <a href={item?.homepage} target="_blank" className="btn-homepage">
            홈페이지
          </a>
        </section>
      )}
    </div>
  );
};

export default DetailInfo;
