import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';
import signupWave from '@assets/images/login-wave.png';
import signupAvatar from '@assets/images/Avatar-check.png';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Por favor llena todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://tu-backend-php/signup.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Registro exitoso. Ahora inicia sesión.');
        navigate('/login');
      } else {
        alert(data.message || 'Error al registrarse');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  };

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.waveBackground}>
        <img src={signupWave} alt="Wave" className={styles.responsiveWave} />
      </div>

      <main className={styles.signupContent}>
        <div className={styles.signupHeader}>
          <img src={signupAvatar} alt="Avatar" className={styles.userAvatar} />
          <h1 className={styles.signupTitle}>Crea tu cuenta en ProgPractice</h1>
        </div>

        <div className={styles.signupForm}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.formInput}
              placeholder="Usuario"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              className={styles.formInput}
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>

          <button onClick={handleSignUp} className={styles.signupButton}>
            <span className={styles.buttonLabel}>Registrarse</span>
          </button>
        </div>

        <div className={styles.extraOptions}>
          <button
            className={styles.loginLink}
            onClick={() => navigate('/login')}
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
