import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewPasswordPage.module.css'; 
import loginWave from '@assets/images/login-wave.png';
import buttonBg from '@assets/images/button-bg-1.png';

const NewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (newPassword.trim() && confirmPassword.trim()) {
      if (newPassword === confirmPassword) {
        navigate('/password-reset/success');
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('Por favor completa ambos campos');
    }
  };

  return (
    <div className={styles.container}>
      <img src={loginWave} alt="Header wave" className={styles.headerWave} />

      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Volver
      </button>

      <div className={styles.content}>
        <h1 className={styles.title}>Nueva Contraseña</h1>
        
        <p className={styles.description}>
          Crea una nueva contraseña para tu cuenta
        </p>

        <input
          type="password"
          className={styles.input}
          placeholder="Nueva contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          type="password"
          className={styles.input}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button 
          onClick={handleSave}
          className={styles.button}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          <span className={styles.buttonText}>Guardar</span>
        </button>
      </div>
    </div>
  );
};

export default NewPasswordPage;