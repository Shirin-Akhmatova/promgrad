import { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("RU");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    closeModal();
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
  }, []);

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

        <a href="#" className={styles.logo}>
          LOGO
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <span className={styles.navSite}>Навигация по сайту</span>
            <li>
              <a href="#about" className={styles.ulist}>
                <span>Главная</span>
                <img
                  src="/src/assets/icons/Vector.svg"
                  alt="About Icon"
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="#about" className={styles.ulist}>
                <span>О нас</span>
                <img
                  src="/src/assets/icons/Vector.svg"
                  alt="About Icon"
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="#about" className={styles.ulist}>
                <span>Наши работы</span>
                <img
                  src="/src/assets/icons/Vector.svg"
                  alt="About Icon"
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="#about" className={styles.ulist}>
                <span>Контакты</span>
                <img
                  src="/src/assets/icons/Vector.svg"
                  alt="About Icon"
                  className={styles.icon}
                />
              </a>
            </li>
          </ul>
        </nav>

        {/*модалка */}
        <div className={styles.languageWrapper}>
          <div className={styles.language} onClick={openModal}>
            <span> {language}</span>
            <img
              src="/src/assets/icons/language.svg"
              alt="About Icon"
              className={styles.icon}
            />
          </div>

          {isModalOpen && (
            <div
              className={styles.languageModal}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => handleLanguageSelect("KG")}>KG</button>
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
