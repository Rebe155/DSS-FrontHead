import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Introduction.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import pythonLogo from "../../../assets/images/pythonf.png";

const IntroPythonCourse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <GlobalHeader
        onMenuClick={toggleMenu}
        isSecondHeader={true}
        title="Introducción a Python"
      />

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

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <img src={pythonLogo} alt="Python Logo" className={styles.Logo} />
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.description}>
            En este curso, cubriremos los aspectos básicos de Python, crearemos
            proyectos reales y solucionaremos varios retos de programación.
            Python para Principiantes no requiere experiencia previa en
            programación, ¡así que no esperes más!
          </p>

          <div className={styles.detailsContainer}>
            <div className={styles.detailBox}>
              <strong>8 horas</strong>
              <span>Teoría y práctica</span>
            </div>
            <div className={styles.detailBox}>
              <strong>42</strong>
              <span>Lecturas</span>
            </div>
          </div>

          <button className={styles.learnButton}>Aprender</button>
        </div>
      </div>
    </div>
  );
};

export default IntroPythonCourse;
