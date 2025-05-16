import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import loginWave from '@assets/images/login-wave.png';
import loginAvatar from '@assets/images/avatar.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username.trim() && password.trim()) {
      try {
        const response = await fetch('http://tu-backend-php/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        
        if (data.success) {
          navigate('/home');
        } else {
          alert(data.message || 'Error al iniciar sesión');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
      }
    } else {
      alert('Por favor ingresa usuario y contraseña');
    }
  };

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.waveBackground}>
        <img src={loginWave} alt="Wave" className={styles.responsiveWave} />
      </div>

      <main className={styles.loginContent}>
        <div className={styles.loginHeader}>
          <img src={loginAvatar} alt="Avatar" className={styles.userAvatar} />
          <h1 className={styles.loginTitle}>¡Bienvenido a ProgPractice!</h1>
        </div>

        <div className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.formInput}
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            onClick={handleLogin} 
            className={styles.loginButton}
          >
            <span className={styles.buttonLabel}>Iniciar Sesión</span>
          </button>
        </div>

        <div className={styles.extraOptions}>
          <button 
            className={styles.forgotPassword}
            onClick={() => navigate('/PasswordPage')}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <button 
            className={styles.registerLink}
            onClick={() => navigate('/SignUpPage')}
          >
            Crear una cuenta nueva
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;