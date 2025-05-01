import { useEffect, useRef, useState } from "react";
import styles from "../../assets/styles/AboutUs.module.scss";
import img4 from "./image/Rectangle (1).png";
import img5 from "./image/Rectangle (2).png";
import img6 from "./image/Rectangle (3).png";
import img7 from "./image/Rectangle (4).png";
import { useTranslation } from "react-i18next";
import { useDescriptionToggle } from "../../store/useDescriptionToggle";

interface CardData2 {
  title: string;
  description: string;
  images: string[];
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<CardData2[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
<<<<<<< HEAD
  const { expanded, toggleAll } = useDescriptionToggle();
=======
  const width = window.innerWidth;
>>>>>>> 81bedaf1b05d78eefce4ea445f306f5c1a7af629

  const aboutCards: string[] = ["Promgrad", "ArchiVibe", "BimKg"];

  const cards2: CardData2[] = [
    {
      title: t("directions.engineeringCommunications"),
      description: t("descriptions.engineering"),
      images: [img4],
    },
    {
      title: t("directions.structuralSolutions"),
      description: t("descriptions.structural"),
      images: [img5],
    },
    {
      title: t("directions.architecturalDesign"),
      description: t("descriptions.architectural"),
      images: [img6],
    },
    {
      title: t("directions.techTitle"),
      description: t("descriptions.technology"),
      images: [img7],
    },
  ];

  useEffect(() => {
    setCards([...cards2, ...cards2, ...cards2]); 
  }, [t]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      setCards((prev) => [...prev, ...cards2]);
    }

    if (scrollLeft <= 10) {
      setCards((prev) => [...cards2, ...prev]);

      setTimeout(() => {
        if (scrollRef.current) {
          const cardWidth = scrollRef.current.scrollWidth / cards.length;
          scrollRef.current.scrollLeft = cardWidth * cards2.length;
        }
      }, 0);
    }
  };

  return (
    <div className={styles.aboutContainer} id="about">
      <h1>{t("aboutUs.sectionTitle")}</h1>
      <div className={styles.aboutCardBlock}>
<<<<<<< HEAD
        {aboutCards.map((card) => (
          <div key={card} className={styles.aboutCard}>
=======
        {aboutCards.map((card, index) => (
          <div className={styles.aboutCard} key={index}>
>>>>>>> 81bedaf1b05d78eefce4ea445f306f5c1a7af629
            <h2 className={styles.aboutCard__title}>
              {t(`aboutUs.${card}.title`)}
            </h2>
            <p className={styles.aboutCard__info}>
              {t(`aboutUs.${card}.info`)}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.aboutWrapper}>
        <h4>{t("directions.sectionTitle")}</h4>
        <div
          className={styles.CardGrid}
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.aboutUsCard2}>
              <div>
                {card.images.map((img, imgIndex) => (
                  <img
                    className={styles.imgHan}
                    key={imgIndex}
                    src={img}
                    alt="Card"
                  />
                ))}
              </div>
              <div className={styles.card2Content}>
                <h3>{card.title}</h3>
                <p
                  className={`${styles.description} ${
                    expanded ? styles.expanded : ""
                  }`}
                >
                  {card.description}
                </p>
                <button onClick={toggleAll} className={styles.readMoreBtn}>
                  {expanded
                    ? t("ourSpecialists.showLess")
                    : t("ourSpecialists.showMore")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
