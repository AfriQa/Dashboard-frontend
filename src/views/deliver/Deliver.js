import React from "react";
import Card from "@material-ui/core/Card";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as mapData from "./data/skateboard-parks.json";

export const icon = new Icon({
  iconUrl: require("./afriGreen.png"),
  iconSize: [30, 40],
});

export default function Deliver() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Card>
      <div>
        <MapContainer center={[8.9806, 38.7578]} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {mapData.features.map((park) => (
            <Marker
              key={park.properties.PARK_ID}
              position={[
                park.geometry.coordinates[0],
                park.geometry.coordinates[1],
              ]}
              onClick={() => {
                setActivePark(park);
              }}
              icon={icon}
            />
          ))}

          {activePark && (
            <Popup
              position={[
                activePark.geometry.coordinates[1],
                activePark.geometry.coordinates[0],
              ]}
              onClose={() => {
                setActivePark(null);
              }}
            >
              <div>
                <h2>{activePark.properties.NAME}</h2>
                <p>{activePark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </Card>
  );
}
