import { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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

        <div className={styles.language}>RU</div>
      </div>
    </header>
  );
};

export default Header;
