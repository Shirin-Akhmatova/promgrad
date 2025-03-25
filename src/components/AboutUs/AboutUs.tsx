import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/AboutUs.module.scss";
import img1 from "./image/Imgs.png";
import img2 from "./image/Img.png";
import img3 from "./image/Img (1).png";
import img4 from "./image/Rectangle (1).png";
import img5 from "./image/Rectangle (2).png";
import img6 from "./image/Rectangle (3).png";
import { useTranslation } from "react-i18next";

interface CardData {
  number?: number;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  images: string[];
}

interface CardData2 {
  title: string;
  description: string;
  images: string[];
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const cards: CardData[] = [
    {
      number: 5,
      title: t("card.years"),
      subtitle: t("card.experience"),
      heading: t("card.complex1"),
      description: t("card.descriptions1"),
      images: [img1],
    },
    {
      number: 1243,
      title: "+",
      subtitle: t("card.projects"),
      heading: t("card.quality2"),
      description: t("card.descriptions2"),
      images: [img2],
    },
    {
      number: 1200,
      title: "+",
      subtitle: t("card.clients"),
      heading: t("card.clientOrientation3"),
      description: t("card.descriptions3"),
      images: [img3],
    },
  ];

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
  ];

  const [counts, setCounts] = useState<number[]>(
    new Array(cards.length).fill(0)
  );

  useEffect(() => {
    const timers = cards
      .map((card, index) => {
        if (card.number === undefined) return null;
        const end = card.number;
        const duration = card.number === 5 ? 20000 : 10000;
        const step = card.number === 5 ? 1 : Math.ceil(end / (duration / 50));
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < end) {
              newCounts[index] = Math.min(newCounts[index] + step, end);
            } else {
              clearInterval(interval);
            }
            return newCounts;
          });
        }, 50);

        return interval;
      })
      .filter(Boolean);

    return () => timers.forEach((timer) => clearInterval(timer!));
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h1>{t("aboutUs.sectionTitle")}</h1>
      <div className={styles.Comfort}>
        <h2>{t("aboutUs.comfort")}</h2>
        <p>{t("aboutUs.companyDescription")}</p>
      </div>

      <div className={styles.CardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.aboutUsCard}>
            <div className={styles.textContent}>
              <div className={styles.stats}>
                {card.number !== undefined && (
                  <span className={styles.years}>
                    {counts[index]} {card.title}
                  </span>
                )}
                <p className={styles.subtitle}>{card.subtitle}</p>
              </div>
              <div className={styles.content}>
                <h3>{card.heading}</h3>
                <p>{card.description}</p>
              </div>
            </div>
            <div className={styles.images}>
              {card.images.map((img, imgIndex) => (
                <img key={imgIndex} src={img} alt={`Image ${imgIndex + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.OurDirections}>
        <h1 className={styles.sectionTitle}>{t("directions.sectionTitle")}</h1>
      </div>

      <div className={styles.CardGrid}>
        {cards2.map((card, index) => (
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
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
