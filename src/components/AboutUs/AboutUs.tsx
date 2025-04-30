import { useState, useEffect, useRef } from "react";
import styles from "../../assets/styles/AboutUs.module.scss";
import img4 from "./image/Rectangle (1).png";
import img5 from "./image/Rectangle (2).png";
import img6 from "./image/Rectangle (3).png";
import img7 from "./image/Rectangle (4).png";
import { useTranslation } from "react-i18next";

interface CardData2 {
  title: string;
  description: string;
  images: string[];
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<CardData2[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const aboutCards: string[] = ["Promgrad", "ArchiVibe", "BimKg"];

  const width = window.innerWidth;

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
    setCards(cards2);
  }, [t]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      setCards((prev) => [...prev, ...cards2]);
    }
  };

  return (
    <div className={styles.aboutContainer} id="about">
      <h1>{t("aboutUs.sectionTitle")}</h1>
      <div className={styles.aboutCardBlock}>
        {aboutCards.map((card) => (
          <div className={styles.aboutCard}>
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
                    alt="Card Image"
                  />
                ))}
              </div>
              <div className={styles.card2Content}>
                <h3>{card.title}</h3>
                {width < 428 ? (
                  <p>
                    {card.description.slice(0, 100)}
                    {isOpen ? (
                      <span onClick={() => setIsOpen(false)}>...Закрыть</span>
                    ) : (
                      <span onClick={() => setIsOpen(true)}>...Дальше</span>
                    )}
                  </p>
                ) : (
                  <p>{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
