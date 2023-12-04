import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import MapSelectLocation from "../FormEstablishment/MapSelectLocation";
import React, { useState } from "react";
import { EstabilishmentContext } from "../../../Providers/EstablishmentContext.jsx";

export default function FormRegister() {
    const [name, setName] = useState("");
    const [active, setActive] = useState(true);
    const {latitude} = React.useContext(EstabilishmentContext);
    const {longitude} = React.useContext(EstabilishmentContext);
    const [hour, setHour] = useState("");
    const [attractions, setAttractions] = useState("");
    const [fees_costs, setFees_costs] = useState("");
    const [category_id, setCategory_id] = useState("");

    const handleSubmit = (event) => {
        const Establishment = {
        name,
        active,
        latitude,
        longitude,
        hour,
        attractions,
        fees_costs,
        category_id,
        };
        console.log(Establishment);
    };

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
                type="text"
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