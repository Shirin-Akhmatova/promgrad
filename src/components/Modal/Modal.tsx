import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { useModalStore } from "../../store/modalStore";
import closeIcon from "../../assets/icons/close_icon.svg";
import dropdownIcon from "../../assets/icons/downIcon.svg";

const Modal: React.FC = () => {
  const { isOpen, closeModal } = useModalStore();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("Выберите направление");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClose = () => {
    setName("");
    setWhatsapp("");
    setEmail("");
    setSelectedOption("Выберите направление");
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
            <img src={closeIcon} />
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="Имя"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Номер в WhatsApp"
            className={styles.input}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
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
            <span>{selectedOption}</span>
            <img src={dropdownIcon} className={styles.dropdownIcon} />
          </div>

          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {[
                "Архитектурное проектирование",
                "Конструктивные решения",
                "Инженерные коммуникации",
              ].map((option, index) => (
                <li
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setSelectedOption(option);
                    setDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}

          <button className={styles.submitButton} type="submit">
            Подать заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
