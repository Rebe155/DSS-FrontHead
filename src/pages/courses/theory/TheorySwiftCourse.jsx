import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Theory.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import swiftLogo from "../../../assets/images/swift.png"; // Asegúrate de tener esta imagen
import robotImage from "@assets/images/login-avatar.png"; // Manteniendo la misma imagen del robot

const TheorySwiftCourse = () => {
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
        title="Teoría básica de Swift"
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
            Swift es un lenguaje de programación relativamente nuevo diseñado
            por Apple Inc. que inicialmente se puso a disposición de los
            desarrolladores de Apple en 2014.
          </p>
          <h3 className={styles.subtitle}>Variables y constantes</h3>
          <p className={styles.textContent}>
            Las variables son espacios de memoria en los que se pueden almacenar
            datos. En Swift, puedes declarar una variable usando la palabra
            clave
            <code>var</code>.
          </p>
          <h4 className={styles.subtitle}>Por ejemplo:</h4>
          <p className={styles.textContent}>
            <code style={{ color: "orange" }}>var nombre = "Juan"</code>
            <br />
            <code style={{ color: "orange" }}>var edad = 27</code>
          </p>
          <h3 className={styles.subtitle}>Tipos de datos</h3>
          <p className={styles.textContent}>
            Swift admite varios tipos de datos, incluyendo:
            <ul>
              <li>
                <code style={{ color: "green" }}>Int</code>: números enteros
              </li>
              <li>
                <code style={{ color: "green" }}>Float</code> y{" "}
                <code style={{ color: "green" }}>Double</code>: números de punto
                flotante
              </li>
              <li>
                <code style={{ color: "green" }}>Bool</code>: valores booleanos
                verdadero o falso
              </li>
              <li>
                <code style={{ color: "green" }}>String</code>: cadenas de texto
              </li>
              <li>
                <code style={{ color: "green" }}>Array</code>: colecciones
                ordenadas de elementos del mismo tipo de datos
              </li>
            </ul>
          </p>
          <button className={styles.learnButton}>Aprender</button>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.logoTopRight}>
            <img
              src={swiftLogo}
              alt="Swift Logo"
              className={styles.smallLogo}
            />
          </div>
          <h3 className={styles.subtitle}>Estructura if-else</h3>
          <p className={styles.description}>
            La estructura <code style={{ fontWeight: "bold" }}>if-else</code> se
            usa para ejecutar una sección de código si se cumple una condición y
            otra sección de código si no se cumple. Por ejemplo:
          </p>
          <pre
            style={{
              backgroundColor: " #33",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <code>
              {`if edad > 18 {
      print("Eres mayor de edad")
    } else {
      print("Eres menor de edad")
    }`}
            </code>
          </pre>

          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheorySwiftCourse;
