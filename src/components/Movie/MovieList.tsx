import React, { RefObject } from "react";
import MovieItem from "./MovieItem";
import { Movie } from "../../core";
import "./MovieList.scss";
import { Col, Row } from "antd";

interface MovieListProps {
  items: Movie[];
  sentinelRef?: RefObject<HTMLDivElement>;
  isVisible?: boolean;
  hasMore?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  items,
  isVisible,
  sentinelRef,
  hasMore,
}) => {
  return (
    <>
      <div className="movie-list">
        {items.length > 0 ? (
          <Row gutter={[16, 16]}>
            {items &&
              items.map((movie) => (
                <Col span={12} md={8} lg={6} xl={4} key={movie.id}>
                  <MovieItem item={movie} />
                </Col>
              ))}
          </Row>
        ) : (
          <div className="no-results">검색 결과가 없습니다</div>
        )}
      </div>

      {!isVisible && (
        <>
          <div className="loading">Loading...</div>
        </>
      )}
      {hasMore && <div ref={sentinelRef}>&nbsp;</div>}
    </>
  );
};

export default MovieList;
