import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/CodePage.module.css';
import loginWave from '@assets/images/login-wave.png';
import loginAvatar from '@assets/images/login-avatar.png';
import buttonBg from '@assets/images/button-bg-1.png';

const CodePage = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (code.every(digit => digit !== '')) {
      alert('Código verificado correctamente');
      navigate('/password-reset/mail');
    } else {
      alert('Por favor ingresa un código de 4 dígitos');
    }
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 3) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  return (
    <div className={styles.container}>
      <img src={loginWave} alt="Header wave" className={styles.headerWave} />

      <button 
        onClick={() => navigate(-1)} 
        className={styles.backButton}
      >
        <span className="material-icons">arrow_back</span>
      </button>

      <div className={styles.content}>
        <img src={loginAvatar} alt="Verification" className={styles.avatar} />

        <h1 className={styles.title}>Verifica tu correo</h1>
        
        <p className={styles.description}>
          Ingresa el código de 4 dígitos enviado a tu correo
        </p>

        <div className={styles.codeContainer}>
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength={1}
              className={styles.codeInput}
              value={code[index]}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && !code[index] && index > 0) {
                  document.getElementById(`code-input-${index - 1}`).focus();
                }
              }}
            />
          ))}
        </div>

        <button 
          onClick={handleVerify}
          className={styles.button}
          style={{ backgroundImage: `url(${buttonBg})` }}
          disabled={!code.every(digit => digit !== '')}
        >
          <span className={styles.buttonText}>Verificar código</span>
        </button>
      </div>

      <img src={loginWave} alt="Footer wave" className={styles.footerWave} />
    </div>
  );
};

export default CodePage;