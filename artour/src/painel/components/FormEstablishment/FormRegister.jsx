import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import MapSelectLocation from "../FormEstablishment/MapSelectLocation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EstabilishmentContext } from "../../../Providers/EstablishmentContext.jsx";
import { getAllCategoriesApi, saveEstablishmentApi } from "../../../api/Services.js";

export default function FormRegister() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [active, setActive] = useState(true);
    const {latitude} = React.useContext(EstabilishmentContext);
    const {longitude} = React.useContext(EstabilishmentContext);
    const [hour, setHour] = useState("");
    const [attractions, setAttractions] = useState("");
    const [fees_costs, setFees_costs] = useState("");
    const [category_id, setCategory_id] = useState(0);
    const [categories, setCategories] = useState([]);
    const [establishment, setEstablishment] = useState({});

    React.useEffect(() => { 
        getAllCategoriesApi().then((response) => {
            setCategories(response.data);
        }).catch((erro)=> console.log(erro));
    }, []);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        recoverEstablishment();
        saveEstablishment();
    };
    function recoverEstablishment() {
        const Establishment = {
            name: name,
            active: active,
            latitude: latitude,
            longitude: longitude,
            hour: hour,
            attractions: attractions,
            fees_costs: fees_costs,
            category_id: category_id,
        };
        console.log(Establishment);
        setEstablishment(Establishment);
    }
    function saveEstablishment() { 
        console.log(establishment);
        saveEstablishmentApi(establishment).then(() => { 
            navigate("/painel/estabelecimento/todos");
            console.log("Estabelecimento registrado: " + establishment);
        })
            .catch((erro) => console.log(erro));
    }

    return (
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
                type="text"
                placeholder="Nome do Estabelecimento"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Categoria</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event) => setCategory_id(event.target.value)}>
                    {categories.map((category) => <option value={category.id}>{ category.name}</option>)}
                </Form.Select>
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicActive">
            <Form.Label>Ativo</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ativo"
                value={active}
                onChange={(event) => setActive(event.target.value)}
            />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="formBasicHour">
            <Form.Label>Horário</Form.Label>
            <Form.Control
                type="time"
                placeholder="Horário"
                value={hour}
                onChange={(event) => setHour(event.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAttractions">
            <Form.Label>Atrações</Form.Label>
                <Form.Control type="text" placeholder="Atrações"
                onChange={(event) => setAttractions(event.target.value)}/>
            </Form.Group>   
            
            <Form.Group className="mb-3" controlId="formBasicAttractions">
            <Form.Label>Custo da entrada</Form.Label>
                <Form.Control type="text" placeholder="Custo da entrada"
                onChange={(event) => setFees_costs(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLatitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
                type="text"
                placeholder={latitude}
                    defaultValue={latitude}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLongitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
                type="text"
                placeholder={longitude}
                defaultValue={longitude}
            />
            </Form.Group>
            <MapSelectLocation/>
            <Row>
            <div className="col-md-6">
                <Button variant="primary" type="submit">
                Salvar
                </Button>
            </div>
            </Row>
            </Form>
        
    );
}