import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import CustomMarker from "../CustomMarker/CustomMarker";
import CustomZoomControls from "../CustomZoomControls/CustomZoomControls";

const Map = () => {
  return (
    <div className={styles.map_container}>
      <MapContainer
        center={[42.8746, 74.625]}
        zoom={14}
        style={{ height: "550px", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer url="https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}" />

        <CustomMarker position={[42.886, 74.6255]} text="Чуй 97/а" />
        <CustomMarker
          position={[42.8796, 74.6236]}
          text="Исанова 97/а"
          width={94}
          height={22}
        />
        <CustomMarker position={[42.8732, 74.619]} text="Чуй 97/а" />
        <CustomMarker position={[42.87, 74.6358]} text="Чуй 97/а" />
        <CustomMarker position={[42.8744, 74.6024]} text="Чуй 97/а" />
        <CustomMarker
          position={[42.8834, 74.591]}
          text="Исанова 97/а"
          width={94}
          height={22}
        />
        <CustomMarker
          position={[42.8704, 74.5838]}
          text="Исанова 97/а"
          width={94}
          height={22}
        />
        <CustomMarker position={[42.8612, 74.5956]} text="Чуй 97/а" />
        <CustomMarker position={[42.883, 74.659]} text="Чуй 97/а" />

        <ZoomControl position="topright" />
        <CustomZoomControls />
      </MapContainer>
    </div>
  );
};

export default Map;
