import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavbarSite() {
  return (
    <Navbar sticky="top" expand="md" bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
         <Navbar.Brand href="#">
        <i class="fa-solid fa-vr-cardboard"></i>&nbsp;
        ARTour</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggle"/>
        <Navbar.Collapse id="navbarToggle" className="justify-content-end">
        <Nav>
            <Nav.Link href="#">Página Inicial</Nav.Link>
            <Nav.Link href="#">Pesquisa</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
