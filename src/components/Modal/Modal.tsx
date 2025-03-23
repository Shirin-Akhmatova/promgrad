import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/close_icon.svg";
import dropdownIcon from "../../assets/icons/downIcon.svg";
import { useModalStore } from "../../store/modalStore";
import { useDirections } from "../../store/useDirections";
import { useFeedback } from "../../store/useFeedback";

const Modal: React.FC = () => {
  const { isOpen, closeModal } = useModalStore();
  const {
    directions = [],
    loading: directionsLoading,
    error: directionsError,
    fetchDirections,
  } = useDirections();
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
    "Выберите направление"
  );
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      fetchDirections();
    }
  }, [isOpen, fetchDirections]);

  useEffect(() => {
    if (success) {
      handleClose();
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone_number || !email || selectedOption === null) {
      return;
    }

    const formData = {
      name,
      phone_number,
      email,
      organization: selectedOption,
    };

    await sendFeedback(formData);
  };

  const handleClose = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setSelectedOption(null);
    setSelectedLabel("Выберите направление");
    setDropdownOpen(false);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={`${styles.modalContent} ${
          isDropdownOpen ? styles.modalExpanded : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>Ваши данные</div>
          <button className={styles.closeButton} onClick={handleClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Номер телефона"
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
                <li className={styles.dropdownItem}>Загрузка...</li>
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
                  Нет доступных направлений
                </li>
              )}
            </ul>
          )}

          {feedbackError && <p className={styles.error}>{feedbackError}</p>}

          <button
            className={styles.submitButton}
            type="submit"
            disabled={feedbackLoading}
          >
            {feedbackLoading ? "Отправка..." : "Подать заявку"}
          </button>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleClose}
          >
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
