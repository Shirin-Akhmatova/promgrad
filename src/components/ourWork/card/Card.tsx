import styles from "./Card.module.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Project } from "../../../types";
import { useState } from "react";

type CardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

const Card = ({ project, onClick }: CardProps) => {
  const { title, type_construction, address, end_date, images } = project;
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSlidePrev = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleSlideNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className={styles.container} onClick={() => onClick(project)}>
      <div className={styles.card}>
        {/*  Swiper */}
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false} // Убираем стандартные кнопки навигации, будем использовать свои
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
          onClick={handleSlidePrev} // Используем локальную логику
        >
          <img
            src="/src/assets/icons/Arrow_left.svg"
            alt="Arrow_left Icon"
            className={styles.icon}
          />
        </button>

        <button
          className={styles.customNext}
          onClick={handleSlideNext} // Используем локальную логику
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
