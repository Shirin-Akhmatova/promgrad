import ContactCard from "../ContactCard/ContactCard";
import Modal from "../Modal/Modal";
import styles from "./OurContacts.module.scss";

const OurContacts = () => {
  return (
    <section>
      <div className={styles.title}>Наши контакты</div>
      <div className={styles.subtitle}>Выберите направление по желанию</div>
      <div className={styles.contact_card_wrapper}>
        <ContactCard
          title="Инженерные коммуникации"
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={["Чуй 97/а", "Исанова 97/а", "Чуй 97/а"]}
        />
        <ContactCard
          title="Конструктивные решения"
          phone="+996 505 00 12 45"
          email="easyjet@gmail.com"
          addresses={["Чуй 97/а", "Исанова 97/а", "Чуй 97/а"]}
        />
        <ContactCard
          title="Архитектурное проектирование"
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
