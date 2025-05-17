import React, { useState } from "react";
import styles from "./Exercise.module.css";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png";

const ExerciseHTMLCourse = () => {
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
        title="Ejercicios básicos en HTML"
        onMenuClick={toggleMenu}
        isSecondHeader={true}
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
          <h2 className={styles.exerciseTitle}>Ejercicios básicos en HTML</h2>
          <p className={styles.description}>
            Aquí pondrás en práctica todo lo que has aprendido. ¡Comienza ahora
            y conviértete en un experto en HTML!{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Indica si las siguientes afirmaciones son verdaderas (V) o
              falsas (F):
            </p>
            <ul>
              <li>
                <code>&lt;html&gt;</code> es la etiqueta que indica el inicio de
                un documento HTML.{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={1}
                  maxLength={1}
                  placeholder="V/F"
                />
              </li>
              <li>
                <code>&lt;head&gt;</code> contiene el contenido principal de la
                página web.{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={1}
                  maxLength={1}
                  placeholder="V/F"
                />
              </li>
              <li>
                <code>&lt;h1&gt;</code> se utiliza para crear un encabezado de
                nivel 1.{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={1}
                  maxLength={1}
                  placeholder="V/F"
                />
              </li>
              <li>
                <code>&lt;p&gt;</code> se utiliza para crear un enlace.{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={1}
                  maxLength={1}
                  placeholder="V/F"
                />
              </li>
              <li>
                <code>&lt;!DOCTYPE html&gt;</code> define el tipo de documento
                como HTML5.{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={1}
                  maxLength={1}
                  placeholder="V/F"
                />
              </li>
            </ul>
          </div>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Escribe el código HTML para crear una lista no ordenada con
              tres elementos: "Manzana", "Banana" y "Naranja".
            </p>
            <div className={styles.inputBox}>
              <textarea placeholder={`<ul>......`} rows={5} cols={50} />
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Ordena las siguientes líneas para crear una tabla básica.
            </p>
            <div className={styles.draggableBlock}>
              <pre>{`<td>Dato 1</td>
<tr>
<table>
</tr>
<td>Dato 2</td>
</table>`}</pre>
            </div>
          </div>

          <div className={styles.exerciseItem}>
            <div className={styles.inputBox}>
              <textarea
                placeholder={`// Escribe aquí el código corregido`}
                rows={5}
                cols={50}
              />
            </div>
          </div>

          <button className={styles.checkButton} style={{ marginTop: "1rem" }}>
            Comprobar
          </button>

          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseHTMLCourse;
