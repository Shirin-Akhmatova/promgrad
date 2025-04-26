import styles from "./Footer.module.scss";
import Telegram from "../../assets/icons/Icons-21.svg";
import WhatsApp from "../../assets/icons/Icons-22.svg";
import Instagram from "../../assets/icons/Component.svg";
import VK from "../../assets/icons/VK.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <nav className={styles.navbar}>
        <a href="#home" className={styles.navbar__logo}>
          {t("consortiumPromgrad")}
        </a>
        <div className={styles.navbar__icons}>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <img src={WhatsApp} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} />
          </a>
          <a href="#home" className={styles.navbar__logo_hidden}>
            {t("consortiumPromgrad")}
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} />
          </a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <img src={VK} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} />
          </a>
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
