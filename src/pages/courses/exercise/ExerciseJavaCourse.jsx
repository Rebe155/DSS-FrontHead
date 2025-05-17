import React from "react";
import styles from "./Exercise.module.css";
import GlobalHeader from "../../../components/ui/GlobalHeader";
import robotImage from "@assets/images/avatar-password.png";

const ExerciseJavaCourse = () => {
  return (
    <>
      <GlobalHeader
        title="Ejercicios de Programación con Java"
        isSecondHeader={true}
      />
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
          {/* Ejercicio 1: Verdadero o Falso */}
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. ¿Es correcta la declaración del método main?
            </p>
            <div className={styles.draggableBlock}>
              <pre>
                {`public class Main {
  public static void main(String[] args) {
    System.out.println("Hola Mundo");
  }
}`}
              </pre>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button className={styles.optionButtonVerdadero}>
                Verdadero
              </button>
              <button className={styles.optionButtonFalso}>Falso</button>
            </div>
          </div>

          {/* Ejercicio 2: Encontrar y corregir el error */}
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
        System.out.println(precioEntero);  
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Ejercicio 2: Entrada para corregir código */}
          <div className={styles.exerciseItem}>
            <div className={styles.inputBox}>
              <textarea
                placeholder="// Escribe aquí el código corregido"
                rows={5}
                cols={50}
              />
            </div>
          </div>

          {/* Ejercicio 3: Escribir un programa */}
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

          {/* Puedes decidir si quieres incluir la imagen del robot aquí */}
          {
            <div className={styles.robotContainer}>
              <img src={robotImage} alt="Robot" className={styles.robot} />
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ExerciseJavaCourse;
