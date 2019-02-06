import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><a className="brand">TokoFlix</a></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Populer</Nav.Link>
          </Nav>
          <Nav>
          <span className="balance"> RP. 100.000 </span>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
