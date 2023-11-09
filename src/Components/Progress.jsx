import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Progress = () => {
  return (
    <>
      <section style={{marginTop:'20px'}}>
        <Container>
          <Row>
            <Col sm>
              <div style={{textAlign:'center'}}>
                <h3>One</h3>
                <h2>1</h2>
              </div>
            </Col>
            <Col sm>
              <div style={{textAlign:'center'}}>
                <h3>Two</h3>
                <h2>2</h2>
              </div>
            </Col>
            <Col sm>
              <div style={{textAlign:'center'}}>
                <h3>Three</h3>
                <h2>3</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Progress;
