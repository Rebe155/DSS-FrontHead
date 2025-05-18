import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import avatarCheck from "@assets/images/Avatar-check.png";
import {
  FaSearch,
  FaBook,
  FaHome,
  FaUser,
  FaQuestionCircle,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    bio: "",
    country: "El Salvador",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // o donde lo tengas guardado

    fetch("http://localhost/ProgPracticeBackend/get_user_profile.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProfile(data.user);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId"); // O como manejes la sesión

    fetch("http://localhost/ProgPracticeBackend/update_user_profile.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...profile, userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Perfil actualizado correctamente");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.error("Error al actualizar perfil:", err));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    setShowLogoutConfirm(true);
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

  const isFormComplete = () => {
    return (
      (profile.username ?? "").trim() !== "" &&
      (profile.email ?? "").trim() !== "" &&
      (profile.bio ?? "").trim() !== "" &&
      (profile.country ?? "").trim() !== ""
    );
  };

  return (
    <div className={styles.fullScreenWrapper}>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
          />
        </div>
        <button onClick={toggleMenu} className={styles.menuButton}>
          <FaBars />
        </button>
      </header>

      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}>
          <div
            className={styles.menuContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.menuHeader}>
              <img
                src={avatarCheck}
                alt="avatar"
                className={styles.menuAvatar}
              />
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
            <button
              onClick={handleLogout}
              className={styles.menuItem}
              style={{ color: "#e63946", fontWeight: "bold" }}
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
            <label className={styles.confirmLabel}>¿Desea cerrar sesión?</label>
            <div className={styles.confirmButtons}>
              <button className={styles.confirmYes} onClick={confirmLogout}>
                Sí
              </button>
              <button className={styles.confirmNo} onClick={cancelLogout}>
                No
              </button>
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

      <main className={styles.mainContent}>
        <h1 className={styles.title}>INFORMACIÓN PERSONAL</h1>

        <div className={styles.profileSection}>
          <img src={avatarCheck} alt="Perfil" className={styles.profileImage} />
          <button className={styles.changePhotoBtn}>Cambiar foto</button>
        </div>

        <form onSubmit={handleSave} className={styles.form}>
          <label className={styles.label}>
            Nombre de usuario
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className={styles.input}
              placeholder="Tu nombre"
            />
          </label>

          <label className={styles.label}>
            Correo electrónico
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="correo@example.com"
            />
          </label>

          <label className={styles.label}>
            Biografía
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Descríbete..."
              rows={4}
            />
          </label>

          <label className={styles.label}>
            País
            <select
              name="country"
              value={profile.country}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="El Salvador">El Salvador</option>
              <option value="Otro">Otro país</option>
            </select>
          </label>

          <button
            type="submit"
            className={styles.saveButton}
            disabled={!isFormComplete()}
            style={{
              opacity: isFormComplete() ? 1 : 0.5,
              cursor: isFormComplete() ? "pointer" : "not-allowed",
            }}
          >
            Guardar cambios
          </button>
        </form>
      </main>

      <nav className={styles.bottomNav}>
        <button
          className={`${styles.bottomNavItem} ${
            location.pathname === "/app/home" ? styles.active : ""
          }`}
          onClick={() => navigate("/app/home")}
        >
          <FaHome style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Home</span>
        </button>
        <button
          className={`${styles.bottomNavItem} ${
            location.pathname === "/app/profile" ? styles.active : ""
          }`}
          onClick={() => navigate("/app/profile")}
        >
          <FaUser style={{ marginBottom: 4 }} />
          <span style={{ fontSize: "0.8rem", marginTop: 6 }}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfilePage;
