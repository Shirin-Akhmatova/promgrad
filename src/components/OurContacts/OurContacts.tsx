import { useTranslation } from "react-i18next";
import ContactCard from "../ContactCard/ContactCard";
import Modal from "../Modal/Modal";
import styles from "./OurContacts.module.scss";
import Map from "../Map/Map";

const OurContacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts" className={styles.contacts_container}>
      <div className={styles.title}>{t("ourContacts.sectionTitle")}</div>
      <div className={styles.contact_card_wrapper}>
        <ContactCard
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          address={t("ourContacts.address.engineering")}
        />
        <Map />
      </div>
      <Modal />
    </section>
  );
};

export default OurContacts;
