import styles from "./Footer.module.scss";
import Telegram from "../../assets/icons/Icons-21.svg";
import WhatsApp from "../../assets/icons/Icons-22.svg";
import Instagram from "../../assets/icons/Component.svg";
import Twitter from "../../assets/icons/Component (1).svg";
import Map from "../Map/Map";
import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/logo_mobile.svg";
import logo_desktop from "../../assets/icons/logo_mobile_big.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <Map />
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li>
            <a href="#home">{t("home")}</a>
          </li>
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#works">{t("works")}</a>
          </li>
          <li>
            <a href="#contacts">{t("contacts")}</a>
          </li>
        </ul>
        <div className={styles.navbar__icons}>
          <img src={Telegram} />
          <img src={WhatsApp} />
          <div className={styles.navbar__logo}>
            <a href="#home">
              {/* LOGO */}
              <img
                src={logo_desktop}
                alt="logo Icon"
                className={styles.logo_desktop}
              />
              <img src={logo} alt="logo Icon" className={styles.logo} />
            </a>
          </div>
          <img src={Instagram} />
          <img src={Twitter} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
