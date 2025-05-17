import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Theory.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import javaLogo from "../../../assets/images/java.png";
import robotImage from "@assets/images/login-avatar.png";

const TheoryJavaCourse = () => {
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
        title="Teoría básica en Java"
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
            Si estás empezando con el lenguaje Java hay una serie de conceptos
            básicos Java de la orientación a objetos que debes de manejar para
            poder desarrollar con este lenguaje.{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>
          <h3 className={styles.subtitle}>Las variables en Java</h3>
          <p className={styles.textContent}>
            Las <span style={{ fontWeight: "bold" }}>variables</span> Java son
            un espacio de memoria en el que guardamos un determinado valor (o
            dato). Para definir una variable seguiremos la estructura:
            <br />
            <code style={{ color: "navy" }}>
              [privacidad] tipo_variable identificador;
            </code>
          </p>
          <h3 className={styles.subtitle}>Tipos de datos primitivos</h3>
          <p className={styles.textContent}>
            El lenguaje Java da de base una serie de tipos de datos primitivos:
            <ul>
              <li>
                <code style={{ color: "green" }}>int</code>
              </li>
              <li>
                <code style={{ color: "green" }}>long</code>
              </li>
              <li>
                <code style={{ color: "green" }}>float</code>
              </li>
              <li>
                <code style={{ color: "green" }}>double</code>
              </li>
              <li>
                <code style={{ color: "green" }}>boolean</code>
              </li>
              <li>
                <code style={{ color: "green" }}>char</code>
              </li>
            </ul>
          </p>
          <button className={styles.learnButton}>Aprender</button>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.logoTopRight}>
            <img src={javaLogo} alt="Java Logo" className={styles.smallLogo} />
          </div>
          <h3 className={styles.subtitle}>Operador de Asignación</h3>
          <p className={styles.description}>
            El operador Java más sencillo es el operador de asignación. Mediante
            este operador se asigna un valor a una variable.
            <br />
            El operador de asignación es el símbolo{" "}
            <code style={{ fontWeight: "bold" }}>igual</code>.
          </p>
          <p className={styles.description}>
            La estructura del operador de asignación es:
            <br />
            <code style={{ color: "purple" }}>variable = valor;</code>
          </p>
          <h3 className={styles.subtitle}>Asignando valores</h3>
          <p className={styles.description}>
            Así podemos asignar valores a variables de tipo entero, cadena,...
            <br />
            <code style={{ color: "orange" }}>int numero = 3;</code>
            <br />
            <code style={{ color: "orange" }}>
              String cadena = "Hola Mundo";
            </code>
            <br />
            <code style={{ color: "orange" }}>double decimal = 4.5;</code>
            <br />
            <code style={{ color: "orange" }}>boolean verdad = true;</code>
          </p>
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryJavaCourse;
