import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursesPage.module.css";
import Icon from "@components/ui/Icon";
import GlobalHeader from "../../components/ui/GlobalHeader";

const coursesData = {
  recommended: [
    { id: "1", title: "HTML", icon: "code", progress: "Por Comenzar" },
    { id: "2", title: "Java", icon: "logo-java", progress: "Por Comenzar" },
    { id: "3", title: "Python", icon: "logo-python", progress: "Completado" },
    { id: "4", title: "Swift", icon: "logo-apple", progress: "Por Comenzar" },
  ],
  recent: [
    {
      id: "5",
      title: "Introducción a SQL",
      icon: "server",
      progress: "En Progreso",
    },
  ],
};

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleCourseSelect = (courseTitle) => {
    navigate(`/courses/${courseTitle.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const CourseCard = ({ course }) => (
    <div
      className={styles.courseCard}
      onClick={() => handleCourseSelect(course.title)}
    >
      <Icon name={course.icon} className={styles.courseIcon} />
      <div className={styles.courseInfo}>
        <h3>{course.title}</h3>
        <span
          className={`${styles.status} ${
            course.progress === "En Progreso"
              ? styles.inProgress
              : course.progress === "Completado"
              ? styles.completed
              : styles.notStarted
          }`}
        >
          {course.progress}
        </span>
      </div>
    </div>
  );

  const filteredCourses = coursesData.recommended.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.fullScreenWrapper}>
      <div className={styles.headerSection}>
        <GlobalHeader
          onMenuClick={toggleMenu}
          isSecondHeader={true}
          title="Cursos"
        />
      </div>

      {isMenuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={styles.menuContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => navigateTo("/courses")}
              className={styles.menuItem}
            >
              Cursos
            </button>
            <button
              onClick={() => navigateTo("/home")}
              className={styles.menuItem}
            >
              Inicio
            </button>
            <button
              onClick={() => navigateTo("/profile")}
              className={styles.menuItem}
            >
              Perfil
            </button>
            <button
              onClick={() => navigateTo("/help")}
              className={styles.menuItem}
            >
              Ayuda
            </button>
          </div>
        </div>
      )}
      <main className={styles.mainContent}>
        {/* 🔍 Barra de búsqueda */}
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <h2 className={styles.sectionTitle}>Cursos recomendados para ti</h2>
        <div className={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p>No se encontraron cursos.</p>
          )}
        </div>

        <h2 className={styles.sectionTitle}>Cursos vistos por última vez</h2>
        <div className={styles.coursesGrid}>
          {coursesData.recent.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
