import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CoursesPage.module.css';
import Icon from '@components/ui/Icon';

const coursesData = {
  recommended: [
    { id: '1', title: 'HTML', icon: 'code', progress: 'Por Comenzar' },
    { id: '2', title: 'Java', icon: 'logo-java', progress: 'Por Comenzar' },
    { id: '3', title: 'Python', icon: 'logo-python', progress: 'Completado' },
    { id: '4', title: 'Swift', icon: 'logo-apple', progress: 'Por Comenzar' }
  ],
  recent: [
    { id: '5', title: 'Introducción a SQL', icon: 'server', progress: 'En Progreso' }
  ]
};

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCourseSelect = (courseTitle) => {
    navigate(`/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const CourseCard = ({ course }) => (
    <div 
      className={styles.courseCard}
      onClick={() => handleCourseSelect(course.title)}
    >
      <Icon name={course.icon} className={styles.courseIcon} />
      <div className={styles.courseInfo}>
        <h3>{course.title}</h3>
        <span className={`${styles.status} ${
          course.progress === 'En Progreso' ? styles.inProgress :
          course.progress === 'Completado' ? styles.completed :
          styles.notStarted
        }`}>
          {course.progress}
        </span>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <Icon name="search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar cursos..."
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
        <h2>Cursos recomendados para ti</h2>
        <div className={styles.coursesGrid}>
          {coursesData.recommended.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <h2>Cursos vistos por última vez</h2>
        <div className={styles.coursesGrid}>
          {coursesData.recent.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
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

export default CoursesPage;