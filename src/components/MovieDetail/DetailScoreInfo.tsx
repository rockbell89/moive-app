import React from "react";
import { MovieDetail } from "../../core";

interface DetailScoreInfoProps {
  item: MovieDetail;
}

const DetailScoreInfo: React.FC<DetailScoreInfoProps> = ({ item }) => {
  return (
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
  );
};

export default DetailScoreInfo;
