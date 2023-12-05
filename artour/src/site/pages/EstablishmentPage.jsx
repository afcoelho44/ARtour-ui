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
import {
  getApprovedCommentsFromEstablishment,
  getEstablishmentByIdApi,
  saveComentaryApi,
} from "../../api/Services";

function EstablishmentPage() {
  const { id } = useParams();
  const [transitionTime, setTransitionTime] = useState(5000);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [hours, setHours] = useState("");
  const [costs, setCosts] = useState("");
  const [attractions, setAttraction] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [titleComentary, setTitleComentary] = useState("");
  const [textComentary, setTextComentary] = useState("");
  const [newComment, setNewComment] = useState();
  const [establishment, setEstablishment] = useState();

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
    setEstablishment(establishment);
  }

  function setCommentsListValue(commentsList) {
    setCommentsList(commentsList);
  }

  const handlerSubmit = async (event) => {
    recoverComentary();
    saveComentary();
  };

  function recoverComentary() {
    const Comentary = {
      title: titleComentary,
      content: textComentary,
      establishment_id: establishment.id,
      media: null,
      approved: 1,
      user_id: 1,
    };
    console.log(Comentary);
    setNewComment(Comentary);
  }

  function saveComentary() {
    saveComentaryApi(newComment)
      .then(() => {
        Navigate(".");
        console.log("Registrado> " + newComment);
      })
      .catch((error) => console.log(erro));
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
            <Form.Control
              type="text"
              placeholder="Digite um título !"
              onChange={(e) => setTitleComentary(e.target.value)}
            />
            <br />
            <Form.Control
              type="textarea"
              placeholder="Digite a sua experiência aqui !"
              onChange={(e) => setTextComentary(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="success" onClick={handlerSubmit}>
            Enviar
          </Button>
        </Form>
        <hr />
        <p className={styles.title}>
          {" "}
          Veja as experiências de outros turistas:
        </p>
        <Row>
          {commentsList.map((comentary) => (
            <Col>
              <ComentaryEstablishment comentary={comentary} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default EstablishmentPage;
