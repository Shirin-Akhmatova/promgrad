import styles from "./Modal.module.scss";
import "./Modal.scss";
import left from "../../../assets/icons/Arrow_left.svg";
import right from "../../../assets/icons/Arrow_right.svg";
import business from "../../../assets/icons/business.svg";
import location from "../../../assets/icons/location.svg";
import clock from "../../../assets/icons/clock.svg";
import back from "../../../assets/icons/back.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { Project } from "../../../types";
import { useTranslation } from "react-i18next";

type ModalProps = {
  project: Project | null | undefined;
  onClose: () => void;
};

const Modal = ({ project, onClose }: ModalProps) => {
  if (!project) return null;
  const { title, type_construction, address, end_date, images, description } =
    project;
  const { t } = useTranslation();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>
        <div className={styles.modal_header}>
          <img
            src={back}
            alt="About Icon"
            className={styles.icon}
            onClick={onClose}
          />
          <p>{t("ourWork.sectionTitle")}</p>
        </div>
        <div className={styles.card}>
          {/*  Swiper */}
          <Swiper
            effect={"cube"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectCube,
            ]}
            spaceBetween={10}
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
            <img src={left} alt="About Icon" className={styles.icon} />
          </button>
          <button className={styles.customNext}>
            <img src={right} alt="About Icon" className={styles.icon} />
          </button>
        </div>
        <div className={styles.modal_infos}>
          <h1 className={styles.modal_card_name}>{title}</h1>
          <p className={`${styles.modal_info} ${styles.modal_info_type}`}>
            <img
              src={business}
              alt="business Icon"
              className={styles.info_icon}
            />
            <span>{type_construction.title}</span>
          </p>
          <p className={`${styles.modal_info} ${styles.modal_info_address}`}>
            <img
              src={location}
              alt="location Icon"
              className={styles.info_icon}
            />
            <span>{address}</span>
          </p>
          <p className={`${styles.modal_info} ${styles.modal_info_date}`}>
            <img src={clock} alt="clock Icon" className={styles.info_icon} />
            <span>{end_date}</span>
          </p>
          <h2 className={styles.modal_description}>{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
