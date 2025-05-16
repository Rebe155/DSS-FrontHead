import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import userAvatar from '@assets/images/avatar.png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      
      <header className={styles.header}>
        <img src={userAvatar} alt="User avatar" className={styles.avatar} />
        <h1 className={styles.welcomeText}>Bienvenido, Usuario</h1>
        <button onClick={toggleMenu} className={styles.menuButton}>
          <span className={styles.menuIcon}>☰</span>
        </button>
      </header>

      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => navigateTo('/courses')} className={styles.menuItem}>
              Cursos
            </button>
            <button onClick={() => navigateTo('/home')} className={styles.menuItem}>
              Inicio
            </button>
            <button onClick={() => navigateTo('/profile')} className={styles.menuItem}>
              Perfil
            </button>
            <button onClick={() => navigateTo('/help')} className={styles.menuItem}>
              Ayuda
            </button>
          </div>
        </div>
      )}

      <div className={styles.progressContainer}>
        <h2 className={styles.progressTitle}>Tu progreso en programación</h2>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: '30%' }} />
        </div>
        <p className={styles.progressText}>30% completado</p>
      </div>
    </div>
  );
};

export default HomePage;