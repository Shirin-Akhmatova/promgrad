import styles from "./Card.module.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Project } from "../../../types";
import { useState } from "react";
import { useLanguageStore } from "../../../store/useLanguage";
import left from "../../../assets/icons/Arrow_left.svg";
import right from "../../../assets/icons/Arrow_right.svg";
import business from "../../../assets/icons/business.svg";
import location from "../../../assets/icons/location.svg";
import clock from "../../../assets/icons/clock.svg";

type CardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

const Card = ({ project, onClick }: CardProps) => {
  const { title, type_construction, address, end_date, images } = project;
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const language = useLanguageStore((state) => state.language);
  console.log(language);

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
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          speed={380}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" onclick="event.stopPropagation(); swiperInstance.slideTo(${index})"></span>`;
            },
          }}
          scrollbar={{ draggable: true }}
          loop={true}
          className={styles.card_swiper}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.image}
                alt={`${title} - ${index + 1}`}
                className={styles.card_image}
                onClick={(event) => {
                  event.stopPropagation();
                  onClick(project);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className={styles.customPrev} onClick={handleSlidePrev}>
          <img src={left} alt="bird Icon" className={styles.icon} />
        </button>

        <button className={styles.customNext} onClick={handleSlideNext}>
          <img src={right} alt="Arrow_right Icon" className={styles.icon} />
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
            src={business}
            alt="business Icon"
            className={styles.info_icon}
          />
          <span>{type_construction.title}</span>
        </p>
        <p className={`${styles.info} ${styles.info_address}`}>
          <img
            src={location}
            alt="location Icon"
            className={styles.info_icon}
          />
          <span>{address}</span>
        </p>
        <p className={`${styles.info} ${styles.info_date}`}>
          <img src={clock} alt="clock Icon" className={styles.info_icon} />
          <span>{end_date}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
