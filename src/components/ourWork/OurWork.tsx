import { useEffect, useState } from "react";
import { useProjects } from "../../store/useProjects";
import Card from "./card/Card";
import styles from "./OurWork.module.scss";
import Modal from "./modal/Modal";
import { Project } from "../../types";
import { useTags } from "../../store/useTags";
import { useLanguageStore } from "../../store/useLanguage";
import { useTranslation } from "react-i18next";

const OurWork = () => {
  const { projects, fetchProjects } = useProjects();
  const { tags, fetchTags } = useTags();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const { t } = useTranslation();

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    fetchTags();
    fetchProjects();
  }, [language]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const filterProjectsByTags = () => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => selectedTags.includes(tag.id))
    );
  };

  const handleTagClick = (tagId: number) => {
    setSelectedTags([tagId]);
  };

  return (
    <div className={styles.container} id="works">
      <div className={styles.ourWork}>
        <div className={styles.ourWork_header}>
          <h1 className={styles.ourWork_h1}>{t("ourWork.sectionTitle")}</h1>
          <p className={styles.workTitle}>{t("ourWork.workTitle")}</p>
        </div>

        {/*  кнопки для тегов */}
        <div className={styles.workButtons}>
          <button
            className={styles.workButton}
            onClick={() => setSelectedTags([])}
          >
            <img
              src="/src/assets/icons/bird.svg"
              alt="About Icon"
              className={styles.icon}
            />
            <span>{t("ourWork.allProjects")}</span>
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
