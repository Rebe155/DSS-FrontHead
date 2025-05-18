import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SuccessPage.module.css'; 
import loginWave from '@assets/images/login-wave.png';
import avatarCheck from '@assets/images/Avatar-check.png';
import buttonBg from '@assets/images/button-bg-1.png';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={loginWave} alt="Header wave" className={styles.headerWave} />

      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Volver
      </button>

      <div className={styles.content}>
        <img src={avatarCheck} alt="Success" className={styles.avatar} />

        <h1 className={styles.title}>Contraseña creada</h1>
        
        <p className={styles.description}>
          Contraseña cambiada con éxito
        </p>

        <button 
          onClick={() => navigate('/login')}
          className={styles.button}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          <span className={styles.buttonText}>Iniciar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;