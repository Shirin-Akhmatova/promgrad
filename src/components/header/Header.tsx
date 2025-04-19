import { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";
import { useLanguageStore } from "../../store/useLanguage";
import { useTranslation } from "react-i18next";
import vector from "../../assets/icons/Vector.svg";
import language1 from "../../assets/icons/language.svg";
import { useModalProps } from "../../store/useModalProps";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { language, setLanguage } = useLanguageStore();
  const { isModalOpens } = useModalProps();

  const languageMapping = {
    KG: "ky",
    RU: "ru",
    EN: "en",
  } as const;

  const handleLanguageSelect = (lang: keyof typeof languageMapping) => {
    const languageLower = languageMapping[lang];
    setLanguage(languageLower);
    i18n.changeLanguage(languageLower);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Закрытие модалки
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(`.${styles.languageModal}`);
      const languageButton = document.querySelector(
        `.${styles.languageWrapper}`
      );
      if (
        modal &&
        !modal.contains(event.target as Node) &&
        !languageButton?.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (isModalOpens) {
        setIsHidden(true);
        return;
      }

      if (window.scrollY > lastScrollY) {
        setIsHidden(true); // scroll down
        setHasBackground(false);
      } else {
        setIsHidden(false); // scroll up
        if (window.scrollY > 50) {
          setHasBackground(true);
        } else {
          setHasBackground(false);
        }
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isModalOpens]);

  return (
    <header
      className={`${styles.header} 
        ${isHidden ? styles.hidden : ""} 
        ${hasBackground ? styles.withBackground : ""}
      `}
    >
      <div className={styles.container}>
        {/* Бургер-меню */}
        <div className={styles.burger}>
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>

        <a href="#" className={styles.logo_desktop}>
          {t("consortiumPromgrad")}
        </a>

        <a href="#" className={styles.logo}>
          {t("consortiumPromgrad")}
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <span className={styles.navSite}>{t("navigation")}</span>
            <li>
              <a
                href="#home"
                className={styles.ulist}
                onClick={() => setMenuOpen(false)}
              >
                <span>{t("home")}</span>
                <img src={vector} alt="home Icon" className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.ulist}
                onClick={() => setMenuOpen(false)}
              >
                <span>{t("about")}</span>
                <img src={vector} alt="about Icon" className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="#works"
                className={styles.ulist}
                onClick={() => setMenuOpen(false)}
              >
                <span>{t("works")}</span>
                <img src={vector} alt="works Icon" className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={styles.ulist}
                onClick={() => setMenuOpen(false)}
              >
                <span>{t("contacts")}</span>
                <img src={vector} alt="contacts Icon" className={styles.icon} />
              </a>
            </li>
          </ul>
        </nav>

        {/*модалка */}
        <div className={styles.languageWrapper}>
          <div className={styles.language} onClick={openModal}>
            <span>
              <span>{language.toUpperCase()}</span>
            </span>
            <img src={language1} alt="language Icon" className={styles.icon} />
          </div>

          {isModalOpen && (
            <div
              className={styles.languageModal}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => handleLanguageSelect("KG")}>KY</button>
              <button onClick={() => handleLanguageSelect("RU")}>RU</button>
              <button onClick={() => handleLanguageSelect("EN")}>EN</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
