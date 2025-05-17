import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Introduction.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import pythonLogo from "../../../assets/images/java.png";

const IntroJavaCourse = () => {
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
    <>
      <GlobalHeader
        onMenuClick={toggleMenu}
        isSecondHeader={true}
        title="Introducción a Java"
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
          <img src={pythonLogo} alt="Java Logo" className={styles.Logo} />
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.description}>
            Con este curso, domina la programación orientada a objetos con Java.
            Desde sintaxis básica hasta manejo de excepciones, desarrolla
            aplicaciones funcionales y comprende su uso en Android y sistemas
            empresariales.
          </p>

          <div className={styles.detailsContainer}>
            <div className={styles.detailBox}>
              <strong>10 horas</strong>
              <span>Teoría y práctica</span>
            </div>
            <div className={styles.detailBox}>
              <strong>50</strong>
              <span>Lecturas</span>
            </div>
          </div>

          <button className={styles.learnButton}>Aprender</button>
        </div>
      </div>
    </>
  );
};

export default IntroJavaCourse;
