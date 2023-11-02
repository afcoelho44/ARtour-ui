import Container from "react-bootstrap/Container";
import NavbarSite from "./site/components/NavbarSite";
import ContainerSite from "./site/components/ContainerSite";
import HomePage from "./site/pages/HomePage";

function App() {
  return (
    <>
      <NavbarSite />
      <Container fluid="md" className="justify-content-md-center">
        <HomePage />
      </Container>
    </>
  );
}

export default App;
