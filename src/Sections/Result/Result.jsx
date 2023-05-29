import React from "react";
import Content from "../../Components/Content/Content";
import "./Result.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Result = () => {
  const storedData = localStorage.getItem("IPAddressData");
  const parsedData = JSON.parse(storedData);

  // create custom icon
  const customIcon = new Icon({
    iconUrl: require("../../images/icon-location.png"),
    iconSize: [30, 38], // size of the icon
  });

  // markers
  const markers = [
    {
      geocode: [parsedData.latitude, parsedData.longitude],
    },
  ];

  return (
    <div className="flex">
      <div className="result-content">
        <Content title="IP Address" info={parsedData.ip} />
        <Content
          title="City"
          info={parsedData.city ? parsedData.city : "N/A"}
        />
        <Content
          title="Region"
          info={parsedData.region ? parsedData.region : "N/A"}
        />
        <Content
          title="Country"
          info={parsedData.country_name ? parsedData.country_name : "N/A"}
        />
        <Content
          title="Country Population"
          info={
            parsedData.country_population
              ? parsedData.country_population
              : "N/A"
          }
        />
        <Content
          title="Postal"
          info={parsedData.postal ? parsedData.postal : "N/A"}
        />
        <Content
          title="Timezone"
          info={parsedData.timezone ? parsedData.timezone : "N/A"}
        />
        <Content
          title="Calling Code"
          info={
            parsedData.country_calling_code
              ? parsedData.country_calling_code
              : "N/A"
          }
        />
        <Content
          title="Currency"
          info={parsedData.currency ? parsedData.currency : "N/A"}
        />
        <Content
          title="Languages"
          info={parsedData.languages ? parsedData.languages : "N/A"}
        />
        <Content title="Org" info={parsedData.org ? parsedData.org : "N/A"} />
      </div>

      <div className="map-container">
        {parsedData.latitude && parsedData.longitude && (
          <MapContainer
            center={[parsedData.latitude, parsedData.longitude]}
            zoom={12}
          >
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme"
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />

            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                  <span>Location Found</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Result;
