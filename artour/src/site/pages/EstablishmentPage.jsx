import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./EstablishmentPage.module.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image_example from "../../assets/imgs/establishment_example.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ComentaryEstablishment from "../components/ComentaryEstablishment.jsx";
import { getApprovedCommentsFromEstablishment, getEstablishmentByIdApi } from "../../api/Services";

function EstablishmentPage() {
  const { id } = useParams();
  const [transitionTime, setTransitionTime] = useState(5000);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [hours, setHours] = useState("");
  const [costs, setCosts] = useState("");
  const [attractions, setAttraction] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getEstablishmentByIdApi(id)
      .then((response) => {
        setValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      getApprovedCommentsFromEstablishment(id)
      .then((response) => {
        setCommentsListValue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function setValues(establishment) {
    setName(establishment.name);
    setCategory(establishment.category);
    setHours(establishment.hour);
    setCosts(establishment.fees_costs);
    setAttraction(establishment.attractions);
  }

  function setCommentsListValue(commentsList){
    setCommentsList(commentsList);
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6} sm={12} xs={12} className={styles.content}>
            <Carousel>
              <Carousel.Item interval={transitionTime}>
                <img src={image_example} />
              </Carousel.Item>
              <Carousel.Item interval={transitionTime}>
                <img src={image_example} />
              </Carousel.Item>
              <Carousel.Item interval={transitionTime}>
                <img src={image_example} />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <content className={styles.content}>
              <h1>{name}</h1>
              <p className={styles.title}>Categoria:</p>
              <ul>
                <li>{category}</li>
              </ul>
              <p className={styles.title}>Horário de Funcionamento:</p>
              <ul>
                <li>A partir das {hours} horas</li>
              </ul>
              <p className={styles.title}>Atrações do local:</p>
              <ul>
                <li>{attractions}</li>
              </ul>
              <p className={styles.title}>Custos:</p>
              <ul>
                <li>{costs}</li>
              </ul>
            </content>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <h2>Experiências:</h2>
        <Form>
          <Form.Group>
            <Form.Label>
              Deixe a sua experiência, e contribua para a experiencia de outros
              turistas:
            </Form.Label>
            <Form.Control placeholder="Digite a sua experiência aqui !"/>
          </Form.Group>
          <br />
          <Button variant="success">Enviar</Button>
        </Form>
        <hr />
        <p className={styles.title}> Veja as experiências de outros turistas:</p>
        {commentsList.map((comentary) => {
          <ComentaryEstablishment comentary={comentary} />
        })}
      </Container>
    </>
  );
}

export default EstablishmentPage;
