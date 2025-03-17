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
        {/* <img src={image} alt={name} className={styles.image} /> */}
        <h3>{name}</h3>
      </div>
      <div className={styles.info}>
        <p>{type}</p>
        <p>{address}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
