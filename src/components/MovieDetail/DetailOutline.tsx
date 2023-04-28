import { Col, Row } from "antd";
import { MovieDetail } from "../../core";

interface DetailOutlineProps {
  item: MovieDetail;
}

const DetailOutline: React.FC<DetailOutlineProps> = ({ item }) => {
  return (
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
              <span>상영시간</span>
              {item.runtime}
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
  );
};

export default DetailOutline;
