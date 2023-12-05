import React, { useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCategoryByIdApi, updateCategoryApi } from "../../../api/Services";
import ModalConfirm from "../../components/ModalConfirm";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CategoryEditPage() { 
    const { id } = useParams();

    console.log(id);
    const navigate = useNavigate();
    const [idCategory, setIdCategory] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const mensage = "Você deseja confirmar a alteração ?";
    
    React.useEffect(() => {
        getCategoryByIdApi(id).then((response) => {
            setValues(response.data);
            console.log(response.data);
        }).catch((erro) => { console.log(erro);});
    }, []);
    
    function handlerSubmit() {
        recorveredCategory();
        updateCategory();
    }

    const setValues = async (category) => {
        setIdCategory(category.id);
        setName(category.name);
        setCategory(category);
    }

    function recorveredCategory() {
        category.name = name;
    }

    function updateCategory() {
        updateCategoryApi(idCategory, category)
            .then(() => { 
                navigate("/painel/categoria");
            }).catch((erro) => console.log(erro));
    }
    return (
        <>
        <h3>Visualização de Usuário</h3>
        <hr />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" value={idCategory} disabled />
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
            </Row>
          <hr />
          <Link to="/painel/categoria">
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

export default CategoryEditPage;