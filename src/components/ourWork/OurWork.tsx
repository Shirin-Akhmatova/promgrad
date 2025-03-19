import Card from "./card/Card";
import styles from "./OurWork.module.scss";

const OurWork = () => {
  const data = [
    {
      id: 1,
      name: "Проект А",
      type: "Бизнес-центр",
      address: "ул. Ленина, д. 1",
      date: "2023-06-15",
      images: [
        "/src/assets/images/card1.jpg",
        "/src/assets/images/card2.jpg",
        "/src/assets/images/card4.jpg",
      ],
    },
    // {
    //   id: 2,
    //   name: "Проект Б",
    //   type: "Жилой дом",
    //   address: "ул. Пушкина, д. 10",
    //   date: "2023-07-20",
    //   images: [
    //     "/src/assets/images/card1.jpg",
    //     "/src/assets/images/card2.jpg",
    //     "/src/assets/images/card4.jpg",
    //   ],
    // },
    // {
    //   id: 3,
    //   name: "Проект В",
    //   type: "Торговый центр",
    //   address: "ул. Советская, д. 5",
    //   date: "2023-08-05",
    //   images: [
    //     "/src/assets/images/card1.jpg",
    //     "/src/assets/images/card2.jpg",
    //     "/src/assets/images/card4.jpg",
    //   ],
    // },
    // {
    //   id: 4,
    //   name: "Проект Г",
    //   type: "Жилой комплекс",
    //   address: "ул. Маяковского, д. 12",
    //   date: "2023-09-01",
    //   images: [
    //     "/src/assets/images/card1.jpg",
    //     "/src/assets/images/card2.jpg",
    //     "/src/assets/images/card4.jpg",
    //   ],
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.ourWork}>
        <h1>Наши работы</h1>
        <p className={styles.workTitle}>Выберите направление по желанию</p>
        <div className={styles.workButtons}>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Лучшие работы</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Архитектурное проектирование</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Конструктивные решения</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Инженерные коммуникации</span>
          </button>
        </div>

        {/* cards */}
        <div className={styles.cards}>
          {data.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
