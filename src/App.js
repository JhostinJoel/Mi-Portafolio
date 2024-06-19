import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { FaHtml5, FaCss3Alt, FaDatabase, FaGit, FaChartBar } from 'react-icons/fa';
import perfilImage from './assets/perfil.jpg'; // Importa tu foto de perfil desde la carpeta assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  // Estado para manejar qué sección está activa
  const [activeSection, setActiveSection] = useState('about'); // 'about', 'projects', 'contact'
  const canvasRef = useRef(null);

  // Estado para manejar los proyectos y sus descripciones
  const [projects] = useState([
    { id: 1, name: 'Proyecto 1', description: 'Descripción breve del Proyecto 1', details: 'Detalles completos del Proyecto 1.' },
    { id: 2, name: 'Proyecto 2', description: 'Descripción breve del Proyecto 2', details: 'Detalles completos del Proyecto 2.' },
    { id: 3, name: 'Proyecto 3', description: 'Descripción breve del Proyecto 3', details: 'Detalles completos del Proyecto 3.' }
  ]);

  // Estado para manejar la visualización de detalles de proyecto
  const [activeProject, setActiveProject] = useState(null);

  // Función para cambiar la sección activa
  const handleMenuClick = (section) => {
    setActiveSection(section);
    // Reiniciar el proyecto activo al cambiar de sección
    setActiveProject(null);
  };

  // Función para manejar el clic en un proyecto
  const handleProjectClick = (projectId) => {
    // Si el proyecto ya está activo, lo desactivamos
    if (activeProject === projectId) {
      setActiveProject(null);
    } else {
      // Si no, activamos el proyecto seleccionado
      setActiveProject(projectId);
    }
  };

  // Efecto de fondo estilo "Matrix"
  useEffect(() => {
    if (activeSection === 'projects') {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const fontSize = 16;
      const columns = canvas.width / fontSize;

      const drops = Array.from({ length: columns }).map(() => Math.random() * canvas.height);

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
          const text = letters[Math.floor(Math.random() * letters.length)];
          const x = index * fontSize;
          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
          }
          drops[index] += fontSize;
        });

        requestAnimationFrame(draw);
      }

      draw();
    }
  }, [activeSection]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
      </header>
      <nav className="App-nav">
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>
            Sobre Mí
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleMenuClick('projects')}>
            Proyectos
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>
            Contacto
          </li>
        </ul>
      </nav>
      <main className="App-main">
        {activeSection === 'about' && (
          <section className="App-section">
           
            <div className="cv-container">
              <div className="cv-profile">
                <img src={perfilImage} alt="Foto de Perfil" className="profile-img" />
                <div className="profile-info">
                  <h3>Joel Alcocer</h3>
                  <p>Analista y Desarrollador</p>
                </div>
              </div>
              <div className="cv-body">
                <div className="cv-section">
                  <h3>Resumen</h3>
                  <p>Profesional en analisis y desarrollo de sistemas de información, con
                     experiencia en desarrollo de software en <strong>oracle, forms, Pl/sql, report builder,</strong>
                     soy una persona honesta, responsable, autonomo con capacidad de auto
                     aprendizaje y trabajo en equipo, con alto sentido de compromiso.</p>
                </div>
                <div className="cv-section">
                <h3>Experiencia Laboral</h3>
                <p>
                <br />
                  <strong>2022 - 2024 Global MVM</strong><br />
                  <strong>Analista de desarrollo Oracle</strong>
                  <br />
                  <strong>Proyecto Cymdist:</strong> desarrollo de paquete para procesamiento de lotes correspondientes a los consumos de energía eléctrica mediante <strong>PLSQL, creación de procedimientos, funciones, triggers, ACLs, optimización de consultas y tiempo de ejecución de los procesos, pruebas integrales y pruebas unitarias.</strong><br />
                  <br />
                  <strong>Proyecto Digsilent:</strong> apoyo en el desarrollo de procesos con PLSQL para la validación de las premisas en el procesamiento o carga de la información realizada mediante integración.<br />
                </p>                  
                <p>
                <strong>2020-2022 Informática y tributos S.A.S</strong><br />
                <strong>Analista de desarrollo oracle</strong>
                <br />
                  Actividades de desarrollo y mantenimiento del sistema (City encargados de la gestión de los diferentes tipos de impuestos de las administraciones públicas) en <strong>Oracle Forms, Reports y PLSQL.</strong>
                </p>

                </div>
                <div className="cv-section">
                  <h3>Formación Académica</h3>
                  <p>Aquí puedes poner información sobre tu formación académica.</p>
                </div>
              
                <div className="cv-section">
  <h3>Habilidades Técnicas</h3>
  <div className="tech-icons">
    <div className="icon-container">
      <FaHtml5 title="HTML5" />
    </div>
    <div className="icon-container">
      <FaCss3Alt title="CSS3" />
    </div>
    <div className="icon-container">
      <FaDatabase title="Oracle PL/SQL" />
    </div>
    <div className="icon-container">
      <FaDatabase title="Oracle Forms" />
    </div>
    <div className="icon-container">
      <FaChartBar title="Power BI" />
    </div>
    <div className="icon-container">
      <FaGit title="Git" />
    </div>
  </div>
</div>

                </div>
            </div>
          </section>
        )}
        {activeSection === 'projects' && (
          <section className="App-section">
            <canvas ref={canvasRef} className="matrix-bg"></canvas>
            <div className="project-list">
              <h2>Proyectos</h2>
              <ul>
                {projects.map(project => (
                  <li key={project.id}>
                    <div className="project-header" onClick={() => handleProjectClick(project.id)}>
                      <strong>{project.name}</strong>: {project.description}
                    </div>
                    {activeProject === project.id && (
                      <div className="project-details">
                        {project.details}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {activeSection === 'contact' && (
          <section className="App-section">
            <h2>Contacto</h2>
            <p>Estoy disponible para oportunidades emocionantes. ¡Contáctame a través de los siguientes enlaces!</p>
            <div className="contact-icons">
              <a href="http://linkedin.com/in/joel-rodrigo-alcocer-rojas-b640b6212/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" title="LinkedIn" />
              </a>
              <a href="https://github.com/JhostinJoel?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" title="GitHub" />
              </a>
            </div>
          </section>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Joel Alcocer - Todos los derechos reservados.</p>
      </footer>
      <div className="social-panel">
        <a href="http://linkedin.com/in/joel-rodrigo-alcocer-rojas-b640b6212/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" title="LinkedIn" />
        </a>
        <a href="https://github.com/JhostinJoel?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" title="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default App;
