import { useState } from "react";
import styles from "./Header.module.scss";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          LOGO
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <a href="#about">Главная</a>
            </li>
            <li>
              <a href="#services">О нас</a>
            </li>
            <li>
              <a href="#portfolio">Наши работы</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>

        {/* Бургер-меню с помощью hamburger-react */}
        <div className={styles.burger}>
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>

        <div className={styles.language}>RU</div>
      </div>
    </header>
  );
};

export default Header;
