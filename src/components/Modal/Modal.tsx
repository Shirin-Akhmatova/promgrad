import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/close_icon.svg";
import { useModalStore } from "../../store/modalStore";
import { useFeedback } from "../../store/useFeedback";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Modal: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, closeModal } = useModalStore();

  const {
    sendFeedback,
    loading: feedbackLoading,
    error: feedbackError,
    success,
  } = useFeedback();

  const [name, setName] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (success) {
      toast.success(t("modal.success"), {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });

      setName("");
      setPhoneNumber("");
      closeModal();
    }
  }, [success, closeModal]);

  useEffect(() => {
    if (feedbackError) {
      toast.error(`${t("modal.error")}: ${feedbackError}`, {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    }
  }, [feedbackError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone_number) {
      toast.error(t("modal.error"), {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
      return;
    }

    const formData = {
      name,
      phone_number,
    };

    try {
      await sendFeedback(formData);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error(t("modal.error"), {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    }
  };

  const handleClose = () => {
    setName("");
    setPhoneNumber("");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{t("modal.yourData")}</div>
          <button className={styles.closeButton} onClick={handleClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("modal.namePlaceholder")}
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("modal.phonePlaceholder")}
            className={styles.input}
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            className={styles.submitButton}
            type="submit"
            disabled={feedbackLoading}
          >
            {feedbackLoading ? t("modal.loading") : t("modal.submitButton")}
          </button>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleClose}
          >
            {t("modal.cancelButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
