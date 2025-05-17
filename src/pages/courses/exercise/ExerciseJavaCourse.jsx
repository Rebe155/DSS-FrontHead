import React, { useState } from "react";
import styles from "./Exercise.module.css";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png";

const ExerciseJavaCourse = () => {
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
        title="Ejercicios de Programación con Java"
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
            Ejercicios de Programación con Java
          </h2>
          <p className={styles.description}>
            Aquí pondrás en práctica todo lo que has aprendido. ¡Comienza ahora
            y conviértete en un experto en Java!{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. ¿Es correcta la declaración del método main?
            </p>
            <div className={styles.draggableBlock}>
              <pre>
                {`public class Main {
  public static void main(String[] args) {
    System.out.println("Hola Mundo");} }`}
              </pre>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button className={styles.optionButtonVerdadero}>
                Verdadero
              </button>
              <button className={styles.optionButtonFalso}>Falso</button>
            </div>
          </div>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Encuentra y corrige el error en el siguiente código.
            </p>
            <div className={styles.draggableBlock}>
              <pre>
                {`public class Main {  
    public static void main(String[] args) {  
        double precio = 19.99;  
        int precioEntero = precio;  
        System.out.println(precioEntero);  }
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.exerciseItem}>
            <div className={styles.inputBox}>
              <textarea
                placeholder="// Escribe aquí el código corregido"
                rows={5}
                cols={50}
              />
            </div>
          </div>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Escribe un programa que imprima los números del 1 al 5 usando
              un bucle for.
            </p>
            <div className={styles.inputBox}>
              <textarea
                placeholder={`public class Numeros {
  public static void main(String[] args) {
    // Escribe tu código aquí
  }
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

          <div className={styles.robotContainer}>
            <img src={robotImage} alt="Robot" className={styles.robot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseJavaCourse;
