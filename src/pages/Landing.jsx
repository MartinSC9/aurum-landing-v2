import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaCheck, FaTimes, FaPlay, FaStar, FaUsers, FaCalendarCheck, FaArrowRight, FaBrain, FaTshirt, FaComments, FaShieldAlt, FaUserCheck, FaChevronDown, FaChevronUp, FaVideo, FaClock, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import './Landing.css';

const HERO_VIDEO = 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80',
  method1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  method2: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
  method3: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&q=80',
  event: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  ctaBg: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=80',
  daniel: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  natalia: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  vsl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1280&q=80',
  avatars: [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80',
  ],
};

const TESTIMONIALS = [
  { name: 'Santiago R.', age: 24, role: 'Economista', city: 'Buenos Aires', text: 'Pase de no poder hablar con una mujer a abordar en cualquier ambiente. Me volvi un dios en esto.', img: IMG.avatars[0] },
  { name: 'Alfonso M.', age: 55, role: 'Ingeniero', city: 'Bogota', text: 'De temeroso de abordar a tener 13 opciones reales con mujeres de alto valor. Nunca es tarde para cambiar.', img: IMG.avatars[1] },
  { name: 'Victor L.', age: 25, role: 'Abogado', city: 'Mexico DF', text: '5 anos en la friendzone. Hoy entiendo el juego y atraigo mujeres de alto valor naturalmente.', img: IMG.avatars[2] },
  { name: 'Roberto S.', age: 38, role: 'Empresario', city: 'Medellin', text: 'La mentoria 1 a 1 fue la mejor inversion de mi vida. En 3 meses todo cambio por completo.', img: IMG.avatars[3] },
];

const STATS = [
  { number: '488K', label: 'Seguidores' },
  { number: '247', label: 'Hombres transformados' },
  { number: '20', label: 'Paises' },
  { number: '35', label: 'Casos documentados' },
];

const BENEFITS = [
  { icon: <FaShieldAlt />, title: 'Confianza total para abordar', text: 'Domina el arte de la apertura. Nunca mas te quedes paralizado viendo pasar a la mujer que te gusta.' },
  { icon: <FaComments />, title: 'Conversaciones que atraen', text: 'Elimina las conversaciones aburridas. Genera interes y curiosidad desde los primeros minutos.' },
  { icon: <FaUserCheck />, title: 'Plan personalizado', text: 'Analisis profundo de tu caso con sesiones 1 a 1. Estrategia adaptada a tu personalidad y objetivos.' },
  { icon: <FaVideo />, title: 'Sistema completo 24/7', text: 'Mas de 40 horas de contenido exclusivo. Sin teorias vacias, solo estrategias probadas por cientos.' },
  { icon: <FaHandshake />, title: 'Practica real en campo', text: 'Salidas donde te acompanamos en vivo. Demostraciones directas para que veas que funciona.' },
  { icon: <FaGlobeAmericas />, title: 'Red de alto valor', text: 'Comunidad privada con hombres exitosos. Networking, experiencias compartidas y motivacion.' },
];

const FAQ_DATA = [
  { q: 'Necesito experiencia previa con mujeres?', a: 'No. El programa esta disenado para cualquier nivel. Muchos de nuestros alumnos mas exitosos empezaron desde cero absoluto.' },
  { q: 'Funciona si soy timido o introvertido?', a: 'Si. Los introvertidos suelen tener ventajas unicas. El programa te ensena a usar tu personalidad a tu favor, no a cambiarla.' },
  { q: 'Cuanto tiempo toma ver resultados?', a: 'La mayoria empieza a ver cambios en las primeras 2-4 semanas. Resultados solidos en 2-3 meses con practica constante.' },
  { q: 'Que pasa si no me funciona?', a: 'Tenemos mas de 247 casos de exito documentados. Si seguis el sistema y haces las practicas, los resultados llegan.' },
  { q: 'Voy a tener contacto directo con Daniel y Natalia?', a: 'Si. Dependiendo del plan, tendras acceso a sesiones 1 a 1, seguimiento por WhatsApp y acompanamiento en campo.' },
  { q: 'Puedo acceder desde cualquier pais?', a: 'Si. Tenemos alumnos en mas de 20 paises. Las sesiones son por video llamada y el contenido es 100% online.' },
];

function Countdown() {
  const [time, setTime] = useState({ min: 14, seg: 59, ms: 99 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { min, seg, ms } = prev;
        ms -= 1;
        if (ms < 0) { ms = 99; seg -= 1; }
        if (seg < 0) { seg = 59; min -= 1; }
        if (min < 0) return { min: 14, seg: 59, ms: 99 };
        return { min, seg, ms };
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  const pad = n => String(n).padStart(2, '0');
  return (
    <div className="countdown">
      <div className="countdown-item"><span>{pad(time.min)}</span><small>Min</small></div>
      <div className="countdown-item"><span>{pad(time.seg)}</span><small>Seg</small></div>
      <div className="countdown-item"><span>{pad(time.ms)}</span><small>Ms</small></div>
    </div>
  );
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && <p className="faq-answer">{item.a}</p>}
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pageRef = useReveal();

  return (
    <div className="landing" ref={pageRef}>
      {/* Nav */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#top" className="navbar-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 L22 21 L2 21 Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
              <path d="M12 9 L17 19 L7 19 Z" fill="#c9a84c" />
            </svg>
            <span className="gold-text">AURUM</span>
          </a>
          <div className={`navbar-links ${mobileMenu ? 'navbar-links-open' : ''}`}>
            <a href="#metodo" onClick={() => setMobileMenu(false)}>Metodo</a>
            <a href="#resultados" onClick={() => setMobileMenu(false)}>Casos</a>
            <a href="#nosotros" onClick={() => setMobileMenu(false)}>Fundadores</a>
            <a href="#eventos" onClick={() => setMobileMenu(false)}>Eventos</a>
            <a href="/reservas" className="btn btn-primary" onClick={() => setMobileMenu(false)}>Aplicar ahora</a>
          </div>
          <button className="navbar-hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-media">
          <video className="hero-video" autoPlay muted loop playsInline poster={IMG.hero}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Metodo Aurum 2.0 · Inscripciones abiertas</div>
          <h1>Deja de conformarte y empieza a atraer a la <em>mujer que realmente te gusta</em></h1>
          <p className="hero-sub">
            Programa privado de transformacion para hombres de 30 a 50 anos que quieren construir relaciones de alto valor, sin trucos baratos ni manipulacion.
          </p>
          <div className="hero-ctas">
            <a href="/reservas" className="btn btn-primary">Aplicar al programa <span className="arrow">→</span></a>
            <a href="#vsl" className="btn btn-ghost">Ver presentacion · 12 min</a>
          </div>
          <div className="hero-proof">
            <div className="hero-avatars">
              {IMG.avatars.map((src, i) => <img key={i} src={src} alt="" className="hero-avatar" />)}
            </div>
            <div className="hero-proof-text">
              <div className="hero-proof-stars">★★★★★</div>
              <div><strong>+247 hombres transformados</strong> · Valoracion media 4.9 / 5</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll"><FaChevronDown /></div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item reveal">
              <span className="stat-number">{s.number}<span style={{ fontSize: '0.55em', verticalAlign: 'top', marginLeft: 2, opacity: 0.7 }}>+</span></span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="audience">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Perfil de alumno</span>
            <h2>Transformamos hombres que <em>quieren mas</em></h2>
          </div>
          <div className="audience-grid reveal">
            <div className="audience-card yes">
              <div className="card-badge"><span className="card-badge-dot" /> Esto es para vos</div>
              <h3>Aplica si...</h3>
              <ul className="audience-list">
                <li><span className="icon-circle"><FaCheck size={10} /></span> Hombres solteros que quieren mas citas de calidad</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Hombres divorciados que quieren volver al juego</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Buscas pareja estable y de alto valor</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Tenes estabilidad economica para invertir en vos</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Queres 5-6 citas al mes con mujeres que te atraen</li>
              </ul>
            </div>
            <div className="audience-card no">
              <div className="card-badge"><span className="card-badge-dot" /> No es para vos</div>
              <h3>No apliques si...</h3>
              <ul className="audience-list">
                <li><span className="icon-circle"><FaTimes size={10} /></span> Sos menor de 21 anos</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> No tenes estabilidad economica</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> Buscas trucos rapidos o frases magicas</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> Tenes mentalidad de victima</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="metodo" className="method">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">El sistema</span>
            <h2>Los 3 pilares del <em>Metodo Aurum</em></h2>
            <p className="lede">Un sistema integral que transforma tu mentalidad, tu imagen y tu forma de conectar con mujeres de alto valor.</p>
          </div>
          <div className="method-grid reveal">
            {[
              { num: '01', icon: <FaBrain size={24} />, img: IMG.method1, title: 'Reprogramacion Mental', text: 'Elimina creencias limitantes. Desarrolla una mentalidad de alto valor que las mujeres perciben naturalmente.' },
              { num: '02', icon: <FaTshirt size={24} />, img: IMG.method2, title: 'Transformacion de Imagen', text: 'Optimiza tu estilo, lenguaje corporal y presencia para generar atraccion desde el primer segundo.' },
              { num: '03', icon: <FaComments size={24} />, img: IMG.method3, title: 'Sistema de Conexion', text: 'Inicia conversaciones, genera tension y crea conexiones genuinas que llevan a citas reales.' },
            ].map((p, i) => (
              <div key={i} className="method-card" style={{ backgroundImage: `url(${p.img})` }}>
                <div className="method-card-overlay" />
                <div className="method-card-content">
                  <div className="method-icon">{p.icon}</div>
                  <div>
                    <div className="method-number">{p.num}</div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VSL */}
      <section id="vsl" className="vsl">
        <div className="vsl-content reveal">
          <span className="eyebrow">Paso 1</span>
          <h2>Mira este video y descubri <em>el secreto que cambia el juego</em></h2>
          <p className="lede" style={{ margin: '0 auto 40px' }}>Te voy a explicar como realmente piensa una mujer y que hay detras de sus comportamientos.</p>
          <div className="vsl-video">
            <img src={IMG.vsl} alt="Video del Metodo Aurum" className="vsl-thumb" />
            <div className="vsl-play-btn"><FaPlay size={32} /></div>
          </div>
          <Countdown />
          <p className="vsl-step vsl-step-2">Paso 2 · Agenda tu sesion cuando el cronometro llegue a cero</p>
          <a href="/reservas" className="btn btn-primary" style={{ marginTop: 24 }}>
            Quiero mi sesion de diagnostico <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>Resultados <em>reales</em></h2>
            </div>
            <div className="section-meta">
              <strong>+247 hombres transformados</strong> · 35+ casos de exito documentados en todos los perfiles
            </div>
          </div>
          <div className="testimonials-grid reveal">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <blockquote>{t.text}</blockquote>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}, {t.age} · {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="about">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Fundadores</span>
            <h2>Quienes <em>somos</em></h2>
          </div>
          <div className="about-grid reveal">
            <div className="about-card">
              <div className="about-img-wrapper"><img src={IMG.daniel} alt="Daniel Segura" /></div>
              <p className="about-handle">@danielseguraf · 488K seguidores</p>
              <h3>Daniel Segura</h3>
              <p>Mas de 12 anos de experiencia transformando hombres en 20+ paises. Especialista en juego de texto, Instagram y tecnicas de PNL. Creador de la Metodologia de la Trinidad de la Seduccion.</p>
            </div>
            <div className="about-card">
              <div className="about-img-wrapper"><img src={IMG.natalia} alt="Natalia Buitrago" /></div>
              <p className="about-handle">@natabuitragom</p>
              <h3>Natalia Buitrago</h3>
              <p>El maximo exponente femenino de seduccion en habla hispana. Ensena desde la perspectiva femenina: lectura de senales, congruencia, lenguaje corporal y manejo de citas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">El programa</span>
            <h2>Lo que obtenes al unirte a <em>Aurum</em></h2>
          </div>
          <div className="benefits-grid reveal">
            {BENEFITS.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="eventos" className="events">
        <div className="container">
          <div className="events-content reveal">
            <div className="events-image"><img src={IMG.event} alt="Evento Aurum en Bogota" /></div>
            <div className="events-text">
              <span className="eyebrow">En vivo</span>
              <h2>Eventos <em>presenciales</em></h2>
              <p className="lede">Mas de 15 eventos en ciudades como Bogota, Buenos Aires, Mexico DF. Cientos de hombres transformando su vida en comunidad.</p>
              <div className="events-stats">
                <div><FaUsers size={18} /> +500 asistentes totales</div>
                <div><FaCalendarCheck size={18} /> Proximo evento: Junio 2026</div>
              </div>
              <a href="/reservas" className="btn btn-primary" style={{ marginTop: 32 }}>
                Reserva tu lugar <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Dudas</span>
            <h2>Preguntas <em>frecuentes</em></h2>
          </div>
          <div className="faq-list reveal">
            {FAQ_DATA.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final" style={{ backgroundImage: `url(${IMG.ctaBg})` }}>
        <div className="cta-final-overlay" />
        <div className="cta-final-content reveal">
          <span className="eyebrow">Tu momento</span>
          <h2>Tu transformacion empieza <em>hoy</em></h2>
          <p className="lede" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            Agenda una sesion de diagnostico y en 45 minutos vas a entender exactamente que estas haciendo mal y que cambiar primero.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a href="/reservas" className="btn btn-primary">Agendar sesion de diagnostico <span className="arrow">→</span></a>
            <a href="https://wa.me/message" className="btn btn-ghost"><FaWhatsapp /> Escribir por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 L22 21 L2 21 Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
              <path d="M12 9 L17 19 L7 19 Z" fill="#c9a84c" />
            </svg>
            <span className="gold-text">AURUM TEAM</span>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com/danielseguraf" target="_blank" rel="noreferrer"><FaInstagram size={18} /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaYoutube size={18} /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaWhatsapp size={18} /></a>
          </div>
          <p className="footer-copy">&copy; 2026 Aurum Team · Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
