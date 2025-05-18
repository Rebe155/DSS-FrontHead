import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import loginWave from '@assets/images/login-wave.png';
import loginAvatar from '@assets/images/avatar.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passError, setPassError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    if (username.trim().length < 5) {
      setUserError('El usuario debe tener al menos 5 caracteres');
      valid = false;
    } else {
      setUserError('');
    }
    if (password.length < 6) {
      setPassError('La contraseña debe tener al menos 6 caracteres');
      valid = false;
    } else {
      setPassError('');
    }
    return valid;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    try {
      const response = await fetch('http://localhost/ProgPracticeBackend/login.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password }),
});

      const data = await response.json();
      if (data.success) {
        // Guardar usuario en localStorage o context
        navigate('/app/home');
      } else {
        setUserError(data.message);
      }
    } catch (err) {
  console.error('Error de conexión:', err);
  setUserError('Error de conexión');
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
            {userError && <span className={styles.errorMsg}>{userError}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passError && <span className={styles.errorMsg}>{passError}</span>}
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
            onClick={() => alert('Función aún no disponible, contacta con soporte')}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <button 
            className={styles.registerLink}
            onClick={() => navigate('/app/signup')}
          >
            Crear una cuenta nueva
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;