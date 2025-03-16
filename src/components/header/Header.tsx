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

        <div className={styles.language}>RU</div>
      </div>
    </header>
  );
};

export default Header;
