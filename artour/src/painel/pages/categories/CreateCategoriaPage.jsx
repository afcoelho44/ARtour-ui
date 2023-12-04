import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { saveUserApi } from "../../../api/Services";

export default function CreateCategoriaPage() {
  const [nome, setNomeCategoria] = useState('');

  const categoriaLogic = () => {
    // Lógica da categoria aqui
  };

  return (
    <>
      <h3>Cadastro de Categoria</h3>
      <hr />
      <Form>
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
        <Button variant="success" onClick={() => { console.log("oi")}}>
          Confirmar
        </Button>{" "}
      </Form>
      </>
  );
}