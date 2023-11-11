import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { saveUserApi } from "../../../api/Services";

function UserRegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState();

  const handlerSubmit = async (event) => {
    //PODEM HAVER VALIDAÇÕES NO FORMULÁRIO
    recoverUser();
    saveUser();
  };

  function recoverUser() {
    const User = {
      name: name,
      admin: true,
      phone: phone,
      email: email,
      password: password,
    };
    setNewUser(User);
  }

  function saveUser() {
    saveUserApi(newUser)
      .then(() => {
        navigate("/painel/usuario");
        console.log("Usuario registrado: " + newUser);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <>
      <h3>Cadastro de Usuário</h3>
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Link to="/painel/usuario">
          <Button variant="danger">Cancelar</Button>{" "}
        </Link>
        <Button variant="success" onClick={handlerSubmit}>
          Confirmar
        </Button>{" "}
      </Form>
    </>
  );
}

export default UserRegisterPage;
