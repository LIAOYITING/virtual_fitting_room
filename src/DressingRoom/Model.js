import React from 'react';
import { Container,Row,Col,Button,Alert,Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';

export default function Model() {
  const ModelReducer = useSelector((state) => state.ModelReducer);

  return (
    <Container>
      <Row>
        <div className="contain">
          <div
            className="bikinitop"
            style={{
              width: 500,
              height: 500,
              background: `url("${ModelReducer.topclothes}")`,
              backgroundRepeat:'no-repeat',
              position: 'absolute',
              top: '3%',
              left: '-5%',
              zIndex: 3,
              transform: 'scale(0.5)',
            }}
          />
          <div
            className="bikinibottom"
            style={{
              width: 500,
              height: 500,
              background: `url("${ModelReducer.botclothes}")`,
              backgroundRepeat:'no-repeat',
              position: 'absolute',
              top: '35%',
              left: '-5%',
              zIndex: 2,
              transform: 'scale(0.5)',
            }}
          />
          <div
            className="handbag"
            style={{
              width: 300,
              height: 300,
              background: `url("${ModelReducer.handbags}")`,
              backgroundRepeat:'no-repeat',
              position: 'absolute',
              bottom: '15%',
              right: '30%',
              transform: 'scale(0.5)',
              zIndex: 4,
            }}
          />
          <div
            className="feet"
            style={{
              width: 300,
              height: 300,
              background: `url("${ModelReducer.shoes}")`,
              backgroundRepeat:'no-repeat',
              position: 'absolute',
              top: '60%',
              right: '30%',
              transform: 'scale(0.5)',
              zIndex: 1,
            }}
          />
        </div>
      </Row>
    </Container>
  );
}
