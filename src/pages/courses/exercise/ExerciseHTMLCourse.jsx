import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Exercise.module.css";
import { FaBook, FaHome, FaUser, FaQuestionCircle, FaSignOutAlt, FaBars, FaArrowLeft } from "react-icons/fa";
import userAvatar from "../../../assets/images/avatar.png";
import robotImage from "@assets/images/avatar-password.png";

const ExerciseHTMLCourse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [blocks, setBlocks] = useState([
    { id: 1, content: "<!DOCTYPE html>" },
    { id: 2, content: "<html>" },
    { id: 3, content: "<body>" },
    { id: 4, content: "<h1>Hola Mundo</h1>" },
    { id: 5, content: "</body>" },
    { id: 6, content: "</html>" },
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
          onClick={() => navigate("/app/courses/introduction/html")}
        >
          <FaArrowLeft />
        </button>
        <h2 className={styles.headerTitle}>Ejercicios de Programación con HTML</h2>
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
            Ejercicios de Programación con HTML
          </h2>
          <p className={styles.description}>
            Aquí pondrás en práctica todo lo que has aprendido. ¡Comienza ahora
            y conviértete en un experto en HTML!{" "}
            <span role="img" aria-label="cohete">
              🚀
            </span>
          </p>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              1. Escribe el código HTML para mostrar el texto <b>¡Hola Mundo!</b> en un encabezado de nivel 1.
            </p>
            <div className={styles.inputBox}>
              <textarea
                placeholder={`<h1>¡Hola Mundo!</h1>`}
                rows={2}
                cols={50}
              />
            </div>
          </div>

          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              2. Completa el código para mostrar una imagen con la ruta <b>logo.png</b> y texto alternativo <b>Logo HTML</b>.
            </p>
            <p>
              <code>
                &lt;img src="
                <input
                  type="text"
                  className={styles.inlineInput}
                  placeholder="logo.png"
                  size={10}
                />
                " alt="
                <input
                  type="text"
                  className={styles.inlineInput}
                  placeholder="Logo HTML"
                  size={10}
                />
                " /&gt;
              </code>
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.exerciseItem}>
            <p className={styles.question}>
              3. Arrastra los bloques para formar una estructura HTML básica que muestre "Hola Mundo".
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

export default ExerciseHTMLCourse;
