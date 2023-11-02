import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavbarSite() {
  return (
    <Navbar
      sticky="top"
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="/">
            <i class="fa-solid fa-vr-cardboard"></i>&nbsp; ARTour
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarToggle" />
        <Navbar.Collapse id="navbarToggle" className="justify-content-end">
          <Nav>
            <Link to="/">
              <Nav.Link href="/">Página Inicial</Nav.Link>
            </Link>
            <Link to="/pesquisa">
              <Nav.Link href="/pesquisa">Pesquisa</Nav.Link>
            </Link>
            <Link to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
