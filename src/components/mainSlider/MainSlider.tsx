// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img1 from "../../assets/images/mainSlider.jpg";
import img2 from "../../assets/images/mainSlider2.jpg";
import styles from "./MainSlider.module.scss";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const MainSlider = () => {
  return (
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

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
  );
};

export default MainSlider;
