import React, { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  const cards: CardData[] = [
    {
      number: 5,
      title: t("card.years"),
      subtitle: t("card.experience"),
      heading: t("card.complex1"),
      description: t("card.descriptions1"),
    },
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
  ];

  const [counts, setCounts] = useState<number[]>(
    new Array(cards.length).fill(0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startCount) {
            setStartCount(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startCount]);

  useEffect(() => {
    if (!startCount) return;

    const timers = cards
      .map((card, index) => {
        if (card.number === undefined) return null;
        const end = card.number;
        const duration = card.number === 5 ? 3000 : 2000;
        const step = Math.ceil(end / (duration / 30));
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
        }, 30);

        return interval;
      })
      .filter(Boolean);

    return () => timers.forEach((timer) => clearInterval(timer!));
  }, [startCount, cards]);

  return (
    <div ref={containerRef} className={styles.aboutContainer}>
      <div className={styles.ourWork_header}>
        <h1 className={styles.ourWork_h1}>{t("ourResults.sectionTitle")}</h1>
        <p className={style.resultsTitle}>{t("ourResults.resultsTitle")}</p>
      </div>
      <div style={{ justifyContent: "center" }} className={style.CardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={style.aboutUsCard}>
            <div className={style.textContent}>
              <div className={style.stats}>
                {card.number !== undefined && (
                  <span className={style.years}>
                    {counts[index]} {card.title}
                  </span>
                )}
                <p className={style.subtitle}>{card.subtitle}</p>
              </div>
              <div className={style.content}>
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
