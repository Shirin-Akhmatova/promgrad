import { useEffect, useState } from "react";
import { useProjects } from "../../store/useProjects";
import Card from "./card/Card";
import styles from "./OurWork.module.scss";
import Modal from "./modal/Modal";
import { Project } from "../../types";

const OurWork = () => {
  const { projects, loading, error, fetchProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  console.log(projects, "projects");
  console.log(error, "error");

  return (
    <div className={styles.container}>
      <div className={styles.ourWork}>
        <h1 className={styles.ourWork_h1}>Наши работы</h1>
        <p className={styles.workTitle}>Выберите направление по желанию</p>
        <div className={styles.workButtons}>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Лучшие работы</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Архитектурное проектирование</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Конструктивные решения</span>
          </button>
          <button className={styles.workButton}>
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Инженерные коммуникации</span>
          </button>
        </div>

        {/* cards */}
        <div className={styles.cards}>
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project} // Передаем весь объект
              onClick={() => setSelectedProject(project)} // Теперь передаем целый объект в onClick
            />
          ))}
        </div>
        {/* modal */}
        <div className={styles.card_modal}>
          <Modal
            project={selectedProject ? selectedProject : undefined} // Передаем только проект или undefined
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
