import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./nav.css";
import Navbar from "react-bootstrap/Navbar";
import { CartPlus } from "react-bootstrap-icons";
import proile from "../../images/image-avatar.png";

export function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-light ">
        <Container className="py-4 nav-container">
          <div className="cart"></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand
            className="h3 ms-2 flex-grow-1 flex-lg-grow-0"
            href="#home"
          >
            Sneakers
          </Navbar.Brand>
          <div className="icons position-relative order-0 order-lg-2">
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              99+
            </span>
            <CartPlus size={23} />

            <img width={40} className="img-fluid ms-4 " src={proile} alt="" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Collection</Nav.Link>
              <Nav.Link href="#home">Men</Nav.Link>
              <Nav.Link href="#home">Women</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
