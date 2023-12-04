import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardEstablishment.module.css";
import img_example from "../../assets/imgs/establishment_example.jpg";

function CardEstablishment({ establishment }) {
  const [title, setTitle] = useState(establishment.name);
  const [text, setText] = useState(establishment.attractions);
  const [idEstablishment, setIdEstablishment] = useState(establishment.id);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={img_example} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={`/estabelecimento/${idEstablishment}`}>
          <Button variant="success">Visite o Local</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardEstablishment;
