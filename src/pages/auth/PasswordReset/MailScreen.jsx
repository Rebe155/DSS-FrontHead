import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MailScreen.module.css'; 
import loginWave from '@assets/images/login-wave.png';
import buttonBg from '@assets/images/button-bg-1.png';

const MailScreen = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (code.trim().length === 6) {
      navigate('/password-reset/new');
    } else {
      alert('Por favor ingresa un código válido de 6 dígitos');
    }
  };

  return (
    <div className={styles.container}>
      <img src={loginWave} alt="Header wave" className={styles.headerWave} />

      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Volver
      </button>

      <div className={styles.content}>
        <h1 className={styles.title}>Verificación</h1>
        
        <p className={styles.description}>
          Ingresa el código de 6 dígitos que enviamos a tu correo electrónico
        </p>

        <input
          type="text"
          className={styles.input}
          placeholder="Código de verificación"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
        />

        <button 
          onClick={handleVerify}
          className={styles.button}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          <span className={styles.buttonText}>Verificar</span>
        </button>
      </div>
    </div>
  );
};

export default MailScreen;