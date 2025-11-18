import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MessageCircle } from 'lucide-react'
import './App.css'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const proyectos = [
    {
      titulo: "Sistema de Votación - Colegio de Ingenieros",
      descripcion: "Sistema de votación electrónica Full Stack desarrollado para el Colegio de Ingenieros. Frontend en React y Backend con Node.js y PostgreSQL desplegado en Render.",
      tecnologias: ["React", "Node.js", "PostgreSQL", "CSS", "SASS"],
      link: "https://votos-guate.netlify.app/",
      linkAPI: "https://votosguate-api.onrender.com/test/db-connection",
      imagen: "/proyecto-votos.png"
    },
    {
      titulo: "Aplicacion Web para Excursiones y Tours",
      descripcion: "Aplicación web desarrollada con React para explorar y reservar excursiones y tours en diversos destinos turísticos.",
      tecnologias: ["HTML", "CSS", "BOOTSTRAP"],
      link: "https://hojadetrabajo4alex.netlify.app/",
      imagen: "/app-turistica.png"
    },
    {
      titulo: "Juego de Blackjack",
      descripcion: "Juego de blackjack desarrollado con JavaScript, HTML y CSS. Permite a los usuarios jugar contra la computadora con reglas estándar de blackjack.",
      tecnologias: ["Javascript", "HTML", "CSS"],
      link: "https://jazzy-cendol-8bcf7a.netlify.app/",
      imagen: "/blackjack.png"
    },
    {
      titulo: "Portafolio Personal",
      descripcion: "Sitio web profesional desarrollado con React y desplegado en Netlify, que muestra mis proyectos, habilidades y experiencia como QA Tester y Developer.",
      tecnologias: ["React", "CSS3", "Vite"],
      link: "https://mi-portafolio-alexcbarrios.netlify.app",
      imagen: "/mi-portafolio.png"
    }
  ]

  const habilidadesPorCategoria = {
    "Lenguajes de Programación": [
      "JavaScript",
      "Java",
      "Python",
      "C#"
    ],
    "Frontend": [
      "React",
      "HTML & CSS",
      "Bootstrap",
      "SASS/SCSS"
    ],
    "Backend": [
      "Node.js",
      "API REST",
      "Express"
    ],
    "Bases de Datos": [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Sybase"
    ],
    "Testing & QA": [
      "Selenium",
      "QA Testing",
      "Automatización",
      "API Testing",
      "Pruebas Funcionales"
    ],
    "Herramientas": [
      "Git & GitHub",
      "Gradle",
      "Vite",
      "Metodologías Ágiles"
    ]
  }

  const certificados = [
    {
      titulo: "Certificado JavaScript Moderno",
      institucion: "Udemy / Platzi",
      fecha: "2024",
      descripcion: "Curso completo de JavaScript ES6+ incluyendo programación asíncrona, promesas y módulos.",
      link: "https://certificado.com/tu-link",
      imagen: "/cert1.png"
    },
    {
      titulo: "React Avanzado",
      institucion: "Udemy / Platzi",
      fecha: "2024",
      descripcion: "Desarrollo de aplicaciones con React, Hooks, Context API y mejores prácticas.",
      link: "https://certificado.com/tu-link",
      imagen: "/cert2.png"
    },
    {
      titulo: "Automatización con Selenium",
      institucion: "Coursera / Udemy",
      fecha: "2023",
      descripcion: "Certificación en automatización de pruebas con Selenium WebDriver y Java.",
      link: "https://certificado.com/tu-link",
      imagen: "/cert3.png"
    }
  ]

  return (
    <div className="App">
      {/* Navegación */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Alexander - QA & Dev</h1>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <X /> : <Menu />}
          </button>

          <ul className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>Sobre Mí</a></li>
            <li><a href="#proyectos" onClick={() => setMenuAbierto(false)}>Proyectos</a></li>
            <li><a href="#habilidades" onClick={() => setMenuAbierto(false)}>Habilidades</a></li>
            <li><a href="#certificados" onClick={() => setMenuAbierto(false)}>Certificados</a></li>
            <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Sección Hero */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="/mi-foto.jpg" 
              alt="Alexander - QA Tester & Developer" 
            />
          </div>
          <h1 className="hero-title">Hola, soy <span className="highlight">Alexander</span></h1>
          <p className="hero-subtitle">Ingeniero en Sistemas | QA Tester & Developer</p>
          <p className="hero-description">
            QA Tester con enfoque en desarrollo y pruebas automatizadas, 
            apasionado por la creación de soluciones digitales robustas e innovadoras. 
            Experiencia en aseguramiento de calidad en ambientes de misión crítica del sector bancario, 
            con dominio de SQL Server y Sybase. Desarrollador enfocado en React y automatización 
            con Java/Selenium, en transición hacia Full Stack Developer.
          </p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contacto</a>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="sobre-mi-content">
            <p>
              Soy un Ingeniero en Sistemas especializado en Quality Assurance con una sólida 
              experiencia en el sector bancario. Mi trayectoria me ha permitido desarrollar 
              habilidades tanto en la verificación de calidad como en el desarrollo de software, 
              manejando tecnologías como SQL Server, Sybase, Java/Selenium y React.
            </p>
            <p>
              Mi objetivo actual es consolidarme como desarrollador Full Stack, aprovechando 
              mi experiencia en QA para crear aplicaciones robustas y bien testeadas. Me apasiona 
              la automatización de procesos y la creación de soluciones digitales que impacten 
              positivamente en los usuarios finales. Este portafolio refleja mi capacidad para 
              transicionar del testing al desarrollo, manteniendo siempre los más altos 
              estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section section-dark">
        <div className="container">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="proyectos-grid">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="proyecto-card">
                <div className="proyecto-imagen">
                  <img src={proyecto.imagen} alt={proyecto.titulo} />
                </div>
                <div className="proyecto-info">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>
                  <div className="tecnologias">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="proyecto-links">
                    <a 
                      href={proyecto.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="proyecto-link"
                    >
                      Ver Demo <ExternalLink size={16} />
                    </a>
                    {proyecto.linkAPI && (
                      <a 
                        href={proyecto.linkAPI} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="proyecto-link proyecto-link-api"
                      >
                        Ver API <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="section">
        <div className="container">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <div className="habilidades-container">
            {Object.entries(habilidadesPorCategoria).map(([categoria, habilidades], index) => (
              <div key={index} className="categoria-habilidades">
                <h3 className="categoria-titulo">{categoria}</h3>
                <div className="habilidades-grid">
                  {habilidades.map((habilidad, i) => (
                    <div key={i} className="habilidad-item">
                      {habilidad}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section id="certificados" className="section section-dark">
        <div className="container">
          <h2 className="section-title">Certificados y Cursos</h2>
          <div className="certificados-grid">
            {certificados.map((certificado, index) => (
              <div key={index} className="certificado-card">
                <div className="certificado-imagen">
                  <img src={certificado.imagen} alt={certificado.titulo} />
                </div>
                <div className="certificado-info">
                  <h3>{certificado.titulo}</h3>
                  <p className="certificado-institucion">{certificado.institucion}</p>
                  <p className="certificado-fecha">{certificado.fecha}</p>
                  <p className="certificado-descripcion">{certificado.descripcion}</p>
                  {certificado.link && (
                    <a 
                      href={certificado.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certificado-link"
                    >
                      Ver Certificado <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <p className="contacto-texto">
            ¿Tienes un proyecto en mente o buscas un QA/Developer? ¡Me encantaría escucharte!
          </p>
          <div className="contacto-links">
            <a 
              href="mailto:alex.12chic@gmail.com" 
              className="contacto-btn"
            >
              <Mail /> Email
            </a>
            <a 
              href="https://github.com/AlexanderChic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-btn"
            >
              <Github /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/francisco-alexander-chic-barrios-4bb0651a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-btn"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Alexander - QA Tester & Developer. Todos los derechos reservados.</p>
      </footer>
      <a 
        href="https://wa.me/50254957516"       
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}

export default App