import styles from "./Modal.module.scss";

type ModalProps = {
  project: {
    id: number;
    title: string;
    description: string;
    address: string;
    end_date: string;
    type_construction: { title: string };
    images: { image: string }[];
  } | null;
  onClose: () => void;
};

const Modal = ({ project, onClose }: ModalProps) => {
  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>
          <strong>Адрес:</strong> {project.address}
        </p>
        <p>
          <strong>Тип:</strong> {project.type_construction.title}
        </p>
        <p>
          <strong>Дата завершения:</strong> {project.end_date}
        </p>
        <div className={styles.images}>
          {project.images.map((img, index) => (
            <img key={index} src={img.image} alt={`Проект ${project.title}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
