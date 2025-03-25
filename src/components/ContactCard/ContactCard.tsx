import React from "react";
import styles from "./ContactCard.module.scss";
import phoneIcon from "../../assets/icons/phone (2).svg";
import emailIcon from "../../assets/icons/email.svg";
import locatorIcon from "../../assets/icons/locator.svg";
import telegramIcon from "../../assets/icons/Component (2).svg";
import whatsAppIcon from "../../assets/icons/Component (3).svg";
import instagramIcon from "../../assets/icons/Component (4).svg";
import twitterIcon from "../../assets/icons/Component (5).svg";
import gradient from "../../assets/icons/Rectangle.svg";
import { useModalStore } from "../../store/modalStore";

interface ContactCardProps {
  title: string;
  phone: string;
  email: string;
  addresses: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  phone,
  email,
  addresses,
}) => {
  const { openModal } = useModalStore();

  return (
    <div className={styles.contactCard}>
      <button className={styles.category_button}>{title}</button>

      <img src={gradient} className={styles.gradient} />

      <div className={styles.content}>
        <p className={styles.label}>Телефон:</p>
        <p className={styles.info}>
          <img src={phoneIcon} />
          {phone}
        </p>

        <p className={styles.label}>Email:</p>
        <p className={styles.info}>
          <img src={emailIcon} />
          {email}
        </p>

        <p className={styles.label}>Адреса:</p>
        <ul>
          {addresses.map((addr, index) => (
            <li key={index} className={styles.info}>
              <img src={locatorIcon} />
              {addr}
            </li>
          ))}
        </ul>

        <div className={styles.icons}>
          <span>
            <img src={telegramIcon} />
          </span>
          <span>
            <img src={whatsAppIcon} />
          </span>
          <span>
            <img src={instagramIcon} />
          </span>
          <span>
            <img src={twitterIcon} />
          </span>
        </div>

        <button className={styles.button} onClick={openModal}>
          Подать заявку
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
