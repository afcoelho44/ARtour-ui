import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserByIdApi } from "../../../api/Services";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UserViewPage() {
  const { id } = useParams();
  const [idUser, setIdUser] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Vai buscar na API o usuário que corresponde ao id
  useEffect(() => {
    getUserByIdApi(id)
      .then((response) => {
        setValues(response.data);
        console.log();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const setValues = async (user) => {
    setIdUser(user.id);
    setName(user.name);
    setPhone(user.phone);
    setEmail(user.email);
  };

  return (
    <>
      <h3>Visualização de Usuário</h3>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control type="text" value={idUser} disabled/>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" value={name} disabled/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control type="text" value={phone} disabled/>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" value={email} disabled/>
        </Form.Group>
        <hr />
        <Link to="/painel/usuario">
          <Button variant="warning">Voltar</Button>{" "}
        </Link>
      </Form>
    </>
  );
}

export default UserViewPage;