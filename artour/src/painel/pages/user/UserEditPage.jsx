import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getUserByIdApi, updateUserApi } from "../../../api/Services";
import ModalConfirm from "../../components/ModalConfirm";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [openModal, setOpenModal] = useState(false);
  const mensage = "Você deseja confirmar a alteração ?";

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

  function handlerSubmit() {
    //PODEM HAVER VALIDAÇÕES NO FORMULÁRIO
    recoveredUser();
    updateUser();
  }

  const setValues = async (user) => {
    setIdUser(user.id);
    setName(user.name);
    setPhone(user.phone);
    setEmail(user.email);
    setUser(user);
  };

  function recoveredUser() {
    user.name = name;
    user.phone = phone;
    user.email = email;
  }

  function updateUser() {
    updateUserApi(idUser, user)
      .then(() => {
        navigate("/painel/usuario");
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <>
      <h3>Visualização de Usuário</h3>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control type="text" value={idUser} disabled />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Link to="/painel/usuario">
          <Button variant="danger">Cancelar</Button>{" "}
        </Link>
        <Button variant="success" onClick={() => setOpenModal(true)}>
          Confirmar
        </Button>{" "}
      </Form>
      {openModal && (
        <ModalConfirm
          mensage={mensage}
          onConfirm={handlerSubmit}
          open={openModal}
          setClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default UserEditPage;
