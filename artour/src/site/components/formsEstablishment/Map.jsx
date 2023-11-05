import { MapContainer, TileLayer } from "react-leaflet";
import styler from "./LayoutFormEstablisment.css";

export default function Map() {
  return (
    <MapContainer
      className={styler.map}
      center={[-27.048853909536568, -49.536828911911755]}
      zoom={15}
    >
      <TileLayer
        attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
