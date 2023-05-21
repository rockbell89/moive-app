import React from "react";
import { Col, Row } from "antd";
import { ProductionCompany } from "../../core";
import { IMAGE_SIZE, imageApi } from "../../uils";

interface DetailProductCompanyProps {
  companies: ProductionCompany[];
}

const DetailProductCompany: React.FC<DetailProductCompanyProps> = ({
  companies,
}) => {
  return (
    <section className="movie-detail-section">
      <h3>Production Companies</h3>
      <Row gutter={[16, 16]}>
        {companies.length > 0 &&
          companies.map((company) => (
            <Col span={24} md={12} key={company.id}>
              <div className="company-card">
                <Row gutter={[16, 16]} align={"middle"}>
                  {company.logo_path && (
                    <Col span={6}>
                      <figure className="company-logo-image">
                        <img
                          src={imageApi(company.logo_path, IMAGE_SIZE.MD)}
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
  );
};

export default DetailProductCompany;
