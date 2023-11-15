import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { approvedCommentApi, getCommentByIdApi } from "../../../api/Services";

function CurationAnalyzePage() {
  const navigate = useNavigate();
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

  const handlerSubmit = async (approvedCode) => {
    switch(approvedCode){
      case 1:
        setApprovedComment(1);
        break;
      case 2:
        setApprovedComment(2);
        break;
    }
  };

  function setApprovedComment(approvedCode) {
    approvedCommentApi(idComment, approvedCode)
      .then(() => {
        navigate("/painel/curadoria");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        </Form.Group>
        <hr />
        <Link to="/painel/curadoria">
          <Button variant="warning">Voltar</Button>{" "}
        </Link>
        <Button variant="danger" onClick={() => handlerSubmit(1)}>
          Reprovar Comentário
        </Button>{" "}
        <Button variant="success" onClick={() => handlerSubmit(2)}>
          Aprovar Comentário
        </Button>{" "}
      </Form>
    </>
  );
}

export default CurationAnalyzePage;