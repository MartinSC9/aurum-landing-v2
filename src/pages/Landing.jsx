import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaCheck, FaTimes, FaPlay, FaUsers, FaCalendarCheck, FaBrain, FaTshirt, FaComments, FaShieldAlt, FaUserCheck, FaChevronDown, FaChevronUp, FaVideo, FaGlobeAmericas, FaHandshake, FaLock } from 'react-icons/fa';
import './Landing.css';

const HERO_VIDEO = 'https://videos.pexels.com/video-files/5528029/5528029-uhd_2560_1440_30fps.mp4';

const TESTIMONIALS = [
  {
    initial: 'S',
    name: 'Santiago R.',
    age: 24,
    role: 'Economista',
    city: 'Buenos Aires',
    text: 'Antes no podia ni mantener una conversacion con una mujer sin quedarme en blanco. Despues de 2 meses con el Metodo, empece a abordar en cualquier lugar con naturalidad. Hoy salgo con mujeres que antes creia imposibles para mi.',
  },
  {
    initial: 'A',
    name: 'Alfonso M.',
    age: 55,
    role: 'Ingeniero',
    city: 'Bogota',
    text: 'A los 55 pense que ya era tarde para cambiar. Me habia divorciado y no sabia ni por donde empezar. En 3 meses pase de cero opciones a tener 13 mujeres interesadas. La perspectiva de Natalia fue clave para entender que buscan ellas.',
  },
  {
    initial: 'V',
    name: 'Victor L.',
    age: 25,
    role: 'Abogado',
    city: 'Mexico DF',
    text: 'Llevaba 5 anos en la friendzone con la chica que me gustaba. Daniel me hizo ver todo lo que estaba haciendo mal. Hoy entiendo como funciona la atraccion y genero interes de forma natural, sin forzar nada.',
  },
  {
    initial: 'R',
    name: 'Roberto S.',
    age: 38,
    role: 'Empresario',
    city: 'Medellin',
    text: 'La mentoria 1 a 1 con Daniel fue la mejor inversion que hice en mi vida. En una sola sesion me mostro los errores que venia arrastrando hace anos. En 3 meses todo cambio por completo, tanto en citas como en confianza personal.',
  },
];

const STATS = [
  { number: '247', label: 'Hombres transformados', suffix: '+' },
  { number: '20', label: 'Paises', suffix: '+' },
  { number: '12', label: 'Anos de experiencia', suffix: '+' },
  { number: '4.9', label: 'Valoracion media', suffix: '★' },
];

const BENEFITS = [
  { icon: <FaShieldAlt />, title: 'Aborda a cualquier mujer en 3 segundos', text: 'Domina el arte de la apertura con un sistema probado. Nunca mas te quedes paralizado viendo pasar a la mujer que te gusta.' },
  { icon: <FaComments />, title: 'Conversaciones que generan atraccion real', text: 'Elimina las charlas aburridas que no llevan a nada. Genera interes y curiosidad desde los primeros 5 minutos.' },
  { icon: <FaUserCheck />, title: 'Estrategia personalizada para tu caso', text: 'Analisis profundo con sesiones 1 a 1. Plan de accion adaptado a tu personalidad, tu edad y tus objetivos.' },
  { icon: <FaVideo />, title: 'Sistema completo de +40 horas', text: 'Acceso 24/7 a todo el contenido. Sin teoria vacia: estrategias probadas por +247 hombres en situaciones reales.' },
  { icon: <FaHandshake />, title: 'Practica real con acompanamiento en campo', text: 'Salidas donde te acompanamos en vivo y te mostramos como funciona. Demostraciones directas, feedback inmediato.' },
  { icon: <FaGlobeAmericas />, title: 'Comunidad privada de hombres en accion', text: 'Red exclusiva con hombres de 20+ paises que estan en el mismo camino. Experiencias, motivacion y networking real.' },
];

const FAQ_DATA = [
  { q: 'Necesito experiencia previa con mujeres?', a: 'No. El programa esta disenado para cualquier nivel. Muchos de nuestros alumnos mas exitosos empezaron desde cero absoluto. El sistema te lleva paso a paso desde donde estes ahora.' },
  { q: 'Funciona si soy timido o introvertido?', a: 'Si, y muchas veces con ventaja. Los introvertidos suelen proyectar misterio y profundidad, que son cualidades atractivas. El metodo te ensena a usar tu personalidad a tu favor, no a convertirte en alguien que no sos.' },
  { q: 'Cuanto tiempo toma ver resultados?', a: 'La mayoria empieza a notar cambios en las primeras 2-4 semanas: mas confianza, mejores conversaciones, mas atencion femenina. Resultados solidos en citas en 2-3 meses con practica constante.' },
  { q: 'Cuanto cuesta el programa?', a: 'Tenemos diferentes opciones segun tu situacion. El primer paso es agendar una sesion de diagnostico donde evaluamos tu caso y te explicamos cual es el plan ideal para vos. La sesion 1 a 1 con Daniel es de $99 USD.' },
  { q: 'Voy a tener contacto directo con Daniel y Natalia?', a: 'Si. Dependiendo del plan, vas a tener acceso a sesiones 1 a 1 por videollamada, seguimiento por WhatsApp y acompanamiento presencial en salidas de campo.' },
  { q: 'Puedo acceder desde cualquier pais?', a: 'Si. Tenemos alumnos en mas de 20 paises. Las sesiones son por videollamada, el contenido es 100% online, y los eventos presenciales se hacen en distintas ciudades de Latinoamerica.' },
];

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
      {/* WhatsApp Floating */}
      <a href="https://wa.me/message" className="whatsapp-float" target="_blank" rel="noreferrer">
        <FaWhatsapp size={28} />
      </a>

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
            <a href="#resultados" onClick={() => setMobileMenu(false)}>Resultados</a>
            <a href="#nosotros" onClick={() => setMobileMenu(false)}>Fundadores</a>
            <a href="#eventos" onClick={() => setMobileMenu(false)}>Eventos</a>
            <a href="/reservas" className="btn btn-nav" onClick={() => setMobileMenu(false)}>Agendar sesion</a>
          </div>
          <button className="navbar-hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-media">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Metodo Aurum 2.0 · Inscripciones abiertas</div>
          <h1>Deja de conformarte y empieza a atraer a la <em>mujer que realmente te gusta</em></h1>
          <p className="hero-sub">
            El sistema que ya usaron +247 hombres en 20 paises para pasar de la inseguridad a tener las citas que siempre quisieron. Con acompanamiento real, no teoria.
          </p>
          <div className="hero-ctas">
            <a href="/reservas" className="btn btn-primary">Agendar sesion de diagnostico <span className="arrow">→</span></a>
            <a href="#vsl" className="btn btn-ghost">Ver como funciona · 12 min</a>
          </div>
          <div className="hero-proof">
            <div className="hero-avatars">
              {['S', 'A', 'V', 'R', 'M'].map((letter, i) => (
                <div key={i} className="hero-avatar-initial">{letter}</div>
              ))}
            </div>
            <div className="hero-proof-text">
              <div className="hero-proof-stars">★★★★★</div>
              <div><strong>+247 hombres transformados</strong> en 20+ paises</div>
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
              <span className="stat-number">{s.number}<span className="stat-suffix">{s.suffix}</span></span>
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
            <h2>Para hombres cansados de <em>conformarse</em></h2>
          </div>
          <div className="audience-grid reveal">
            <div className="audience-card yes">
              <div className="card-badge"><span className="card-badge-dot" /> Esto es para vos</div>
              <h3>Aplica si...</h3>
              <ul className="audience-list">
                <li><span className="icon-circle"><FaCheck size={10} /></span> Queres tener 5-6 citas al mes con mujeres que realmente te atraen</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Estas soltero o divorciado y queres volver al juego con confianza</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Buscas una relacion de alto valor, no algo pasajero</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Estas dispuesto a invertir en tu crecimiento personal</li>
                <li><span className="icon-circle"><FaCheck size={10} /></span> Tenes entre 21 y 60 anos</li>
              </ul>
            </div>
            <div className="audience-card no">
              <div className="card-badge"><span className="card-badge-dot" /> No es para vos</div>
              <h3>No apliques si...</h3>
              <ul className="audience-list">
                <li><span className="icon-circle"><FaTimes size={10} /></span> Buscas frases magicas o trucos rapidos</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> No estas dispuesto a hacer cambios reales en tu vida</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> Queres manipular o enganar mujeres</li>
                <li><span className="icon-circle"><FaTimes size={10} /></span> No podes comprometerte con un proceso de al menos 2 meses</li>
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
              { num: '01', icon: <FaBrain size={28} />, title: 'Reprogramacion Mental', text: 'Elimina las creencias que te frenan. Desarrolla una mentalidad de alto valor que las mujeres perciben naturalmente en tu forma de hablar, moverte y decidir.', accent: 'mental' },
              { num: '02', icon: <FaTshirt size={28} />, title: 'Transformacion de Imagen', text: 'Optimiza tu estilo, tu lenguaje corporal y tu presencia. Genera una primera impresion que abre puertas antes de decir una sola palabra.', accent: 'imagen' },
              { num: '03', icon: <FaComments size={28} />, title: 'Sistema de Conexion', text: 'Aprende a iniciar conversaciones, generar tension y crear conexiones genuinas que terminan en citas reales. No scripts, sino habilidades.', accent: 'conexion' },
            ].map((p, i) => (
              <div key={i} className={`method-card method-${p.accent}`}>
                <div className="method-card-accent" />
                <div className="method-icon">{p.icon}</div>
                <div className="method-number">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VSL */}
      <section id="vsl" className="vsl">
        <div className="vsl-content reveal">
          <span className="eyebrow">Conoce el metodo</span>
          <h2>Mira como funciona el <em>Metodo Aurum</em> en 12 minutos</h2>
          <p className="lede" style={{ margin: '0 auto 40px' }}>Daniel te explica el sistema completo y por que funciona donde otros metodos fallan.</p>
          <div className="vsl-video">
            <div className="vsl-placeholder">
              <div className="vsl-play-btn"><FaPlay size={28} /></div>
              <span className="vsl-placeholder-text">Video del Metodo Aurum</span>
            </div>
          </div>
          <div className="vsl-urgency">
            <FaLock size={12} />
            <span>Cupos limitados · Solo aceptamos 10 alumnos nuevos por mes</span>
          </div>
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
              <span className="eyebrow">Resultados reales</span>
              <h2>Hombres que ya <em>lo lograron</em></h2>
            </div>
            <div className="section-meta">
              <strong>+247 transformaciones</strong> · 35+ casos documentados en video
            </div>
          </div>
          <div className="testimonials-grid reveal">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <blockquote>{t.text}</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-initial">{t.initial}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}, {t.age} anos · {t.city}</div>
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
            <h2>Quienes estan <em>detras de Aurum</em></h2>
          </div>
          <div className="about-grid reveal">
            <div className="about-card">
              <div className="about-img-wrapper">
                <div className="about-placeholder">
                  <span>Foto de Daniel</span>
                  <small>@danielseguraf · 488K</small>
                </div>
              </div>
              <p className="about-handle">@danielseguraf · 488K seguidores</p>
              <h3>Daniel Segura</h3>
              <p>+12 anos transformando hombres en 20 paises. Especialista en juego de texto, Instagram y tecnicas de PNL. Creador de la Metodologia de la Trinidad de la Seduccion.</p>
            </div>
            <div className="about-card">
              <div className="about-img-wrapper">
                <div className="about-placeholder">
                  <span>Foto de Natalia</span>
                  <small>@natabuitragom</small>
                </div>
              </div>
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
            <div className="events-image">
              <div className="events-placeholder">
                <FaUsers size={40} />
                <span>Fotos de eventos reales</span>
                <small>Bogota · Buenos Aires · Mexico DF</small>
              </div>
            </div>
            <div className="events-text">
              <span className="eyebrow">En vivo</span>
              <h2>Eventos <em>presenciales</em></h2>
              <p className="lede">Mas de 15 eventos en ciudades como Bogota, Buenos Aires y Mexico DF. Cientos de hombres transformando su vida en comunidad.</p>
              <div className="events-stats">
                <div><FaUsers size={18} /> +500 asistentes en total</div>
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
            <span className="eyebrow">Dudas frecuentes</span>
            <h2>Preguntas <em>frecuentes</em></h2>
          </div>
          <div className="faq-list reveal">
            {FAQ_DATA.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="cta-final-content reveal">
          <span className="eyebrow">Da el primer paso</span>
          <h2>En 45 minutos vas a saber <em>exactamente que cambiar</em></h2>
          <p className="lede" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            Agenda una sesion de diagnostico. Un especialista analiza tu situacion y te muestra por donde empezar.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a href="/reservas" className="btn btn-primary">Agendar mi sesion <span className="arrow">→</span></a>
            <a href="https://wa.me/message" className="btn btn-ghost"><FaWhatsapp /> Hablar por WhatsApp</a>
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
