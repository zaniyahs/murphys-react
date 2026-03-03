'use client';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

export default function TopMenu() {
  return (
    <Navbar id="topMenu" className="py-2">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="#"><Image src="/murphyslogowhite.png" width="200px" alt="Logo" /></Navbar.Brand>
        </Nav>
        <Nav className="ms-auto align-items-center">
          <Nav.Link className="text-white">Home</Nav.Link>
          <Nav.Link className="text-white">About Us</Nav.Link>
          <Nav.Link className="text-white">St. Patrick's Day</Nav.Link>
          <Nav.Link className="text-white">To Go Ordering</Nav.Link>
          <Nav.Link className="text-white"><Instagram /></Nav.Link>
          <Nav.Link className="text-white"><Facebook /></Nav.Link>
          <Nav.Link className="text-white"><Twitter /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}