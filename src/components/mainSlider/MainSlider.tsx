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

const MainSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.textBlock}>
          <h1>Профессиональные</h1>
          <h2>чертежи и проектирование зданий</h2>
          <p>
            Наша компания готова предложить вам полный спектр услуг,
            чтобы превратить ваши идеи в реальность. Свяжитесь с нами,
            чтобы обсудить ваш проект и узнать, как мы можем помочь
            вам в его реализации
          </p>
          <button>Наши работы</button>
        </div>

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
      </div>
      <div className={styles.reactSwiper}>
        <Swiper
          // Swiper modules
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
