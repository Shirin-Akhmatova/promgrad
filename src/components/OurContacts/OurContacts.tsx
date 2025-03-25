import { useTranslation } from "react-i18next";
import ContactCard from "../ContactCard/ContactCard";
import Modal from "../Modal/Modal";
import styles from "./OurContacts.module.scss";

const OurContacts = () => {
  const { t } = useTranslation();

  // Преобразуем объект в массив строк
  const getAddresses = (key: string) => {
    const addresses = t(key, { returnObjects: true });
    return Array.isArray(addresses) ? addresses : Object.values(addresses);
  };

  return (
    <section id="contacts">
      <div className={styles.title}>{t("ourContacts.sectionTitle")}</div>
      <div className={styles.subtitle}>{t("ourContacts.subtitle")}</div>
      <div className={styles.contact_card_wrapper}>
        <ContactCard
          title={t("ourContacts.engineering")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={getAddresses("ourContacts.addresses.engineering")}
        />
        <ContactCard
          title={t("ourContacts.structuralSolutions")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={getAddresses("ourContacts.addresses.structuralSolutions")}
        />
        <ContactCard
          title={t("ourContacts.architecturalDesign")}
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={getAddresses("ourContacts.addresses.architecturalDesign")}
        />
      </div>
      <Modal />
    </section>
  );
};

export default OurContacts;
