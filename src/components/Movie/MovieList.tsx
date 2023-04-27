import React, { RefObject } from "react";
import MovieItem from "./MovieItem";
import { Movie } from "../../core";
import "./MovieList.scss";
import { Col, Row } from "antd";

interface MovieListProps {
  items: Movie[];
  sentinelRef: RefObject<HTMLDivElement>;
}

const MovieList: React.FC<MovieListProps> = ({ items, sentinelRef }) => {
  return (
    <>
      <div className="movie-list">
        <Row gutter={[16, 16]}>
          {items &&
            items.map((movie) => (
              <Col sm={12} md={8} lg={6} key={movie.id}>
                <MovieItem item={movie} />
              </Col>
            ))}
        </Row>
      </div>
      <div ref={sentinelRef}>Loading...</div>
    </>
  );
};

export default MovieList;
