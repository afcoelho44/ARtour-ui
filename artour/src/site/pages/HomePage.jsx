import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardEstablishment from "../components/CardEstablishment";
import styles from "./HomePage.module.css";
import banner_ibirama from "../../assets/imgs/banner_ibirama.png";
import { getAllEstablishmentApi } from "../../api/Services";

function HomePage() {
  const [establishmentList, setEstablishmentList] = useState([]);

  useEffect(() => {
    getEstablishmentsList();
  }, []);

  function getEstablishmentsList() {
    getAllEstablishmentApi()
    .then((response) => {
      setEstablishmentList(response.data);
    })
    .catch((erro) => console.log(erro));
  }

  return (
    <Container>
      <section>
        <img
          className={styles.img}
          src={banner_ibirama}
          alt="banner_ibirama.png"
        />
        <h2>
          Faça turismo em <b>IBIRAMA</b> e aproveite essa experiência !
        </h2>
        <hr />
        <h3>Conheça os pontos turísticos:</h3>
      </section>
      <Row>
        {establishmentList.map((establishment) => (
          <Col className={styles.card} key={establishment}>
            <CardEstablishment establishment={establishment}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
