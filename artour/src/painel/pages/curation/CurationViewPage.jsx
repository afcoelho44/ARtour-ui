import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { getCommentByIdApi } from "../../../api/Services";
import image_example from "../../../assets/imgs/establishment_example.jpg";

function CurationViewPage() {
  const { id } = useParams();
  const [idComment, setIdComment] = useState("");
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [approved, setApproved] = useState("");

  useEffect(() => {
    getCommentByIdApi(id)
      .then((response) => {
        setValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setValues = async (comment) => {
    setIdComment(comment.id);
    setUser(comment.user);
    setTitle(comment.title);
    setContent(comment.content);
    setApproved(comment.approved);
  };

  return (
    <>
      <h3>Visualização de Comentário</h3>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control type="text" value={idComment} disabled />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Usuário:</Form.Label>
            <Form.Control type="text" value={user} disabled />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Situação:</Form.Label>
            <Form.Control type="text" value={approved} disabled />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Título:</Form.Label>
          <Form.Control type="email" value={title} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Conteúdo:</Form.Label>
          <Form.Control type="textarea" value={content} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagens Enviadas:</Form.Label>
          <Container>
            <Row>
              <Col>
                <Image src={image_example} rounded/>
              </Col>
              <Col>
                <Image src={image_example} rounded/>
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <hr />
        <Link to="/painel/curadoria">
          <Button variant="warning">Voltar</Button>{" "}
        </Link>
      </Form>
    </>
  );
}

export default CurationViewPage;