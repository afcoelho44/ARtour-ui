import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardEstablishment_antigo from "../components/CardEstablishment_antigo";
import styles from "./HomePage.module.css";
import banner_ibirama from "../../assets/imgs/banner_ibirama.png";

function HomePage() {
  const numbers = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Container>
      <section>
        <img className={styles.img} src={banner_ibirama} alt="banner_ibirama.png"/>
        <h2>Faça turismo em <b>IBIRAMA</b> e aproveite essa experiência !</h2>
        <hr />
        <h3>Conheça os pontos turísticos:</h3>
      </section>
      <Row>
        {numbers.map((n) => (
          <Col className={styles.card} key={n}>
            <CardEstablishment_antigo />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
