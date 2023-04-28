import React from "react";

interface DetailOverviewProps {
  overview: string;
}

const DetailOverview: React.FC<DetailOverviewProps> = ({ overview }) => {
  return (
    <section className="movie-detail-section">
      <h3>Overview</h3>
      <p>{overview}</p>
    </section>
  );
};

export default DetailOverview;
