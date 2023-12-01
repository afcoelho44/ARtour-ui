import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../FormEstablishment/MapSelectLocation.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { EstabilishmentContext } from "../../../Providers/EstablishmentContext.jsx";

const customIcon = new Icon({
    iconUrl: "/src/assets/imgs/pointMap.png",
    iconSize: [40, 40],
  });
  
  

export function MyComponent() {
  
  const { setLatitude } = React.useContext(EstabilishmentContext);
  const { setLongitude}  = React.useContext(EstabilishmentContext);
  const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      },
    });
  return position === null ? null : (
      <Marker position={position} icon={customIcon}>
        <Popup> Sua posição</Popup>
      </Marker>
    );
  }
export default function MapSelectLocation() { 
  
    return (
        <MapContainer center={[-27.0559, -49.5209]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent />
        </MapContainer>

    );
}