import React, { useState } from "react";
import styles from "./Exercise.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png";

const ExercisePythonCourse = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, content: "edad = 20" },
    { id: 2, content: 'print("Mayor de edad")' },
    { id: 3, content: "if edad = 18:" },
  ]);

  // Función para manejar el arrastre (drag)
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  // Función para permitir el "drop" sobre el área de drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Función para manejar el "drop"
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData("text/plain");
    if (sourceIndex === targetIndex) return; // Si es el mismo índice, no hacer nada

    const newBlocks = [...blocks];
    const [movedBlock] = newBlocks.splice(sourceIndex, 1); // Elimina el bloque arrastrado
    newBlocks.splice(targetIndex, 0, movedBlock); // Inserta el bloque en la nueva posición

    setBlocks(newBlocks); // Actualiza el estado con la nueva posición de los bloques
  };

  return (
    <>
      <GlobalHeader
        title="Ejercicios de Programación con Python"
        isSecondHeader={true}
      />
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h2 className={styles.exerciseTitle}>
            Ejercicios de Programación con Python
          </h2>
          <p className={styles.description}>
            Aquí pondrás en práctica todo lo que has aprendido. ¡Comienza ahora
            y conviértete en un experto en Python!{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>

          {/* Ejercicio 1: Escribir código */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Escribir un programa que almacene la cadena ¡Hola Mundo! en una
              variable y luego muestre por pantalla el contenido de la variable:
            </p>
            <div className={styles.inputBox}>
              {/* Aquí el usuario deberá escribir el código */}
              <textarea
                placeholder='variable = "Hola Mundo!"&#10;print(variable)'
                rows={4}
                cols={50}
              />
            </div>
          </div>

          {/* Ejercicio 2: Completar código */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Completa el código para imprimir "Mayor de edad" si la edad es
              18 o más.
            </p>
            <p>edad = 20</p>
            <p>
              if edad{" "}
              <input
                type="text"
                className={styles.inlineInput}
                placeholder="&gt;="
                size={2}
              />{" "}
              18:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;print(
              <input
                type="text"
                className={styles.inlineInput}
                placeholder='"Mayor de edad"'
                size={15}
              />
              )
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Ejercicio 3: Arrastrar bloques */}
          <h2
            className={styles.exerciseTitle}
            style={{ marginTop: 0 }}
          ></h2>{" "}
          {/* Empty title to occupy space if needed */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Arrastra los bloques en orden para imprimir "Mayor de edad" si
              la edad es 18 o más.
            </p>
            <div className={styles.dragAndDropArea} onDragOver={handleDragOver}>
              {blocks.map((block, index) => (
                <div
                  key={block.id}
                  className={styles.draggableBlock}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  {block.content}
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <button className={styles.checkButton}>Comprobar</button>
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePythonCourse;
