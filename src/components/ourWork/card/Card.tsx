import styles from "./Card.module.scss";

type CardProps = {
  name: string;
  type: string;
  address: string;
  date: string;
  image: string;
};

const Card = ({ name, type, address, date, image }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.card_image} />
        <h3 className={styles.card_name}>{name}</h3>
      </div>
      <div className={styles.infos}>
        <p className={`${styles.info} ${styles.info_type}`}>
          <img
            src="/src/assets/icons/business.svg"
            alt="business Icon"
            className={styles.info_icon}
          />
          <span>{type}</span>
        </p>
        <p className={`${styles.info} ${styles.info_address}`}>
          <img
            src="/src/assets/icons/location.svg"
            alt="location Icon"
            className={styles.info_icon}
          />
          <span>{address}</span>
        </p>
        <p className={`${styles.info} ${styles.info_date}`}>
          <img
            src="/src/assets/icons/clock.svg"
            alt="clock Icon"
            className={styles.info_icon}
          />
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
