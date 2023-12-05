import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryByIdApi } from "../../../api/Services";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CategoryViewPage() { 

    const { id } = useParams();
    const [idCategory, setIdCategory] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        getCategoryByIdApi(id)
            .then((response) => {
                setValues(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const setValues = async (category) => {
        setIdCategory(category.id);
        setName(category.name);
    };

    return (
        <>
            <h3>Visualização de Categoria</h3>
            <hr />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Código</Form.Label>
                    <Form.Control type="text" value={idCategory} disabled />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" value={name} disabled />
                    </Form.Group>
                </Row>
                <hr />
                <Link to="/painel/categoria">
                    <Button variant="warning">Voltar</Button>{" "}
                </Link>
            </Form>
        </>
    );
}
export default CategoryViewPage;