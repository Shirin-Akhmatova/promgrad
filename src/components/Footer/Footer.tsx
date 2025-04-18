import styles from "./Footer.module.scss";
import Telegram from "../../assets/icons/Icons-21.svg";
import WhatsApp from "../../assets/icons/Icons-22.svg";
import Instagram from "../../assets/icons/Component.svg";
import Twitter from "../../assets/icons/Component (1).svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <nav className={styles.navbar}>
        <a href="#home" className={styles.navbar__logo}>
          КОНСОРЦИУМ ПРОМГРАД
        </a>
        <div className={styles.navbar__icons}>
          <img src={Telegram} />
          <img src={WhatsApp} />
          <a href="#home" className={styles.navbar__logo_hidden}>
            КОНСОРЦИУМ ПРОМГРАД
          </a>
          <img src={Instagram} />
          <img src={Twitter} />
        </div>
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
      </nav>
    </footer>
  );
};

export default Footer;
