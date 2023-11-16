import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Nav.Link href="/">Página Inicial</Nav.Link>
            <Nav.Link href="/teste.html">Pesquisa</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Administrador" id="basic-nav-dropdown">
              <NavDropdown.Item href="/painel/usuario">
                Usuários
              </NavDropdown.Item>
              <NavDropdown.Item href="INFORMAR ROTA">
                Categoria
              </NavDropdown.Item>
              <NavDropdown.Item href="INFORMAR ROTA">
                Ponto Turístico
              </NavDropdown.Item>
              <NavDropdown.Item href="/painel/curadoria">
                Curadoria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="INFORMAR FUNÇÃO">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
