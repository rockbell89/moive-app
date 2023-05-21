import { Col, Row } from "antd";
import { MovieDetail } from "../../core";
import { IMAGE_SIZE, imageApi } from "../../uils";

interface DetailOutlineProps {
  item: MovieDetail;
}

const DetailOutline: React.FC<DetailOutlineProps> = ({ item }) => {
  return (
    <section className="movie-detail-section">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <figure className="movie-detail-poster">
            <img src={imageApi(item?.poster_path, IMAGE_SIZE.MD)} />
          </figure>
        </Col>
        <Col span={16}>
          <div className="movie-detail-outline">
            <p>
              <span>제목</span>
              {item.title}
            </p>
            {item.original_title && (
              <p>
                <span>원제목</span>
                {item.original_title}
              </p>
            )}
            {item.release_date && (
              <p>
                <span>개봉일</span>
                {item.release_date}
              </p>
            )}
            {item.runtime > 0 && (
              <p>
                <span>상영시간</span>
                {item.runtime}
              </p>
            )}
            {item.spoken_languages.length > 0 && (
              <p>
                <span>지원언어</span>
                {item.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DetailOutline;
