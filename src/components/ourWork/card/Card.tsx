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
import { useRef } from "react";

type CardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

const Card = ({ project, onClick }: CardProps) => {
  const { title, type_construction, address, end_date, images } = project;

  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.container} onClick={() => onClick(project)}>
      <div className={styles.card}>
        {/* Добавляем Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                alt={`${title} - ${index + 1}`}
                className={styles.card_image}
                onClick={(event) => {
                  event.stopPropagation(); // Останавливаем всплытие
                  onClick(project);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={styles.customPrev}
          onClick={(event) => {
            event.stopPropagation(); // Останавливаем всплытие события
            swiperRef.current?.slidePrev(); // Двигаем только этот Swiper влево
          }}
        >
          <img
            src="/src/assets/icons/Arrow_left.svg"
            alt="Arrow_left Icon"
            className={styles.icon}
          />
        </button>
        <button
          className={styles.customNext}
          onClick={(event) => {
            event.stopPropagation(); // Останавливаем всплытие события
            swiperRef.current?.slideNext(); // Двигаем только этот Swiper вправо
          }}
        >
          <img
            src="/src/assets/icons/Arrow_right.svg"
            alt="Arrow_right Icon"
            className={styles.icon}
          />
        </button>

        <h3
          className={styles.card_name}
          onClick={(event) => event.stopPropagation()}
        >
          {title}
        </h3>
      </div>

      <div
        className={styles.infos}
        onClick={(event) => event.stopPropagation()}
      >
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
