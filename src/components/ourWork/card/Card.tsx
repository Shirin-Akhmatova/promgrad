import styles from "./Card.module.scss";
import "./Card.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Project } from "../../../types";

type CardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

const Card = ({ project, onClick }: CardProps) => {
  const { title, type_construction, address, end_date, images } = project;

  return (
    <div className={styles.container} onClick={() => onClick(project)}>
      <div className={styles.card}>
        {/* Добавляем Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.customNext}`,
            prevEl: `.${styles.customPrev}`,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={styles.card_swiper}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.image}
                alt={`${name} - ${index + 1}`}
                className={styles.card_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.customPrev}>
          <img
            src="/src/assets/icons/Arrow_left.svg"
            alt="About Icon"
            className={styles.icon}
          />
        </button>
        <button className={styles.customNext}>
          <img
            src="/src/assets/icons/Arrow_right.svg"
            alt="About Icon"
            className={styles.icon}
          />
        </button>

        <h3 className={styles.card_name}>{title}</h3>
      </div>

      <div className={styles.infos}>
        <p className={`${styles.info} ${styles.info_type}`}>
          <img
            src="/src/assets/icons/business.svg"
            alt="business Icon"
            className={styles.info_icon}
          />
          <span>{type_construction.title}</span>
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
          <span>{end_date}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
