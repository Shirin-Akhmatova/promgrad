import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/AboutUs.module.scss";
import style from "./OurResults.module.scss";
import { useTranslation } from "react-i18next";

interface CardData {
  number?: number;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
}

const OurResults: React.FC = () => {
  const { t } = useTranslation();

  const cards: CardData[] = [
    {
      number: 1245,
      title: "+",
      subtitle: t("card.projects"),
      heading: t("card.quality2"),
      description: t("card.descriptions2"),
    },
    {
      number: 1200,
      title: "+",
      subtitle: t("card.clients"),
      heading: t("card.clientOrientation3"),
      description: t("card.descriptions3"),
    },
    {
      number: 5,
      title: t("card.years"),
      subtitle: t("card.experience"),
      heading: t("card.complex1"),
      description: t("card.descriptions1"),
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
      <div className={styles.ourWork_header}>
        <h1 className={styles.ourWork_h1}>{t("ourResults.sectionTitle")}</h1>
        <p className={style.resultsTitle}>{t("ourResults.resultsTitle")}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurResults;
