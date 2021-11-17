import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import './HomeBanner.css'
import { Link } from "react-router-dom";
const HomeBanner = () => {

  return (
    <div>
      <div className='main-banner d-flex align-items-center'>
        <Container>
          <Row lg={2} sm={1} xs={1} >
            <Col>
              <div className='pt-3'>
                <h3 className="text-warning">NEW ARRIVALS</h3>
                <h1 className="banner-heading">Our</h1>
                <h1 className="banner-heading">Collection</h1>
                <h2 className="text-info">Up to 33% Off</h2>
                <Link to='/explore'>
                  <Button variant="danger" className="px-5">EXPLORE</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
