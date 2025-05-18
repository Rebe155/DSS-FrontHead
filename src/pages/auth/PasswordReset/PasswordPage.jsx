import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PasswordPage.module.css'; 
import loginWave from '@assets/images/login-wave.png';
import avatarPassword from '@assets/images/avatar-password.png';
import buttonBg from '@assets/images/button-bg-1.png';

const PasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (email.trim()) {
      navigate('/password-reset/mail');
    } else {
      alert('Por favor ingresa tu correo electrónico');
    }
  };

  return (
    <div className={styles.container}>
      <img src={loginWave} alt="Header wave" className={styles.headerWave} />

      <button onClick={() => navigate('/login')} className={styles.backButton}>
        ← Volver
      </button>

      <div className={styles.content}>
        <img src={avatarPassword} alt="Password recovery" className={styles.avatar} />

        <h1 className={styles.title}>Recuperar Contraseña</h1>
        
        <p className={styles.description}>
          Ingresa tu correo electrónico para recibir un código de verificación
        </p>

        <input
          type="email"
          className={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button 
          onClick={handleSend}
          className={styles.button}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          <span className={styles.buttonText}>Enviar código</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;