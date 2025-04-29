import styles from "../../assets/styles/AboutUs.module.scss";
import img4 from "./image/Rectangle (1).png";
import img5 from "./image/Rectangle (2).png";
import img6 from "./image/Rectangle (3).png";
import { useTranslation } from "react-i18next";

interface CardData2 {
  title: string;
  description: string;
  images: string[];
}


const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const aboutCards: string[] = ["Promgrad", "ArchiVibe", "BimKg"]

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

  return (
    <div className={styles.aboutContainer} id="about">
      <h1>{t("aboutUs.sectionTitle")}</h1>
      <div className={styles.aboutCardBlock}>
        {
          aboutCards.map((card) => (
            <div className={styles.aboutCard}>
              <h2 className={styles.aboutCard__title}>{t(`aboutUs.${card}.title`)}</h2>
              <p className={styles.aboutCard__info}>{t(`aboutUs.${card}.info`)}</p>
            </div>
          ))
        }
      </div>
      <div className={styles.aboutWrapper}>
        <h4>{t("directions.sectionTitle")}</h4>
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
    </div>
  );
};

export default AboutUs;
