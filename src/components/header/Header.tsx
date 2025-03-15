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
        {/* Бургер-меню */}
        <div className={styles.burger}>
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>

        <a href="#" className={styles.logo}>
          LOGO
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <li className={styles.ulist}>
              <a href="#about">Главная</a>
              <img
                src="/src/assets/icons/Vector.svg"
                alt="About Icon"
                className={styles.icon}
              />
            </li>
            <li className={styles.ulist}>
              <a href="#services">О нас</a>
              <img
                src="/src/assets/icons/Vector.svg"
                alt="About Icon"
                className={styles.icon}
              />
            </li>
            <li className={styles.ulist}>
              <a href="#portfolio">Наши работы</a>
              <img
                src="/src/assets/icons/Vector.svg"
                alt="About Icon"
                className={styles.icon}
              />
            </li>
            <li className={styles.ulist}>
              <a href="#contact">Контакты</a>
              <img
                src="/src/assets/icons/Vector.svg"
                alt="About Icon"
                className={styles.icon}
              />
            </li>
          </ul>
        </nav>

        <div className={styles.language}>RU</div>
      </div>
    </header>
  );
};

export default Header;
