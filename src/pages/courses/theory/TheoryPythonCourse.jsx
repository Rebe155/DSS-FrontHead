import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Theory.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import pythonLogo from "../../../assets/images/pythonf.png";
import robotImage from "@assets/images/login-avatar.png";

const TheoryPythonCourse = () => {
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
        title="Teoría básica de Python"
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
            Python es un lenguaje de programación potente y fácil de aprender.
            Tiene estructuras de datos de alto nivel eficientes y un simple pero
            efectivo sistema de programación orientado a objetos.
          </p>
          <h3 className={styles.subtitle}>Hola mundo en Python</h3>
          <p className={styles.textContent}>
            Si ejecutas el siguiente código, habrás cumplido el primer hito de
            la programación en Python.
            <br />
            <code>print("Hola Mundo")</code>
          </p>
          <h3 className={styles.subtitle}>Crear variables</h3>
          <p className={styles.textContent}>
            Las variables en Python se pueden crear asignando un valor a un
            nombre sin necesidad de declararla antes.
            <br />
            <code>x = 10</code>
            <br />
            <code>y = "Nombre"</code>
            <br />
            <code>z = 3.9</code>
          </p>
          <button className={styles.learnButton}>Aprender</button>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.logoTopRight}>
            <img
              src={pythonLogo}
              alt="Python Logo"
              className={styles.smallLogo}
            />
          </div>
          <h3 className={styles.subtitle}>Sumando variables en Python</h3>
          <p className={styles.description}>
            Vamos a sumar dos variables e imprimir su valor. Lo primero vamos a
            declararlas, con nombres a y b. Declarar una variable significa
            "crearla".
            <br />
            <code>a = 3</code>
            <br />
            <code>b = 7</code>
          </p>
          <p className={styles.description}>
            Podemos hacer uso de + para sumarlos, y una vez más de
            <code>print()</code> para mostrar su valor por pantalla.
            <br />
            <code>print(a+b)</code>
          </p>
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryPythonCourse;
