import { useEffect, useState } from "react";
import { useProjects } from "../../store/useProjects";
import Card from "./card/Card";
import styles from "./OurWork.module.scss";
import Modal from "./modal/Modal";
import { Project } from "../../types";
import { useTags } from "../../store/useTags";

const OurWork = () => {
  const { projects, loading, error, fetchProjects } = useProjects();
  const { tags, fetchTags } = useTags();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  console.log(selectedProject, "selectedProject");
  console.log(selectedTags, "selectedTags");

  useEffect(() => {
    fetchProjects();
    fetchTags();
  }, []);

  const filterProjectsByTags = () => {
    // Если выбран тег, показываем проекты с этим тегом
    if (selectedTags.length === 0) return projects; // Если тегов нет, показываем все проекты
    return projects.filter(
      (project) => project.tags.some((tag) => selectedTags.includes(tag.id)) // Фильтруем по тегу
    );
  };

  const handleTagClick = (tagId: number) => {
    // Заменяем текущий выбранный тег на новый, чтобы показывать только проекты с этим тегом
    setSelectedTags([tagId]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ourWork}>
        <div className={styles.ourWork_header}>
          <h1 className={styles.ourWork_h1}>Наши работы</h1>
          <p className={styles.workTitle}>Выберите направление по желанию</p>
        </div>

        {/* Динамические кнопки для тегов */}
        <div className={styles.workButtons}>
          <button
            className={styles.workButton}
            onClick={() => setSelectedTags([])} // Очистить выбранные теги
          >
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>Все проекты</span>
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={styles.workButton}
              onClick={() => handleTagClick(tag.id)}
            >
              <img
                src="/src/assets/icons/bird.svg"
                alt="About Icon"
                className={styles.icon}
              />
              <span>{tag.title}</span>
            </button>
          ))}
        </div>

        {/* cards */}
        <div className={styles.cards}>
          {filterProjectsByTags().map((project) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* modal */}
        {selectedProject && (
          <div className={styles.card_modal}>
            <Modal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWork;
