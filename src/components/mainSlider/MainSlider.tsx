import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import styles from "./MainSlider.module.scss";
import "./MainSlider.scss";

import img1 from "../../assets/images/mainSlider.jpg";
import img2 from "../../assets/images/mainSlider2.jpg";
import left from "../../assets/icons/Arrow_left.svg";
import right from "../../assets/icons/Arrow_right.svg";

import Organization01 from "../../assets/icons/PGS Logo.svg";
import Organization02 from "../../assets/icons/ArchVibe Logo.svg";
import Organization03 from "../../assets/icons/BIM Logo.svg";

import { useTranslation } from "react-i18next";

const MainSlider = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sliderContainer} id="home">
      <div className={styles.sliderWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.textBlock}>
            <h1>{t("slider.name")}</h1>
            <h2>{t("slider.title")}</h2>
            <p>{t("slider.description")}</p>
            <button
              onClick={() => {
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("slider.button")}
            </button>
          </div>
          <div className={styles.iconPartners}>
            <a href="#about">
              <img src={Organization01} />
            </a>
            <a href="#about">
              <img src={Organization02} />
            </a>
            <a href="#about">
              <img src={Organization03} />
            </a>
          </div>
        </div>

        <button className={styles.customPrev}>
          <img src={left} alt="left Icon" className={styles.icon} />
        </button>
        <button className={styles.customNext}>
          <img src={right} alt="left Icon" className={styles.icon} />
        </button>
      </div>
      <div className={styles.reactSwiper}>
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={img1} alt="img1" className={styles.img} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <img src={img2} alt="img2" className={styles.img} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
