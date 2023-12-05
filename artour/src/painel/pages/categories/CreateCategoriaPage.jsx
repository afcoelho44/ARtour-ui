import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { saveCategoryApi } from "../../../api/Services";



export default function CreateCategoriaPage() {
  const navigate = useNavigate();
  const [nome, setNomeCategoria] = useState('');
  const [newCategory, setNewCategory]= useState();

  const handlerSubmit = async (event) => {
    //PODEM HAVER VALIDAÇÕES NO FORMULÁRIO
    event.preventDefault();
    recoverUser();
    saveUser();
  };

  function recoverUser() {
    const category = {
      name: nome,
    };
    setNewCategory(category);
  }

  function saveUser() {
    saveCategoryApi(newCategory)
      .then(() => {
        navigate("/painel/categoria/");
        console.log("Categoria registrada: " + newCategory);
      })
      .catch((erro) => console.log(erro));
  }
  return (
    <>
      <h3>Cadastro de Categoria</h3>
      <hr />
      <Form onSubmit={handlerSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setNomeCategoria(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Link to="/painel/categoria/">
          <Button variant="danger">Cancelar</Button>{" "}
        </Link>
        <Button variant="success" type='submit'>
          Confirmar
        </Button>{" "}
      </Form>
      </>
  );
}