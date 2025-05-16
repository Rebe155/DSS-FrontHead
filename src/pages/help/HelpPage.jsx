import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HelpPage.module.css';
import Icon from '@components/ui/Icon';

const HelpPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      alert('Mensaje enviado. Gracias por contactarnos.');
      setFormData({
        subject: '',
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <Icon name="search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
          />
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
        >
          <Icon name="menu" />
        </button>
      </header>

      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => navigate('/courses')}>Cursos</button>
            <button onClick={() => navigate('/')}>Inicio</button>
            <button onClick={() => navigate('/profile')}>Perfil</button>
            <button onClick={() => navigate('/help')}>Ayuda</button>
          </div>
        </div>
      )}

      <main className={styles.mainContent}>
        <h1 className={styles.title}>AYUDA</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Asunto
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              placeholder="Escribe el asunto"
            />
          </label>

          <label className={styles.label}>
            Nombre
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Tu nombre"
            />
          </label>

          <label className={styles.label}>
            Correo Electrónico
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="correo@example.com"
            />
          </label>

          <label className={styles.label}>
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Escribe tu mensaje..."
              rows={5}
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </main>

      <nav className={styles.navBar}>
        <button onClick={() => navigate('/')} className={styles.navButton}>
          <Icon name="home" />
          <span>Inicio</span>
        </button>
        <button onClick={() => navigate('/profile')} className={styles.navButton}>
          <Icon name="person" />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default HelpPage;