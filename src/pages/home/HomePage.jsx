import React, { useState, useEffect } from "react";
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
  const [username, setUsername] = useState("Usuario");
  const [cursosProgreso, setCursosProgreso] = useState([]);
  const [cursosCompletados, setCursosCompletados] = useState([]);
  const [porcentaje, setPorcentaje] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    fetch("http://localhost/ProgPracticeBackend/get_user_courses.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_usuario: parseInt(userId) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsername(data.username);
          setCursosProgreso(data.cursosEnProgreso);
          setCursosCompletados(data.cursosCompletados);
          setPorcentaje(data.progreso);
        }
      });
  }, []);

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
      localStorage.clear(); // limpiar datos de sesión
      setIsLoading(false);
      navigate("/welcome");
    }, 1500);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <GlobalHeader
        username={username}
        avatarSrc={userAvatar}
        onMenuClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.menuHeader}>
              <img src={userAvatar} alt="avatar" className={styles.menuAvatar} />
              <span className={styles.menuUsername}>{username}</span>
            </div>
            <button onClick={() => navigateTo("/app/home")} className={styles.menuItem}>
              <FaHome className={styles.menuIcon} />
              Inicio
            </button>
            <button onClick={() => navigateTo("/app/courses")} className={styles.menuItem}>
              <FaBook className={styles.menuIcon} />
              Cursos
            </button>
            <button onClick={() => navigateTo("/app/profile")} className={styles.menuItem}>
              <FaUser className={styles.menuIcon} />
              Perfil
            </button>
            <button onClick={() => navigateTo("/app/help")} className={styles.menuItem}>
              <FaQuestionCircle className={styles.menuIcon} />
              Ayuda
            </button>
            <hr className={styles.menuDivider} />
            <button onClick={handleLogout} className={`${styles.menuItem} ${styles.menuLogout}`}>
              <FaSignOutAlt className={styles.menuIcon} />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmBox}>
            <label className={styles.confirmLabel}>¿Desea cerrar sesión?</label>
            <div className={styles.confirmButtons}>
              <button className={styles.confirmYes} onClick={confirmLogout}>Sí</button>
              <button className={styles.confirmNo} onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingBox}>
            <span className={styles.loadingText}>Cerrando sesión...</span>
          </div>
        </div>
      )}

      <div className={styles.mainContent}>
        <div className={styles.welcomeMessage}>
          <h1 className={styles.welcomeTitle}>¡Bienvenido de nuevo, {username}!</h1>
          <p className={styles.welcomeText}>
            Aquí puedes ver tu progreso en los cursos y acceder a los que estás cursando actualmente.
          </p>
        </div>

        <div className={styles.topSection}>
          <div className={styles.courseSection}>
            <h2 className={styles.sectionTitle}>Cursos en progreso</h2>
            <div className={styles.courseList}>
              {cursosProgreso.length === 0 && <p>No tienes cursos en progreso aún.</p>}
              {cursosProgreso.map((course) => (
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
                value={porcentaje}
                text={`${porcentaje}%`}
                styles={buildStyles({
                  textColor: "#052659",
                  pathColor: "#3A86FF",
                  trailColor: "#C1E8FF",
                })}
              />
            </div>
          </div>
        </div>

        <div className={styles.courseSection}>
          <h2 className={styles.sectionTitle}>Cursos completados</h2>
          <div className={styles.courseList}>
            {cursosCompletados.length === 0 && <p>No has completado cursos todavía.</p>}
            {cursosCompletados.map((course) => (
              <div key={course.name} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseStatus}>{course.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <button className={`${styles.bottomNavItem} ${location.pathname === "/home" ? styles.active : ""}`}
          onClick={() => navigate("/app/home")}>
          <FaHome style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Home</span>
        </button>
        <button className={`${styles.bottomNavItem} ${location.pathname === "/profile" ? styles.active : ""}`}
          onClick={() => navigate("/app/profile")}>
          <FaUser style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;
