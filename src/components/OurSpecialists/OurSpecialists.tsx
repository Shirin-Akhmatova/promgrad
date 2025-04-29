import { useEffect, useRef, useCallback } from "react";
import styles from "./OurSpecialists.module.scss";
import { useTranslation } from "react-i18next";
import { useSpecialists } from "../../store/useSpecialists";

const OurSpecialists: React.FC = () => {
  const { t } = useTranslation();
  // const { specialists, loading, error, loadMore, hasMore } = useSpecialists();
  const { specialists, loading, error } = useSpecialists();
  const observer = useRef<IntersectionObserver | null>(null);

  // const lastSpecialistRef = useCallback(
  //   (node: HTMLDivElement | null) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         loadMore();
  //       }
  //     });

  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

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
        {specialists.map((spec) => (
          <div key={spec.id} className={styles.specialistsCard}>
            <img className={styles.imgHan} src={spec.photo} />
            <div className={styles.card2Content}>
              <h3>{spec.name_and_surname}</h3>
              <p className={styles.position}>
                <strong>{spec.position}</strong>
              </p>
              <p className={styles.description}>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className={styles.specialistsContainer}>
  //     <div className={styles.specialistsWrapper}>
  //       <h1>{t("ourSpecialists.sectionTitle")}</h1>
  //       <p className={styles.specialistsSubtitle}>
  //         {t("ourSpecialists.specialistsTitle")}
  //       </p>
  //     </div>

  //     {loading && <p>{t("loading")}</p>}
  //     {error && <p className={styles.error}>{error}</p>}

  //     <div className={styles.CardGrid}>
  //       {specialists.map((spec, index) => {
  //         const isLast = specialists.length === index + 1;
  //         return (
  //           <div
  //             key={spec.id}
  //             ref={isLast ? lastSpecialistRef : null}
  //             className={styles.specialistsCard}
  //           >
  //             <img className={styles.imgHan} src={spec.photo} />
  //             <div className={styles.card2Content}>
  //               <h3>{spec.name_and_surname}</h3>
  //               <p className={styles.position}>
  //                 <strong>{spec.position}</strong>
  //               </p>
  //               <p className={styles.description}>{spec.description}</p>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default OurSpecialists;
