import styles from "./Footer.module.scss";
import Telegram from "../../assets/icons/Icons-21.svg";
import WhatsApp from "../../assets/icons/Icons-22.svg";
import Instagram from "../../assets/icons/Component.svg";
import Twitter from "../../assets/icons/Component (1).svg";
import Map from "../Map/Map";

const Footer = () => {
  return (
    <footer>
      <Map />
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li>Главная</li>
          <li>О нас</li>
          <li>Наши работы</li>
          <li>Контакты</li>
        </ul>
        <div className={styles.navbar__icons}>
          <img src={Telegram} />
          <img src={WhatsApp} />
          <div className={styles.navbar__logo}>LOGO</div>
          <img src={Instagram} />
          <img src={Twitter} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
