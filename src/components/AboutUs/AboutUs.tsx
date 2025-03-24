import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/AboutUs.module.scss";
import img1 from "./image/Imgs.png";
import img2 from "./image/Img.png";
import img3 from "./image/Img (1).png";
import img4 from "./image/Rectangle (1).png";
import img5 from "./image/Rectangle (2).png";
import img6 from "./image/Rectangle (3).png";

interface CardData {
  number?: number;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  images: string[];
}

interface CardData2 {
  title: string;
  description: string;
  images: string[];
}

const AboutUs: React.FC = () => {
  const cards: CardData[] = [
    {
      number: 5,
      title: "лет",
      subtitle: "Опыт на рынке",
      heading: "Комплексный подход:",
      description:
        "Мы предоставляем полный спектр услуг от архитектурного проектирования до реализации инженерных коммуникаций и конструктивных решений, что позволяет нашим клиентам получать все необходимые услуги в одном месте.",
      images: [img1],
    },
    {
      number: 1243,
      title: "+",
      subtitle: "проектов",
      heading: "Качество и надёжность:",
      description:
        "Мы гарантируем высокое качество проектной документации и чертежей, соблюдая все современные стандарты и нормы.",
      images: [img2],
    },
    {
      number: 1200,
      title: "+",
      subtitle: "довольных клиентов",
      heading: "Клиентоориентированность:",
      description:
        "Мы ставим интересы наших клиентов на первое место и стремимся понять их потребности и ожидания.",
      images: [img3],
    },
  ];

  const cards2: CardData2[] = [
    {
      title: "Инженерные коммуникации:",
      description:
        "Мы проектируем системы отопления, вентиляции, кондиционирования, электроснабжения и водоснабжения, обеспечивая эффективность и надёжность всех инженерных коммуникаций. Наша команда учитывает все технические нормы и требования, чтобы гарантировать максимальную безопасность и комфорт.",
      images: [img4],
    },
    {
      title: "Конструктивные решения:",
      description:
        "Мы разрабатываем конструктивные решения, которые обеспечивают прочность, устойчивость и долговечность зданий. Наша команда проводит расчёты и анализ, чтобы предложить оптимальные конструктивные схемы, соответствующие требованиям проекта и условиям эксплуатации.",
      images: [img5],
    },
    {
      title: "Архитектурное проектирование:",
      description:
        "Мы создаём функциональные и эстетически привлекательные архитектурные решения, которые соответствуют современным требованиям и потребностям клиентов. Наша команда разрабатывает детализированные архитектурные планы, фасады и разрезы, обеспечивая гармоничное сочетание формы и функции.",
      images: [img6],
    },
  ];

  const [counts, setCounts] = useState<number[]>(new Array(cards.length).fill(0));

  useEffect(() => {
    const timers = cards.map((card, index) => {
      if (card.number === undefined) return null;
      const end = card.number;
      const duration = card.number === 5 ? 20000 : 10000; 
      const step = card.number === 5 ? 1 : Math.ceil(end / (duration / 50));
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < end) {
            newCounts[index] = Math.min(newCounts[index] + step, end);
          } else {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 50);

      return interval;
    }).filter(Boolean);

    return () => timers.forEach((timer) => clearInterval(timer!));
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h1>О нас</h1>
      <div className={styles.Comfort}>
        <h2>Комфорт. Надёжность. Точный сроки. Большой опыт. Команда профессионалов</h2>
        <p>
          <span>Промградстрой</span> — это надёжный партнёр в области проектирования и чертежей зданий, предлагающий полный спектр услуг в трёх ключевых направлениях: архитектурное проектирование, инженерные коммуникации и конструктивные решения. Мы обладаем многолетним опытом работы в строительной отрасли и стремимся предоставлять нашим клиентам высококачественные и инновационные решения.
        </p>
      </div>

      <div className={styles.CardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.aboutUsCard}>
            <div className={styles.textContent}>
              <div className={styles.stats}>
                {card.number !== undefined && (
                  <span className={styles.years}>{counts[index]} {card.title}</span>
                )}
                <p className={styles.subtitle}>{card.subtitle}</p>
              </div>
              <div className={styles.content}>
                <h3>{card.heading}</h3>
                <p>{card.description}</p>
              </div>
            </div>
            <div className={styles.images}>
              {card.images.map((img, imgIndex) => (
                <img key={imgIndex} src={img} alt={`Image ${imgIndex + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.OurDirections}>
        <h1 className={styles.sectionTitle}>Наши направления</h1>
      </div>

      <div className={styles.CardGrid}>
        {cards2.map((card, index) => (
          <div key={index} className={styles.aboutUsCard2}>
            <div>
              {card.images.map((img, imgIndex) => (
                <img className={styles.imgHan} key={imgIndex} src={img} alt="Card Image" />
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
  );
};

export default AboutUs;