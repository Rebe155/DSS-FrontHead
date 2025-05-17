import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Introduction.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import pythonLogo from "../../../assets/images/swift.png";

const IntroSwiftCourse = () => {
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
        title="Introducción a Swift"
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
          <img src={pythonLogo} alt="Swift Logo" className={styles.Logo} />
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.description}>
            En este curso, aprende a crear aplicaciones iOS/macOS con Swift, el
            lenguaje moderno y seguro de Apple. Domina conceptos como
            opcionales, estructuras y protocolos mientras desarrollas apps
            funcionales.
          </p>

          <div className={styles.detailsContainer}>
            <div className={styles.detailBox}>
              <strong>12 horas</strong>
              <span>Teoría y práctica</span>
            </div>
            <div className={styles.detailBox}>
              <strong>35</strong>
              <span>Lecturas</span>
            </div>
          </div>

          <button className={styles.learnButton}>Aprender</button>
        </div>
      </div>
    </div>
  );
};

export default IntroSwiftCourse;
