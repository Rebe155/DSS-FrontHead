import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./HomePage.module.css";
import userAvatar from "@assets/images/avatar.png";
import GlobalHeader from "../../components/ui/GlobalHeader";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaBook, FaHome, FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    }, 1500); // 1.5 segundos de carga
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <GlobalHeader
        username="Usuario"
        avatarSrc={userAvatar}
        onMenuClick={toggleMenu}
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
            <div className={styles.menuHeader}>
              <img src={userAvatar} alt="avatar" className={styles.menuAvatar} />
              <span className={styles.menuUsername}>Usuario</span>
            </div>
            <button
              onClick={() => navigateTo("/app/home")}
              className={styles.menuItem}
            >
              <FaHome className={styles.menuIcon} />
              Inicio
            </button>
            <button
              onClick={() => navigateTo("/app/courses")}
              className={styles.menuItem}
            >
              <FaBook className={styles.menuIcon} />
              Cursos
            </button>
            <button
              onClick={() => navigateTo("/app/profile")}
              className={styles.menuItem}
            >
              <FaUser className={styles.menuIcon} />
              Perfil
            </button>
            <button
              onClick={() => navigateTo("/app/help")}
              className={styles.menuItem}
            >
              <FaQuestionCircle className={styles.menuIcon} />
              Ayuda
            </button>
            <hr className={styles.menuDivider} />
            <button
              onClick={handleLogout}
              className={`${styles.menuItem} ${styles.menuLogout}`}
            >
              <FaSignOutAlt className={styles.menuIcon} />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmBox}>
            <label className={styles.confirmLabel}>
              ¿Desea cerrar sesión?
            </label>
            <div className={styles.confirmButtons}>
              <button
                className={styles.confirmYes}
                onClick={confirmLogout}
              >
                Sí
              </button>
              <button
                className={styles.confirmNo}
                onClick={cancelLogout}
              >
                No
              </button>
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
        {/* Mensaje de bienvenida */}
        <div className={styles.welcomeMessage}>
          <h1 className={styles.welcomeTitle}>
            ¡Bienvenido de nuevo, Usuario!
          </h1>
          <p className={styles.welcomeText}>
            Aquí puedes ver tu progreso en los cursos y acceder a los que estás
            cursando actualmente.
          </p>
        </div>

        {/* Contenedor de cursos en progreso y progreso general */}
        <div className={styles.topSection}>
          <div className={styles.courseSection}>
            <h2 className={styles.sectionTitle}>Cursos en progreso</h2>
            <div className={styles.courseList}>
              {[
                { name: "JavaScript Avanzado", status: "En progreso" },
                { name: "React Intermedio", status: "En progreso" },
              ].map((course) => (
                <div key={course.name} className={styles.courseItem}>
                  <span className={styles.courseName}>{course.name}</span>
                  <span className={styles.courseStatus}>{course.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.progressSection}>
            <h2 className={styles.sectionTitle}>Tu progreso en programación</h2>
            <div className={styles.circularProgressWrapper}>
              <CircularProgressbar
                value={30}
                text={`${30}%`}
                styles={buildStyles({
                  textColor: "#052659",
                  pathColor: "#3A86FF",
                  trailColor: "#C1E8FF",
                })}
              />
            </div>
          </div>
        </div>

        {/* Cursos completados debajo */}
        <div className={styles.courseSection}>
          <h2 className={styles.sectionTitle}>Cursos completados</h2>
          <div className={styles.courseList}>
            {[
              { name: "React Básico", status: "Completado" },
              { name: "HTML y CSS", status: "Completado" },
            ].map((course) => (
              <div key={course.name} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseStatus}>{course.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <button
          className={`${styles.bottomNavItem} ${location.pathname === "/home" ? styles.active : ""}`}
          onClick={() => navigate("/app/home")}
        >
          <FaHome style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Home</span>
        </button>
        <button
          className={`${styles.bottomNavItem} ${location.pathname === "/profile" ? styles.active : ""}`}
          onClick={() => navigate("/app/profile")}
        >
          <FaUser style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;
