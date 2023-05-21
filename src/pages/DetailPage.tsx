import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailVisual from "../components/MovieDetail/DetailVisual";
import { MovieDetail } from "../core/interfaces/movie-detail.interface";
import DetailInfo from "../components/MovieDetail/DetailInfo";
import { CreditResponse } from "../core/interfaces/movie-credits.interface";
import { movieApi } from "../uils";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState<MovieDetail | null>(null);
  const [movieCredit, setMovieCredit] = useState<CreditResponse>({
    cast: [],
    crew: [],
  });
  const fetchMovieInfo = async () => {
    const { data } = await movieApi.get(`/movie/${movieId}`, {
      language: "ko-KR",
      append_to_response: "videos,images",
      include_image_language: "en",
    });

    if (data) {
      setMovieInfo(data);
    }
  };

  const fetchMovieCredits = async () => {
    const { data } = await movieApi.get(`/movie/${movieId}/credits`, {
      language: "ko-KR",
    });

    if (data) {
      setMovieCredit(data);
    }
  };

  useEffect(() => {
    fetchMovieInfo();
    fetchMovieCredits();
  }, []);

  return (
    <div>
      {movieInfo && (
        <div>
          <DetailVisual item={movieInfo} />
          <DetailInfo item={movieInfo} credit={movieCredit} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
