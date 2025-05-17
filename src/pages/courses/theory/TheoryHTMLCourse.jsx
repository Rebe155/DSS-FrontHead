import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Theory.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import html5Logo from "../../../assets/images/html.png";
import robotImage from "@assets/images/login-avatar.png";

const TheoryHTMLCourse = () => {
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
        title="Teoría básica de HTML"
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
          <p className={styles.description}>
            El Lenguaje de Marcado de Hipertexto (
            <span style={{ fontWeight: "bold" }}>HTML</span>) es el código que
            se utiliza para estructurar y desplegar una página web y sus
            contenidos.
          </p>
          <h3 className={styles.subtitle}>Anatomía de un archivo HTML</h3>
          <p className={styles.textContent}>
            Ahora verás cómo los elementos individuales son combinados para
            formar una página HTML entera.
            <br />
            <code style={{ color: "navy" }}>&lt;!DOCTYPE html&gt;</code>
            <br />
            <code style={{ color: "navy" }}>&lt;html&gt;</code>
            <br />
            <code style={{ color: "navy" }}>&lt;head&gt;</code>
            <br />
            <code style={{ color: "navy" }}>
              &lt;meta charset="utf-8" /&gt;
            </code>
            <br />
            <code style={{ color: "navy" }}>
              &lt;title&gt;Mi página de prueba&lt;/title&gt;
            </code>
            <br />
            <code style={{ color: "navy" }}>&lt;/head&gt;</code>
            <br />
            <code style={{ color: "navy" }}>&lt;body&gt;</code>
            <br />
            <code style={{ color: "navy" }}>
              &lt;img src="images/firefox-icon.png" alt="Mi imagen de prueba"
              /&gt;
            </code>
            <br />
            <code style={{ color: "navy" }}>&lt;/body&gt;</code>
            <br />
            <code style={{ color: "navy" }}>&lt;/html&gt;</code>
          </p>
          <button className={styles.learnButton}>Aprender</button>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.logoTopRight}>
            <img
              src={html5Logo}
              alt="HTML5 Logo"
              className={styles.smallLogo}
            />
          </div>
          <h3 className={styles.subtitle}>Etiquetas de Texto</h3>
          <p className={styles.description}>
            <ul>
              <li>
                <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Encabezados
                (de mayor a menor importancia).
              </li>
              <li>
                <code>&lt;p&gt;</code>: Párrafo de texto.
              </li>
              <li>
                <code>&lt;strong&gt;</code>: Texto en negrita (importancia
                semántica).
              </li>
              <li>
                <code>&lt;em&gt;</code>: Texto en cursiva (énfasis semántico).
              </li>
              <li>
                <code>&lt;br&gt;</code>: Salto de línea.
              </li>
              <li>
                <code>&lt;hr&gt;</code>: Línea horizontal (separador).
              </li>
            </ul>
          </p>
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryHTMLCourse;
