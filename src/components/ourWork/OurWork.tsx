import { useEffect, useState } from "react";
import { useProjects } from "../../store/useProjects";
import Card from "./card/Card";
import styles from "./OurWork.module.scss";
import Modal from "./modal/Modal";
import { Project } from "../../types";

const OurWork = () => {
  const { projects, loading, error, fetchProjects } = useProjects();
  console.log(projects, "projects");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  console.log(projects, "projects");
  console.log(error, "error");

  return (
    <div className={styles.container}>
      <div className={styles.ourWork}>
        <div className={styles.ourWork_header}>
          <h1 className={styles.ourWork_h1}>Наши работы</h1>
          <p className={styles.workTitle}>Выберите направление по желанию</p>
        </div>
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
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {/* modal */}
        <div className={styles.card_modal}>
          <Modal
            project={selectedProject ? selectedProject : undefined}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
