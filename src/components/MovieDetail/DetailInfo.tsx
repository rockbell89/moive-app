import React from "react";
import { DetailInfoProps } from "../../core/interfaces/movie-credits.interface";
import DetailScoreInfo from "./DetailScoreInfo";
import DetailOutline from "./DetailOutline";
import DetailOverview from "./DetailOverview";
import DetailCastCrew from "./DetailCastCrew";
import DetailProductCompany from "./DetailProductCompany";
import "./DetailInfo.scss";

const DetailInfo: React.FC<DetailInfoProps> = ({ item, credit }) => {
  const { cast: casts } = credit;

  return (
    <div className="movie-detail-info">
      <DetailScoreInfo item={item} />
      <DetailOutline item={item} />
      <DetailOverview overview={item.overview} />
      <DetailCastCrew casts={casts} />
      <DetailProductCompany companies={item.production_companies} />
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
