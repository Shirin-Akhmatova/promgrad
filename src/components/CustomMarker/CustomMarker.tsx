import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import Location from "../../assets/icons/icons (3).svg";

type CustomMarkerProps = {
  position: [number, number]; // Пример для координат
  text: string;
  width?: number;
  height?: number;
};

const CustomMarker: React.FC<CustomMarkerProps> = ({
  position,
  text,
  width = 73,
  height = 26,
}) => {
  const map = useMap();

  useEffect(() => {
    const label = L.divIcon({
      className: "custom-label",
      html: `<div style="display: flex; justify-content: center; align-items: center; 
        position: relative; font-size: 12px; font-weight: 700;">
        <div style="background: #1A427F; border-radius: 50%; display: flex; justify-content: center; 
          align-items: center; width: 34px; padding: 7px;">
          <img src="${Location}" style="width: 20px; height: 20px;" />
        </div>
        <div style="background: #F3F8FF; margin-left: 4px; border-radius: 6px; width: ${width}px; height: ${height}px; 
          display: flex; justify-content: center; text-align: center; align-items: center; padding: 0 5px; white-space: nowrap; ">
          ${text}
        </div>
      </div>`,
    });

    const marker = L.marker(position, { icon: label }).addTo(map);

    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, text, width, height]);

  return null;
};

export default CustomMarker;
