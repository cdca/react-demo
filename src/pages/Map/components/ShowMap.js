import GoogleMapReact from "google-map-react";
import { MapStyled, Marker } from "../Map.style";

const ShowMap = ({ result }) => {
  return result.success ? (
    <MapStyled>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBhAIKX3vlVU-mdRy30g8SswPhH4r9IXS4",
        }}
        defaultZoom={13}
        center={{ lat: result.latitude, lng: result.longitude }}
        options={{ fullscreenControl: false, zoomControl: false }}
      >
        <Marker lat={result.latitude} lng={result.longitude} />
      </GoogleMapReact>
    </MapStyled>
  ) : (
    <h1>{result.error}</h1>
  );
};

export default ShowMap;
