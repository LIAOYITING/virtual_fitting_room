import React from 'react';
import { useSelector } from 'react-redux';
import { Button,Alert,Card, Nav, Col, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavTab(props) {
  const navPills = useSelector((state) => state.NavTabReducer.navPills);
  const renderNavTab = () => {
    return navPills.map((item, index) => {
      return (
        <Nav.Item as="li" key={index}>
          <Nav.Link as="a" btn-default data-toggle="pill" href={`#${item.tabName}`}>
            {item.showName}
          </Nav.Link> 
        </Nav.Item> 
      );
    });
  };
  return (
    <div>
      <Nav.Item as="ul"  className="nav nav-tabs justify-content-center">{renderNavTab()}</Nav.Item>
    </div>
  );
}

