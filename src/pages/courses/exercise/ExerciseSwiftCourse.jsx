import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Exercise.module.css";
import { FaBook, FaHome, FaUser, FaQuestionCircle, FaSignOutAlt, FaBars, FaArrowLeft } from "react-icons/fa";
import userAvatar from "../../../assets/images/avatar.png";
import robotImage from "@assets/images/avatar-password.png";

const ExerciseSwiftCourse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [blocks, setBlocks] = useState([
    { id: 1, content: 'let edad = 20' },
    { id: 2, content: 'if edad >= 18 {' },
    { id: 3, content: 'print("Mayor de edad")' },
    { id: 4, content: '}' },
  ]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
    setIsMenuOpen(false);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/welcome");
    }, 1500);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
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
      {/* Header */}
      <header className={styles.header}>
        <button
          className={styles.backButton}
          aria-label="Regresar"
          onClick={() => navigate("/app/courses/introduction/swift")}
        >
          <FaArrowLeft />
        </button>
        <h2 className={styles.headerTitle}>Ejercicios de Programación con Swift</h2>
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Abrir menú"
        >
          <FaBars />
        </button>
      </header>

      {/* Menú lateral */}
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}>
          <div className={styles.menuContainer} onClick={e => e.stopPropagation()}>
            <div className={styles.menuHeader}>
              <img src={userAvatar} alt="avatar" className={styles.menuAvatar} />
              <span className={styles.menuUsername}>Menú</span>
            </div>
            <button onClick={() => navigateTo("/app/home")} className={styles.menuItem}>
              <FaHome className={styles.menuIcon} /> Inicio
            </button>
            <button onClick={() => navigateTo("/app/courses")} className={styles.menuItem}>
              <FaBook className={styles.menuIcon} /> Cursos
            </button>
            <button onClick={() => navigateTo("/app/profile")} className={styles.menuItem}>
              <FaUser className={styles.menuIcon} /> Perfil
            </button>
            <button onClick={() => navigateTo("/app/help")} className={styles.menuItem}>
              <FaQuestionCircle className={styles.menuIcon} /> Ayuda
            </button>
            <hr className={styles.menuDivider} />
            <button onClick={handleLogout} className={`${styles.menuItem} ${styles.menuLogout}`}>
              <FaSignOutAlt className={styles.menuIcon} /> Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {/* Diálogo de confirmación de cierre de sesión */}
      {showLogoutConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmBox}>
            <label className={styles.confirmLabel}>
              ¿Desea cerrar sesión?
            </label>
            <div className={styles.confirmButtons}>
              <button className={styles.confirmYes} onClick={confirmLogout}>Sí</button>
              <button className={styles.confirmNo} onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Pantalla de carga */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingBox}>
            <span className={styles.loadingText}>Cerrando sesión...</span>
          </div>
        </div>
      )}

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h2 className={styles.exerciseTitle}>
            Ejercicios de Programación con Swift
          </h2>
          <p className={styles.description}>
            Pon en práctica lo aprendido sobre Swift. ¡Comienza ahora y conviértete en un experto!{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Escribe un programa que almacene tu nombre en una constante y lo imprima por pantalla.
            </p>
            <div className={styles.inputBox}>
              <textarea
                placeholder={`let nombre = "TuNombre"\nprint(nombre)`}
                rows={3}
                cols={50}
              />
            </div>
          </div>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Completa el código para imprimir "Mayor de edad" si la edad es 18 o más.
            </p>
            <p>let edad = 20</p>
            <p>
              if edad{" "}
              <input
                type="text"
                className={styles.inlineInput}
                placeholder=">="
                size={2}
              />{" "}
              18 {"{"}
            </p>
            <p style={{ marginLeft: "2rem" }}>
              print(
              <input
                type="text"
                className={styles.inlineInput}
                placeholder='"Mayor de edad"'
                size={15}
              />
              )
            </p>
            <p>{"}"}</p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Arrastra los bloques en orden para imprimir "Mayor de edad" si la edad es 18 o más.
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

      <div className={styles.buttonCenter}>
        <button
          className={styles.finishButton}
          onClick={() => navigate("/app/courses")}
        >
          Finalizar curso
        </button>
      </div>

      {/* Menú inferior fijo */}
      <nav className={styles.bottomNav}>
        <button
          className={`${styles.bottomNavItem} ${location.pathname === "/app/home" ? styles.active : ""}`}
          onClick={() => navigate("/app/home")}
        >
          <FaHome style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem" }}>Home</span>
        </button>
        <button
          className={`${styles.bottomNavItem} ${location.pathname === "/app/profile" ? styles.active : ""}`}
          onClick={() => navigate("/app/profile")}
        >
          <FaUser style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem" }}>Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default ExerciseSwiftCourse;
