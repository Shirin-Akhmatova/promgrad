import React from "react";
import styles from "./ContactCard.module.scss";
import phoneIcon from "../../assets/icons/phone (2).svg";
import emailIcon from "../../assets/icons/email.svg";
import locatorIcon from "../../assets/icons/locator.svg";
import telegramIcon from "../../assets/icons/Component (2).svg";
import whatsAppIcon from "../../assets/icons/Component (3).svg";
import instagramIcon from "../../assets/icons/Component (4).svg";
import twitterIcon from "../../assets/icons/Component (5).svg";
import { useModalStore } from "../../store/modalStore";
import { useTranslation } from "react-i18next";

interface ContactCardProps {
  phone: string;
  email: string;
  address: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ phone, email, address }) => {
  const { openModal } = useModalStore();
  const { t } = useTranslation();

  return (
    <div className={styles.contactCard}>
      <div className={styles.content}>
        <p className={styles.label}>{t("contactCard.phone")}</p>
        <p className={styles.info}>
          <img src={phoneIcon} />
          {phone}
        </p>

        <p className={styles.label}>Email:</p>
        <p className={styles.info}>
          <img src={emailIcon} />
          {email}
        </p>

        <p className={styles.label}>{t("contactCard.address")}</p>
        <p className={styles.info}>
          <img src={locatorIcon} />
          {address}
        </p>

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
          {t("contactCard.submitButton")}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
