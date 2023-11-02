import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./CardEstablishment.module.css";
import img_example from "../../assets/imgs/establishment_example.jpg"

function CardEstablishment_antigo(){
    return(
        <Card className={styles.card}>
        <Card.Img variant="top" src={img_example} />
        <Card.Body>
          <Card.Title>Establishment Example</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis nibh, ornare quis molestie ut, sodales ut ligula. In auctor interdum consectetur.
          </Card.Text>
          <Button variant="success">Visite o Local</Button>
        </Card.Body>
      </Card>
    )
}

export default CardEstablishment_antigo;