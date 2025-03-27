import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/close_icon.svg";
import dropdownIcon from "../../assets/icons/downIcon.svg";
import { useModalStore } from "../../store/modalStore";
import { useDirections } from "../../store/useDirections";
import { useFeedback } from "../../store/useFeedback";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../store/useLanguage";

const Modal: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, closeModal } = useModalStore();
  const {
    directions = [],
    loading: directionsLoading,
    error: directionsError,
    fetchDirections,
  } = useDirections();
  const { language } = useLanguageStore();

  const {
    sendFeedback,
    loading: feedbackLoading,
    error: feedbackError,
    success,
  } = useFeedback();

  const [name, setName] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>(
    t("modal.chooseDirection")
  );
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      fetchDirections(language);
    }
  }, [isOpen, language, fetchDirections]);

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
      setEmail("");
      setSelectedOption(null);
      setSelectedLabel(t("modal.chooseDirection"));

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

    if (!name || !phone_number || !email || selectedOption === null) {
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
      email,
      organization: selectedOption !== null ? String(selectedOption) : "",
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
    setEmail("");
    setSelectedOption(null);
    setSelectedLabel(t("modal.chooseDirection"));
    setDropdownOpen(false);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleClose}>
        <div
          className={`${styles.modalContent} ${
            isDropdownOpen ? styles.modalExpanded : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>{t("modal.yourData")}</div>
            <button className={styles.closeButton} onClick={handleClose}>
              <img src={closeIcon} />
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
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div
              className={`${styles.dropdown} ${
                isDropdownOpen ? styles.dropdownOpen : ""
              }`}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedLabel}</span>
              <img src={dropdownIcon} className={styles.dropdownIcon} />
            </div>

            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                {directionsLoading ? (
                  <li className={styles.dropdownItem}>{t("modal.loading")}</li>
                ) : directionsError ? (
                  <li className={styles.dropdownItem}>{directionsError}</li>
                ) : directions.length > 0 ? (
                  directions.map((option) => (
                    <li
                      key={option.id}
                      className={styles.dropdownItem}
                      onClick={() => {
                        setSelectedOption(option.id);
                        setSelectedLabel(option.title);
                        setDropdownOpen(false);
                      }}
                    >
                      {option.title}
                    </li>
                  ))
                ) : (
                  <li className={styles.dropdownItem}>
                    {t("modal.noDirections")}
                  </li>
                )}
              </ul>
            )}

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
    </>
  );
};

export default Modal;
