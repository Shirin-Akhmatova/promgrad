import { useEffect, useRef, useState } from "react";
import styles from "./OurSpecialists.module.scss";
import { useTranslation } from "react-i18next";
import { useSpecialists } from "../../store/useSpecialists";
import { useDescriptionToggle } from "../../store/useDescriptionToggle";

const OurSpecialists: React.FC = () => {
  const { t } = useTranslation();
  const { specialists, loading, error } = useSpecialists();
  const { expanded, toggleAll } = useDescriptionToggle();

  const [loopedSpecialists, setLoopedSpecialists] = useState(specialists);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoopedSpecialists([...specialists, ...specialists, ...specialists]);
  }, [specialists]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      setLoopedSpecialists((prev) => [...prev, ...specialists]);
    }

    if (scrollLeft <= 10) {
      setLoopedSpecialists((prev) => [...specialists, ...prev]);
      setTimeout(() => {
        if (scrollRef.current) {
          const cardWidth =
            scrollRef.current.scrollWidth / loopedSpecialists.length;
          scrollRef.current.scrollLeft = cardWidth * specialists.length;
        }
      }, 0);
    }
  };

  return (
    <div className={styles.specialistsContainer}>
      <div className={styles.specialistsWrapper}>
        <h1>{t("ourSpecialists.sectionTitle")}</h1>
        <p className={styles.specialistsSubtitle}>
          {t("ourSpecialists.specialistsTitle")}
        </p>
      </div>

      {loading && <p>{t("loading")}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.CardGrid} ref={scrollRef} onScroll={handleScroll}>
        {loopedSpecialists.map((spec, index) => {
          const isExpanded = expanded || false;

          return (
            <div
              key={`${spec.id}-${index}`}
              className={styles.specialistsCard}
              style={{ display: "inline-block", verticalAlign: "top" }}
            >
              <img
                className={styles.imgHan}
                src={spec.photo}
                alt={spec.name_and_surname}
              />
              <div className={styles.card2Content}>
                <h3>{spec.name_and_surname}</h3>
                <p className={styles.position}>
                  <strong>{spec.position}</strong>
                </p>
                <p
                  className={`${styles.description} ${
                    isExpanded ? styles.expanded : ""
                  }`}
                >
                  {spec.description}
                </p>
                <button onClick={toggleAll} className={styles.readMoreBtn}>
                  {isExpanded
                    ? t("ourSpecialists.showLess")
                    : t("ourSpecialists.showMore")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSpecialists;
