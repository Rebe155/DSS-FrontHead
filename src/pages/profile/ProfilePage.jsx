import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import Icon from '@components/ui/Icon';
import userAvatar from '@assets/images/usuario.png';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    country: 'El Salvador'
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Perfil actualizado correctamente');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <button onClick={toggleMenu} className={styles.menuButton}>
          <Icon name="menu" />
        </button>
      </header>

      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => navigate('/courses')}>Cursos</button>
            <button onClick={() => navigate('/home')}>Inicio</button>
            <button onClick={() => navigate('/profile')}>Perfil</button>
            <button onClick={() => navigate('/help')}>Ayuda</button>
          </div>
        </div>
      )}

      <main className={styles.mainContent}>
        <h1 className={styles.title}>INFORMACIÓN PERSONAL</h1>

        <div className={styles.profileSection}>
          <img src={userAvatar} alt="Perfil" className={styles.profileImage} />
          <button className={styles.changePhotoBtn}>Cambiar foto</button>
        </div>

        <form onSubmit={handleSave} className={styles.form}>
          <label className={styles.label}>
            Nombre de usuario
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className={styles.input}
              placeholder="Tu nombre"
            />
          </label>

          <label className={styles.label}>
            Correo electrónico
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="correo@example.com"
            />
          </label>

          <label className={styles.label}>
            Biografía
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Descríbete..."
              rows={4}
            />
          </label>

          <label className={styles.label}>
            País
            <select
              name="country"
              value={profile.country}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="El Salvador">El Salvador</option>
              <option value="Otro">Otro país</option>
            </select>
          </label>

          <button type="submit" className={styles.saveButton}>
            Guardar cambios
          </button>
        </form>
      </main>

      <nav className={styles.navBar}>
        <button onClick={() => navigate('/home')} className={styles.navButton}>
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

export default ProfilePage;