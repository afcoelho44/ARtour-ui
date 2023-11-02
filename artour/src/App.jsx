import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarSite from "./site/components/NavbarSite";

function App() {
  return (
    <>
      <NavbarSite />
      <Container fluid="md" className="justify-content-md-center">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
