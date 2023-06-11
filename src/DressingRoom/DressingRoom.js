import React from 'react';
import ProjectIntroduction from './ProjectIntroduction';
import Product from './Product';
import ProductList from './ProductList';
import Model from './Model';
import '../assets/css/style.css';
import { Container,Row,Col,Button,Alert,Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function DressingRoom() {
  return (
    <Container>
      <Row>
        <Col className="col-12">
          <ProjectIntroduction />
        </Col>
      </Row>
      <Row>
          <Model />
          <Product />
          <div className="row" style={{ padding: '10px 10px' }}>
            <ProductList />
          </div>
      </Row>
    </Container>
  );
}
