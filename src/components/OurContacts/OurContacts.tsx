import { useTranslation } from "react-i18next";
import ContactCard from "../ContactCard/ContactCard";
import Modal from "../Modal/Modal";
import styles from "./OurContacts.module.scss";

const OurContacts = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.title}>{t("ourContacts.sectionTitle")}</div>
      <div className={styles.subtitle}>{t("ourContacts.subtitle")}</div>
      <div className={styles.contact_card_wrapper}>
        <ContactCard
          title={t("ourContacts.engineering")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={["Чуй 97/а", "Исанова 97/а", "Чуй 97/а"]}
        />
        <ContactCard
          title={t("ourContacts.structuralSolutions")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={["Чуй 97/а", "Исанова 97/а", "Чуй 97/а"]}
        />
        <ContactCard
          title={t("ourContacts.architecturalDesign")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={["Чуй 97/а", "Исанова 97/а", "Чуй 97/а"]}
        />
      </div>
      <Modal />
    </section>
  );
};

export default OurContacts;
