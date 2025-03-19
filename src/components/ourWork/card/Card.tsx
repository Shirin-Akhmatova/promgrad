import styles from "./Card.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

type CardProps = {
  name: string;
  type: string;
  address: string;
  date: string;
  images: string[];
};

const Card = ({ name, type, address, date, images }: CardProps) => {
  return (
    <div className={styles.container}>
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
                src={img}
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

        <h3 className={styles.card_name}>{name}</h3>
      </div>

      <div className={styles.infos}>
        <p className={`${styles.info} ${styles.info_type}`}>
          <img
            src="/src/assets/icons/business.svg"
            alt="business Icon"
            className={styles.info_icon}
          />
          <span>{type}</span>
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
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

// import styles from "./Card.module.scss";

// type CardProps = {
//   name: string;
//   type: string;
//   address: string;
//   date: string;
//   images: string[];
// };

// const Card = ({ name, type, address, date, images }: CardProps) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         {/* Слайдер с изображениями */}
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation={{
//             nextEl: `.${styles.customNext}`,
//             prevEl: `.${styles.customPrev}`,
//           }}
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: true }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className={styles.card_image}>
//                 <img
//                   src={image}
//                   alt={`project-image-${index}`}
//                   // className={styles.card_image}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <h3 className={styles.card_name}>{name}</h3>
//       </div>

//       {/* <div className={styles.infos}>
//         <p className={`${styles.info} ${styles.info_type}`}>
//           <img
//             src="/src/assets/icons/business.svg"
//             alt="business Icon"
//             className={styles.info_icon}
//           />
//           <span>{type}</span>
//         </p>
//         <p className={`${styles.info} ${styles.info_address}`}>
//           <img
//             src="/src/assets/icons/location.svg"
//             alt="location Icon"
//             className={styles.info_icon}
//           />
//           <span>{address}</span>
//         </p>
//         <p className={`${styles.info} ${styles.info_date}`}>
//           <img
//             src="/src/assets/icons/clock.svg"
//             alt="clock Icon"
//             className={styles.info_icon}
//           />
//           <span>{date}</span>
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default Card;
