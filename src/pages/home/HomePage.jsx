import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import userAvatar from "@assets/images/avatar.png";
import GlobalHeader from "../../components/ui/GlobalHeader";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <div className={styles.headerSection}>
        <GlobalHeader
          username="Usuario"
          avatarSrc={userAvatar}
          onMenuClick={toggleMenu}
        />
      </div>

      {isMenuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className={styles.menuContainer}>
            {["Cursos", "Inicio", "Perfil", "Ayuda"].map((item) => {
              const pathMap = {
                Cursos: "/app/courses",
                Inicio: "/app/home",
                Perfil: "/app/profile",
                Ayuda: "/app/help",
              };

              return (
                <button
                  key={item}
                  onClick={() => navigateTo(pathMap[item])}
                  className={styles.menuItem}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles.mainContent}>
        {/* Mensaje de bienvenida */}
        <div className={styles.welcomeMessage}>
          <h1 className={styles.welcomeTitle}>
            ¡Bienvenido de nuevo, Usuario!
          </h1>
          <p className={styles.welcomeText}>
            Aquí puedes ver tu progreso en los cursos y acceder a los que estás
            cursando actualmente.
          </p>
        </div>

        {/* Contenedor de cursos en progreso y progreso general */}
        <div className={styles.topSection}>
          <div className={styles.courseSection}>
            <h2 className={styles.sectionTitle}>Cursos en progreso</h2>
            <div className={styles.courseList}>
              {[
                { name: "JavaScript Avanzado", status: "En progreso" },
                { name: "React Intermedio", status: "En progreso" },
              ].map((course) => (
                <div key={course.name} className={styles.courseItem}>
                  <span className={styles.courseName}>{course.name}</span>
                  <span className={styles.courseStatus}>{course.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.progressSection}>
            <h2 className={styles.sectionTitle}>Tu progreso en programación</h2>
            <div className={styles.circularProgressWrapper}>
              <CircularProgressbar
                value={30}
                text={`${30}%`}
                styles={buildStyles({
                  textColor: "#052659",
                  pathColor: "#3A86FF",
                  trailColor: "#C1E8FF",
                })}
              />
            </div>
          </div>
        </div>

        {/* Cursos completados debajo */}
        <div className={styles.courseSection}>
          <h2 className={styles.sectionTitle}>Cursos completados</h2>
          <div className={styles.courseList}>
            {[
              { name: "React Básico", status: "Completado" },
              { name: "HTML y CSS", status: "Completado" },
            ].map((course) => (
              <div key={course.name} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseStatus}>{course.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
