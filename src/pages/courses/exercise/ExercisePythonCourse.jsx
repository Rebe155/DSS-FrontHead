import React, { useState } from "react";
import styles from "./Exercise.module.css";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png";

const ExercisePythonCourse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [blocks, setBlocks] = useState([
    { id: 1, content: "edad = 20" },
    { id: 2, content: 'print("Mayor de edad")' },
    { id: 3, content: "if edad = 18:" },
  ]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData("text/plain");
    if (sourceIndex === targetIndex) return;

    const newBlocks = [...blocks];
    const [movedBlock] = newBlocks.splice(sourceIndex, 1);
    newBlocks.splice(targetIndex, 0, movedBlock);

    setBlocks(newBlocks);
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <GlobalHeader
        title="Ejercicios de Programación con Python"
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

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Escribir un programa que almacene la cadena ¡Hola Mundo! en una
              variable y luego muestre por pantalla el contenido de la variable:
            </p>
            <div className={styles.inputBox}>
              <textarea
                placeholder='variable = "Hola Mundo!"&#10;print(variable)'
                rows={4}
                cols={50}
              />
            </div>
          </div>

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
    </div>
  );
};

export default ExercisePythonCourse;
