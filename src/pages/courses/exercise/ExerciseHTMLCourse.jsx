import React from "react";
import styles from "./Exercise.module.css"; // Asegúrate de que la ruta al CSS es correcta
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png"; // Puedes reutilizar la imagen si quieres

const ExerciseHTMLCourse = () => {
  return (
    <>
      <GlobalHeader title="Ejercicios básicos en HTML" isSecondHeader={true} />
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

          {/* Ejercicio 1: Verdadero o Falso */}
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

          {/* Ejercicio 2: Escribir código HTML para lista ordenada */}
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
          {/* Ejercicio 3: Ordenar líneas para tabla básica */}
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

          {/* Ejercicio 4: Entrada para completar el código */}
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

          {/* Imagen del robot */}
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseHTMLCourse;
