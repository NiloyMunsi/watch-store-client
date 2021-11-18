import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SpringCollection.css";
const SpringCollection = () => {
  return (
    <div>
      <div className='text-center text-white my-5'>
        <h4>SEASONS SALE</h4>
        <h2>OUR PRIMIUM COLLECTION</h2>
      </div>
      <Container fluid className="collection-bg">
        <Row style={{ height: "100vh" }} lg={2} sm={1} xs={1}>
          <Col className=" d-flex align-items-center">
            <div className="py-5 px-3 collection-heading d-flex align-items-center ">
              <div className="spring-heading" >
                <h2>SPRING</h2>
                <h2>COLLECTION</h2>
                <h2> upto 30% off</h2>
                <br />
                <div className="text-center my-3">
                  <Link to='/explore'>
                    <Button variant="info" className="px-5">EXPLORE</Button>
                  </Link>
                </div>
              </div>

            </div>

          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default SpringCollection;
