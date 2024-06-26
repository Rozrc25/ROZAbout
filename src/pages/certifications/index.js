import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { certificates, meta } from "../../content_option";
import "./style.css";

export const Certifications = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Samples | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Certifications </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {certificates.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img className="priv" src={data.src} alt="" />
                <div className="content">
                  <p>{data.jobtitle}</p>
                  <p>{data.where}</p>
                  <a href={data.link}>view certificate</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
