import styles from "./OurSpecialists.module.scss";
import { useTranslation } from "react-i18next";
import { useSpecialists } from "../../store/useSpecialists";
import { useDescriptionToggle } from "../../store/useDescriptionToggle";

const OurSpecialists: React.FC = () => {
  const { t } = useTranslation();
  const { specialists, loading, error } = useSpecialists();
  const { expanded, toggleAll } = useDescriptionToggle();

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

      <div className={styles.CardGrid}>
        {specialists.map((spec) => {
          const isExpanded = expanded || false;

          return (
            <div key={spec.id} className={styles.specialistsCard}>
              <img className={styles.imgHan} src={spec.photo} />
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
                <button
                  onClick={() => toggleAll()}
                  className={styles.readMoreBtn}
                >
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
