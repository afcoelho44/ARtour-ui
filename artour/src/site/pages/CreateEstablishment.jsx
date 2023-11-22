import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../pages/CreateEstablishment.css";
import { Link } from "react-router-dom";
import { saveEstablishmentApi } from "../../api/Services";
import { useMapEvents } from "react-leaflet/hooks";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
// import { saveEstablishmentApi } from "../";

const customIcon = new Icon({
  iconUrl: "/src/assets/imgs/pointMap.png",
  iconSize: [40, 40],
});

export function MyComponent() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: (location) => {
      setPosition(location.latlng);
      console.log(position);
    },
  });
  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup> Sua posição</Popup>
    </Marker>
  );
}

export default function CreateEstablishment() {
  const [name, setName] = useState("");
  const [active, setActive] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
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
    <div>
      <h1>Adicionando um Estabelecimento</h1>

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

        <Form.Group className="mb-3" controlId="formBasicLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
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
          <Form.Control type="text" placeholder="Atrações" />
        </Form.Group>

        <MapContainer center={[-27.0559, -49.5209]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent />
        </MapContainer>

        <Row>
          <div className="col-md-6">
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}
