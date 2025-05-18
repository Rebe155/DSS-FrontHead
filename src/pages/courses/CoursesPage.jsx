import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursesPage.module.css";
import Icon from "@components/ui/Icon";
import GlobalHeader from "../../components/ui/GlobalHeader";
import { FaBook, FaHome, FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import userAvatar from "@assets/images/avatar.png"; // Asegúrate de importar el avatar
import IntroHTMLCourse from "./introduction/IntroHTMLCourse";

const coursesData = {
  recommended: [
    { id: "1", title: "Python", image: "/src/assets/images/pythonf.png", progress: "Por Comenzar" },
    { id: "2", title: "Java", image: "/src/assets/images/java.png", progress: "Por Comenzar" },
    { id: "3", title: "HTML", image: "/src/assets/images/html.png", progress: "Completado" },
    { id: "4", title: "Swift", image: "/src/assets/images/swift.png", progress: "Por Comenzar" },
  ],
  recent: [
    {
      id: "5",
      title: "Python",
      image: "/src/assets/images/pythonf.png",
      progress: "En Progreso",
    },
    {
      id: "6",
      title: "Java",
      image: "/src/assets/images/java.png",
      progress: "Por Comenzar",
    },
    {
      id: "7",
      title: "HTML",
      image: "/src/assets/images/html.png",
      progress: "Completado",
    },
    {
      id: "8",
      title: "Swift",
      image: "/src/assets/images/swift.png",
      progress: "Por Comenzar",
    },
  ],
};

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleCourseSelect = (courseTitle) => {
    // Puedes agregar más condiciones según tus cursos
    if (courseTitle === "HTML") {
      navigate("/app/courses/introduction/html");
    } else if (courseTitle === "Python") {
      navigate("/app/courses/introduction/python");
    } else if (courseTitle === "Java") {
      navigate("/app/courses/introduction/java");
    } else if (courseTitle === "Swift") {
      navigate("/app/courses/introduction/swift");
    } else {
      // Ruta genérica si no hay introducción específica
      navigate(`/app/courses/${courseTitle.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  const CourseCard = ({ course }) => (
    <div
      className={styles.courseCard}
      onClick={() => handleCourseSelect(course.title)}
    >
      <img
        src={course.image}
        alt={course.title}
        className={styles.courseIcon}
        style={{ width: 72, height: 52, marginRight: 12 }}
      />
      <div className={styles.courseInfo}>
        <h3>{course.title}</h3>
        <span
          className={`${styles.status} ${
            course.progress === "En Progreso"
              ? styles.inProgress
              : course.progress === "Completado"
              ? styles.completed
              : styles.notStarted
          }`}
        >
          {course.progress}
        </span>
      </div>
    </div>
  );

  const filteredCourses = coursesData.recommended.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.fullScreenWrapper}>
      <div className={styles.headerSection}>
        <GlobalHeader
          onMenuClick={toggleMenu}
          isSecondHeader={true}
          title="Cursos"
        />
      </div>

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
              <span className={styles.menuUsername}>Menú</span>
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

      {/* Diálogo de confirmación de cierre de sesión */}
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

      <main className={styles.mainContent}>
        {/* 🔍 Barra de búsqueda */}
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <h2 className={styles.sectionTitle}>Cursos recomendados para ti</h2>
        <div className={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p>No se encontraron cursos.</p>
          )}
        </div>

        <h2 className={styles.sectionTitle}>Cursos vistos por última vez</h2>
        <div className={styles.coursesGrid}>
          {/* Solo mostrar el primer curso de la lista recent */}
          {coursesData.recent.slice(0, 1).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      {/* Menú inferior fijo */}
      <nav className={styles.bottomNav}>
        <button
          className={`${styles.bottomNavItem} ${window.location.pathname === "/app/home" ? styles.active : ""}`}
          onClick={() => navigate("/app/home")}
        >
          <FaHome style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem" }}>Home</span>
        </button>
        <button
          className={`${styles.bottomNavItem} ${window.location.pathname === "/app/profile" ? styles.active : ""}`}
          onClick={() => navigate("/app/profile")}
        >
          <FaUser style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem" }}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default CoursesPage;
