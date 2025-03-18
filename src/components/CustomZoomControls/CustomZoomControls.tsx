import { useMap } from "react-leaflet";
import styles from "./CustomZoomControls.module.scss";
import zoomIn from "../../assets/icons/Icons-13.svg";
import zoomOut from "../../assets/icons/Icons-14.svg";
import upIcon from "../../assets/icons/upIcon.svg";
import downIcon from "../../assets/icons/downIcon.svg";

const CustomZoomControls = () => {
  const map = useMap();

  return (
    <div className={styles.custom_zoom_controls}>
      <a href="#top" className={styles.scroll_button}>
        <img src={upIcon} />
      </a>
      <button onClick={() => {}} className={styles.scroll_button}>
        <img src={downIcon} />
      </button>

      <button onClick={() => map.zoomIn()} className={styles.zoom_button}>
        <img src={zoomIn} />
      </button>
      <button onClick={() => map.zoomOut()} className={styles.zoom_button}>
        <img src={zoomOut} />
      </button>
    </div>
  );
};

export default CustomZoomControls;
