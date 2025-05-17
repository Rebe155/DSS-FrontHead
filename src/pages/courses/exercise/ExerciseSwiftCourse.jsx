import React, { useState } from "react";
import styles from "./Exercise.module.css"; // Asegúrate de que la ruta al CSS es correcta
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png"; // Puedes reutilizar la imagen si quieres

const ExerciseSwiftCourse = () => {
  const [draggableBlocks] = useState([
    { id: 1, content: "for numero in 1...5" },
    { id: 2, content: 'print("Mayor de edad")' },
    { id: 3, content: "{" },
    { id: 4, content: "}" },
  ]);

  const [filledBlanks, setFilledBlanks] = useState({
    blank1: null,
    blank2: null,
  });

  const handleDragStart = (e, content) => {
    e.dataTransfer.setData("text/plain", content);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetBlank) => {
    e.preventDefault();
    const droppedContent = e.dataTransfer.getData("text/plain");
    setFilledBlanks((prevState) => ({
      ...prevState,
      [targetBlank]: droppedContent,
    }));
  };

  return (
    <>
      <GlobalHeader title="Ejercicios básicos en SWIFT" isSecondHeader={true} />
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h2 className={styles.exerciseTitle}>
            Ejercicios básicos en SWIFT{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </h2>

          {/* Ejercicio 1: Completar el código (sin cambios) */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Completa el código para declarar una constante y una variable.
            </p>
            <p>
              <span style={{ fontFamily: "monospace", fontSize: "1rem" }}>
                let{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={8}
                  placeholder="nombreConstante"
                />{" "}
                = 10
              </span>
            </p>
            <p>
              <span style={{ fontFamily: "monospace", fontSize: "1rem" }}>
                var{" "}
                <input
                  type="text"
                  className={styles.inlineInput}
                  size={8}
                  placeholder="nombreVariable"
                />{" "}
                = "Hola"
              </span>
            </p>
          </div>

          {/* Ejercicio 2: Arrastrar las palabras correctas */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Arrastra los bloques para completar el código que implementa un
              bucle for para imprimir los números del 1 al 5.
            </p>
            <p style={{ fontFamily: "monospace", fontSize: "1rem" }}>
              for{" "}
              <span
                className={`${styles.dropTarget} ${
                  filledBlanks.blank1 ? styles.filled : ""
                }`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "blank1")}
              >
                {filledBlanks.blank1 || "_______"}
              </span>{" "}
              in 1...5 {"{"}
            </p>
            <div
              style={{
                marginLeft: "2rem",
                fontFamily: "monospace",
                fontSize: "1rem",
              }}
            >
              <span
                className={`${styles.dropTarget} ${
                  filledBlanks.blank2 ? styles.filled : ""
                }`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "blank2")}
              >
                {filledBlanks.blank2 || "(_______)"}
              </span>
              ("Mayor de edad")
            </div>
            <p style={{ fontFamily: "monospace", fontSize: "1rem" }}>{"}"}</p>

            {/* Bloques arrastrables */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              {draggableBlocks.map((block) => (
                <div
                  key={block.id}
                  className={styles.draggableBlock}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block.content)}
                >
                  {block.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Ejercicio 3: Crear un array y bucle for (sin cambios) */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Crea un array de números enteros y escribe un bucle for para
              imprimir cada número.
            </p>
            <div className={styles.inputBox}>
              <textarea
                placeholder={`let numeros = [1, 2, 3, 4, 5]

for numero in numeros {
  print(numero)
}`}
                rows={7}
                cols={50}
              />
            </div>
            <button
              className={styles.checkButton}
              style={{ marginTop: "1rem" }}
            >
              Comprobar
            </button>
          </div>

          {/* Imagen del robot (sin cambios) */}
          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseSwiftCourse;
