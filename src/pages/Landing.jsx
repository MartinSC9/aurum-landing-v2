import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaPlay,
  FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaGlobeAmericas,
  FaCheck, FaStar
} from 'react-icons/fa';
import './Landing.css';

// ── Assets ──────────────────────────────────────────────
const IMG = {
  // Fotos reales de aurumteam.com
  daniel: 'https://aurumteam.com/wp-content/uploads/2025/09/Diseno-sin-titulo-25-e1758220296330-939x1024.png',
  natalia: 'https://aurumteam.com/wp-content/uploads/2025/09/Diseno-sin-titulo-30-e1758220265309-798x1024.png',
  // Screenshots reales de testimonios
  proof1: 'https://aurumteam.com/wp-content/uploads/2025/09/1.png',
  proof2: 'https://aurumteam.com/wp-content/uploads/2025/09/2.png',
  proof3: 'https://aurumteam.com/wp-content/uploads/2025/09/3.png',
  proof4: 'https://aurumteam.com/wp-content/uploads/2025/09/4.png',
  proof5: 'https://aurumteam.com/wp-content/uploads/2025/09/5.png',
  proof6: 'https://aurumteam.com/wp-content/uploads/2025/09/6.png',
  proof7: 'https://aurumteam.com/wp-content/uploads/2025/09/7.png',
  proof8: 'https://aurumteam.com/wp-content/uploads/2025/09/8.png',
  proof9: 'https://aurumteam.com/wp-content/uploads/2025/09/9.png',
  proof10: 'https://aurumteam.com/wp-content/uploads/2025/09/10.png',
  // Lifestyle premium (Unsplash)
  about: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
  method1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
  method2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  vsl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1280&q=80',
};

const TESTIMONIALS = [
  { name: 'Santiago', role: 'Economista', age: 24, before: 'No podía hablarle a una mujer sin temblar', text: 'Hoy abro en cualquier bar, en la calle, en eventos. Tengo 4 opciones reales y elijo yo. El método te cambia la vida, literal.', video: 'https://aurumteam.com/wp-content/uploads/2025/09/T.-Santiago-1-1.mp4' },
  { name: 'Alfonso', role: 'Ingeniero', age: 55, before: 'A los 55 pensé que ya era tarde', text: 'Hoy tengo 13 opciones con mujeres de alto valor. La perspectiva de Natalia fue clave — me hizo entender lo que ellas realmente quieren.', video: 'https://aurumteam.com/wp-content/uploads/2025/09/T.-alfonzo-55-1.mp4' },
  { name: 'Víctor', role: 'Abogado', age: 25, before: '5 años en la friendzone sin entender por qué', text: 'Daniel me hizo ver todo lo que estaba haciendo mal en 1 sesión. A las 2 semanas ya tenía mi primera cita real. Hoy no paro.', video: 'https://aurumteam.com/wp-content/uploads/2025/09/T.-Victor-1.mp4' },
];

const MARQUEE_WORDS = [
  'Confianza', 'Presencia', 'Conexión', 'Transformación',
  'Mentalidad', 'Liderazgo', 'Atracción', 'Autenticidad'
];

// ── Animation variants ──────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12 }
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

// ── FlipWords ───────────────────────────────────────────
function FlipWords({ words, duration = 2400 }) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length);
        setExiting(false);
      }, 400);
    }, duration);
    return () => clearTimeout(timer);
  }, [index, duration, words.length]);

  return (
    <span className={`flip-word ${exiting ? 'flip-word--exit' : ''}`}>
      {words[index]}
    </span>
  );
}

// ── NumberTicker ────────────────────────────────────────
function NumberTicker({ value, suffix = '', duration = 2000 }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * ease));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [started, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── Section wrapper ─────────────────────────────────────
function Section({ children, className = '', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.section>
  );
}

// ── Marquee ─────────────────────────────────────────────
function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((item, i) => (
          <span key={i} className="marquee__item">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ── VSL Player ──────────────────────────────────────────
function VslSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isInView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="vsl"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="vsl__header">
          <span className="eyebrow">Video</span>
          <h2>Conoce el método <em>Aurum</em></h2>
        </motion.div>
      </div>
      <motion.div variants={scaleIn} className="vsl__player vsl__player--playing">
        <video ref={videoRef} className="vsl__video" controls muted preload="metadata" controlsList="nodownload" playsInline>
          <source src="/vsl-aurum.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.section>
  );
}

// ── Cursor glow ─────────────────────────────────────────
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

// ── Floating particles ──────────────────────────────────
function Particles({ count = 24 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 18,
      size: 1.5 + Math.random() * 2.5,
      opacity: 0.15 + Math.random() * 0.25,
    }))
  ).current;

  return (
    <div className="particles" aria-hidden>
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left + '%',
            width: p.size + 'px',
            height: p.size + 'px',
            opacity: p.opacity,
            animationDelay: p.delay + 's',
            animationDuration: p.duration + 's',
          }}
        />
      ))}
    </div>
  );
}

// ── Parallax image ──────────────────────────────────────
function ParallaxImg({ src, alt, speed = 0.15, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="parallax-img" loading="lazy" />
    </div>
  );
}

// ── Splash screen ───────────────────────────────────────
let splashPlayed = false;

function SplashScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const letters = 'AURUM'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash ${!visible ? 'splash--exit' : ''}`}>
      <div className="splash__content">
        <div className="splash__logo">
          <svg viewBox="0 0 24 24" fill="none" className="splash__icon">
            <path d="M12 2 L22 22 L2 22 Z" stroke="currentColor" strokeWidth="1" fill="none" className="splash__tri-outer" />
            <path d="M12 8 L18 20 L6 20 Z" fill="currentColor" className="splash__tri-inner" />
          </svg>
        </div>
        <div className="splash__halo" />
        <div className="splash__flash" />
        <div className="splash__text">
          {letters.map((ch, i) => (
            <span key={i} className="splash__letter" style={{ '--i': i }}>{ch}</span>
          ))}
        </div>
        <span className="splash__tagline">Transformación masculina</span>
      </div>
    </div>
  );
}

// ── Floating buttons ────────────────────────────────────
function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="floating-btns">
      <a
        href="https://api.aurumteam.com/1a1daniel"
        target="_blank"
        rel="noreferrer"
        className="float-btn float-btn--wa"
        aria-label="Reservar sesión"
      >
        <FaCalendarAlt size={18} />
        <span className="float-btn__tooltip">Reservá tu sesión</span>
      </a>
      <a
        href="https://www.youtube.com/@teoriadepoder"
        target="_blank"
        rel="noreferrer"
        className="float-btn float-btn--yt"
        aria-label="YouTube"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="https://instagram.com/danielseguraf"
        target="_blank"
        rel="noreferrer"
        className="float-btn float-btn--ig"
        aria-label="Instagram"
      >
        <FaInstagram size={20} />
      </a>
      {showTop && (
        <button
          className="float-btn float-btn--top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}

// ── Hero video carousel ─────────────────────────────────
const HERO_VIDEOS = ['/hero-event-1.mp4', '/hero-event-2.mp4', '/hero-event-3.mp4'];

function HeroVideoCarousel() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % HERO_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <>
      {HERO_VIDEOS.map((src, i) => (
        <video
          key={i}
          ref={el => (videoRefs.current[i] = el)}
          className={`hero__video ${i === active ? 'hero__video--active' : ''}`}
          muted
          playsInline
          loop
          preload={i === 0 ? 'auto' : 'metadata'}
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <div className="hero__video-dots">
        {HERO_VIDEOS.map((_, i) => (
          <button
            key={i}
            className={`hero__video-dot ${i === active ? 'hero__video-dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

// ── Main ────────────────────────────────────────────────
export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [splashDone, setSplashDone] = useState(splashPlayed);

  const handleSplashComplete = useCallback(() => {
    splashPlayed = true;
    setSplashDone(true);
  }, []);

  useEffect(() => {
    if (!splashDone) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [splashDone]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenu]);

  return (
    <div className="page">
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <CursorGlow />
      <Particles />
      <FloatingButtons />

      {/* ─── Nav ─── */}
      <nav className={`nav ${navScrolled ? 'nav--scrolled' : ''} ${splashDone ? 'nav--visible' : ''}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand">
            <span className="nav__wordmark">AURUM</span>
          </a>
          <div className={`nav__links ${mobileMenu ? 'nav__links--open' : ''}`}>
            <a href="#sobre-mi" onClick={() => setMobileMenu(false)}>Sobre mí</a>
            <a href="#metodo" onClick={() => setMobileMenu(false)}>Método</a>
            <a href="#resultados" onClick={() => setMobileMenu(false)}>Resultados</a>
            <a href="#contacto" onClick={() => setMobileMenu(false)}>Contacto</a>
            <a href="https://api.aurumteam.com/1a1daniel" className="btn btn-primary shine-sweep nav__cta" onClick={() => setMobileMenu(false)}>
              Quiero mi sesión
            </a>
          </div>
          <button className={`nav__hamburger ${mobileMenu ? 'nav__hamburger--open' : ''}`} onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className={`hero ${splashDone ? 'hero--ready' : ''}`} id="top">
        <HeroVideoCarousel />
        <div className="hero__overlay" />
        <div className="glow-orb glow-orb--bronze" style={{ top: '10%', left: '60%', width: 600, height: 600 }} />

        <div className="hero__content">
          <div className="hero__intro-group">
            <div className="hero__intro-item" style={{ '--intro-i': 0 }}>
              <div className="hero__badge">
                <img src={IMG.daniel} alt="Daniel Segura" className="hero__avatar" />
                <span>Daniel Segura · 488K seguidores</span>
              </div>
            </div>
            <h1 className="hero__title hero__intro-item" style={{ '--intro-i': 1 }}>
              Transforma tu vida<br />
              <span className="hero__title-accent text-shimmer">con mujeres de alto valor</span>
            </h1>
            <p className="hero__hook hero__intro-item" style={{ '--intro-i': 2 }}>
              El sistema que ya usó{' '}
              <FlipWords words={['un economista de 24', 'un ingeniero de 55', 'un abogado de 25', 'hombres en 20 países']} />
              {' '}para dejar de conformarse y empezar a elegir.
            </p>
            <div className="hero__actions hero__intro-item" style={{ '--intro-i': 3 }}>
              <a href="https://api.aurumteam.com/1a1daniel" className="btn btn-primary btn-lg shine-sweep">
                Quiero mi sesión <FaArrowRight className="btn-arrow" />
              </a>
              <a href="#metodo" className="btn btn-ghost">
                Ver el método
              </a>
            </div>
            <div className="hero__stats hero__intro-item" style={{ '--intro-i': 4 }}>
              <div className="hero__stat">
                <span className="hero__stat-num"><NumberTicker value={488} suffix="K" /></span>
                <span className="hero__stat-label">Seguidores</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num"><NumberTicker value={247} suffix="+" /></span>
                <span className="hero__stat-label">Transformados</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num"><NumberTicker value={20} suffix="+" /></span>
                <span className="hero__stat-label">Países</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll hero__intro-item" style={{ '--intro-i': 5 }}>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ─── Marquee ─── */}
      <Marquee />

      {/* ─── Trust bar ─── */}
      <div className="trust-bar">
        <div className="container trust-bar__inner">
          <span className="trust-bar__label">Como visto en</span>
          <div className="trust-bar__logos">
            <span className="trust-bar__logo"><FaYoutube size={16} /> YouTube <strong>488K</strong></span>
            <span className="trust-bar__logo"><FaInstagram size={16} /> Instagram <strong>500K+</strong></span>
            <span className="trust-bar__logo"><FaTiktok size={14} /> TikTok <strong>200K+</strong></span>
            <span className="trust-bar__logo">Hotmart <strong>Top Coach</strong></span>
          </div>
        </div>
      </div>

      {/* ─── About ─── */}
      <Section className="about" id="sobre-mi">
        <div className="container">
          <motion.div variants={fadeUp} className="about__top">
            <span className="eyebrow">Quiénes somos</span>
            <h2>No enseñamos frases.<br />Creamos <em>hombres de alto valor</em>.</h2>
          </motion.div>
          <div className="about__cards">
            <motion.div variants={fadeUp} className="about__card">
              <div className="about__card-photo">
                <img src={IMG.daniel} alt="Daniel Segura" loading="lazy" />
              </div>
              <div className="about__card-info">
                <h3>Daniel Segura</h3>
                <span className="about__card-role">Co-fundador · Head Coach</span>
                <p>+12 años transformando hombres en 20 países. Creador de la Trinidad de la Seducción.</p>
                <a href="https://instagram.com/danielseguraf" target="_blank" rel="noreferrer" className="about__card-link"><FaInstagram /> 488K seguidores</a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="about__card">
              <div className="about__card-photo">
                <img src={IMG.natalia} alt="Natalia Buitrago" loading="lazy" />
              </div>
              <div className="about__card-info">
                <h3>Natalia Buitrago</h3>
                <span className="about__card-role">Co-fundadora · Coach Senior</span>
                <p>Máximo exponente femenino de seducción en habla hispana. Te enseña a leer señales y conectar.</p>
                <a href="https://instagram.com/natabuitragom" target="_blank" rel="noreferrer" className="about__card-link"><FaInstagram /> @natabuitragom</a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ─── Statement ─── */}
      <Section className="statement">
        <video
          className="statement__video"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="/hero-3.mp4" type="video/mp4" />
        </video>
        <div className="statement__overlay" />
        <div className="glow-orb glow-orb--bronze" style={{ top: '-20%', right: '10%', width: 500, height: 500 }} />
        <div className="container">
          <motion.h2 variants={fadeUp} className="statement__text">
            Sos exitoso en todo.<br />
            Menos en <em className="text-shimmer">lo que más importa</em>.
          </motion.h2>
        </div>
      </Section>

      {/* ─── Pain ─── */}
      <Section className="pain">
        <div className="pain__bg" />
        <div className="container">
          <motion.div variants={fadeUp} className="pain__intro">
            <span className="eyebrow">¿Te suena familiar?</span>
            <h2>El éxito no te sirve<br />si volvés <em>solo a casa</em></h2>
          </motion.div>
          <div className="pain__list">
            {[
              { num: '01', img: 'https://images.pexels.com/photos/14973800/pexels-photo-14973800.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Éxito vacío', text: 'Tenés plata, auto, departamento... pero volvés solo a tu casa todas las noches.' },
              { num: '02', img: 'https://images.pexels.com/photos/11564271/pexels-photo-11564271.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Oportunidades perdidas', text: 'Ves pasar mujeres que te gustan y no te animás a hablarles. Después te odiás por eso.' },
              { num: '03', img: 'https://images.pexels.com/photos/6833571/pexels-photo-6833571.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Apps que no funcionan', text: 'Probaste apps de citas. Matches que no responden. Citas que no van a ningún lado.' },
              { num: '04', img: 'https://images.pexels.com/photos/7533346/pexels-photo-7533346.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Merecés más', text: 'Sabés que merecés más, pero no sabés cómo conseguirlo sin parecer desesperado.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className={`pain__row ${i % 2 ? 'pain__row--reverse' : ''}`}>
                <div className="pain__row-img">
                  <img src={item.img} alt="" loading="lazy" />
                  <span className="pain__row-num">{item.num}</span>
                </div>
                <div className="pain__row-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="pain__closer">
            <div className="pain__closer-line" />
            <p>Si te sentiste identificado con al menos una,<br />
            <strong>el Método Aurum fue creado para vos.</strong></p>
            <a href="#metodo" className="btn btn-ghost pain__btn">
              Ver el método <FaArrowRight className="btn-arrow" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ─── Metodo ─── */}
      <Section className="metodo dot-grid" id="metodo">
        <div className="container">
          <motion.div variants={fadeUp} className="metodo__header">
            <span className="eyebrow">Método Aurum</span>
            <h2>Tres pilares de la <em>transformación</em></h2>
          </motion.div>

          <div className="metodo__cards">
            {[
              { num: '01', title: 'Mentalidad de Abundancia', desc: 'Transformamos tu mentalidad de raíz para que dejes de conformarte con lo que te toca y empieces a elegir conscientemente.', img: 'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=800', icon: '🦁' },
              { num: '02', title: 'Apertura y Conexión', desc: 'Te enseñamos a acercarte a cualquier mujer en cualquier ambiente con naturalidad absoluta. Eliminá la ansiedad para siempre.', img: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800', icon: '⚡' },
              { num: '03', title: 'Práctica Real en Campo', desc: 'Salidas de campo donde te acompañamos en vivo. Verás demostraciones directas y comprobarás que funciona.', img: 'https://images.pexels.com/photos/14780178/pexels-photo-14780178.jpeg?auto=compress&cs=tinysrgb&w=800', icon: '🎯' },
            ].map((item, i) => (
              <motion.article key={i} variants={fadeUp} custom={i} className="metodo__card">
                <div className="metodo__card-img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="metodo__card-body">
                  <span className="metodo__card-num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Video ─── */}
      <VslSection />

      {/* ─── Results ─── */}
      <Section className="results dot-grid" id="resultados">
        <div className="glow-orb glow-orb--bronze" style={{ bottom: '10%', left: '5%', width: 500, height: 500 }} />
        <div className="glow-orb glow-orb--blue" style={{ top: '15%', right: '10%', width: 400, height: 400 }} />
        <div className="container">
          <motion.div variants={fadeUp} className="results__header">
            <span className="eyebrow">Ellos estaban igual que vos</span>
            <h2>Hasta que decidieron <em>actuar</em></h2>
          </motion.div>
          <div className="results__grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="results__card card-lift">
                <div className="results__card-video">
                  <video controls preload="metadata" controlsList="nodownload" playsInline>
                    <source src={t.video} type="video/mp4" />
                  </video>
                </div>
                <div className="results__card-body">
                  <div className="results__stars">
                    {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                  </div>
                  <p className="results__before">{t.before}</p>
                  <p className="results__text">{t.text}</p>
                  <div className="results__author">
                    <span className="results__name">{t.name}, {t.age}</span>
                    <span className="results__meta">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeIn} className="results__label">
            <span className="eyebrow">247+ hombres transformados en 20 países</span>
          </motion.div>
        </div>
      </Section>

      {/* ─── Social proof scroll ─── */}
      <Section className="proof" style={{ position: 'relative' }}>
        <div className="glow-orb glow-orb--bronze" style={{ top: '30%', left: '50%', width: 500, height: 500 }} />
        <div className="container">
          <motion.div variants={fadeUp} className="proof__header">
            <span className="eyebrow">Casos de éxito reales</span>
            <h2>35+ transformaciones <em>documentadas</em></h2>
          </motion.div>
        </div>
        <motion.div variants={fadeIn} className="proof__scroll">
          <div className="proof__track proof__track--auto">
            {[IMG.proof1, IMG.proof2, IMG.proof3, IMG.proof4, IMG.proof5, IMG.proof6, IMG.proof7, IMG.proof8, IMG.proof9, IMG.proof10, IMG.proof1, IMG.proof2, IMG.proof3, IMG.proof4, IMG.proof5, IMG.proof6, IMG.proof7, IMG.proof8, IMG.proof9, IMG.proof10].map((src, i) => (
              <div key={i} className="proof__card card-lift">
                <img src={src} alt={`Caso de éxito ${(i % 10) + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ─── YouTube Content ─── */}
      <Section className="yt-content">
        <div className="container">
          <motion.div variants={fadeUp} className="yt-content__header">
            <span className="eyebrow">Contenido gratuito</span>
            <h2>Conoce a Daniel <em>en acción</em></h2>
            <p className="lede">Antes de invertir un centavo, mirá su contenido. Más de 3.7K suscriptores ya lo siguen por algo.</p>
          </motion.div>
          <div className="yt-content__grid">
            {[
              { title: 'Nunca digas "qué linda eres" | MEJOR usa esta TÉCNICA', views: '13K vistas', duration: '6:55', href: 'https://www.youtube.com/watch?v=bPmiNJv7zR4', thumb: 'https://img.youtube.com/vi/bPmiNJv7zR4/hqdefault.jpg' },
              { title: 'El nuevo método para conquistar mujeres en 2026 | NO PIDAS EL NÚMERO', views: '7.1K vistas', duration: '14:35', href: 'https://www.youtube.com/watch?v=BPL-rLibFYM', thumb: 'https://img.youtube.com/vi/BPL-rLibFYM/hqdefault.jpg' },
              { title: 'El 87% de los hombres NUNCA tendrá a la mujer que quiere', views: '4.2K vistas', duration: '34:08', href: 'https://www.youtube.com/watch?v=AP-Dh2Ed7Zc', thumb: 'https://img.youtube.com/vi/AP-Dh2Ed7Zc/hqdefault.jpg' },
            ].map((video, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                custom={i}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="yt-card card-lift"
              >
                <div className="yt-card__thumb">
                  {video.thumb ? (
                    <img src={video.thumb} alt={video.title} loading="lazy" />
                  ) : (
                    <div className="yt-card__thumb-placeholder">
                      <FaYoutube size={32} />
                    </div>
                  )}
                  <div className="yt-card__play">
                    <FaPlay size={14} />
                  </div>
                  <span className="yt-card__duration">{video.duration}</span>
                </div>
                <div className="yt-card__info">
                  <strong>{video.title}</strong>
                  <span>{video.views}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div variants={fadeUp} className="yt-content__cta">
            <a href="https://youtube.com/@teoriadepoder" target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FaYoutube /> Ver canal completo <FaArrowRight className="btn-arrow" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ─── Contact CTA ─── */}
      <Section className="contact" id="contacto">
        <video
          className="contact__video"
          autoPlay loop muted playsInline
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="/hero-1.mp4" type="video/mp4" />
        </video>
        <div className="contact__video-overlay" />
        <div className="container">
          <motion.div variants={fadeUp} className="contact__layout">
            <div className="contact__left">
              <span className="eyebrow">Solo 5 cupos por semana</span>
              <h2>Cada semana que pasa<br />sin actuar, <em>ella pasa<br />de largo</em></h2>
              <p className="contact__sub">La sesión con Daniel tiene cupos limitados. No es para todos — es para hombres que están listos para cambiar.</p>
              <div className="contact__actions">
                <a href="https://api.aurumteam.com/1a1daniel" className="btn btn-primary btn-lg shine-sweep">
                  Reservar mi lugar <FaArrowRight className="btn-arrow" />
                </a>
                <a href="https://wa.me/" className="btn btn-ghost" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> Tengo dudas
                </a>
              </div>
            </div>
            <div className="contact__right">
              {[
                { icon: <FaCalendarAlt />, title: 'Sesión de diagnóstico 1 a 1', sub: '60 min con Daniel personalmente' },
                { icon: <FaMapMarkerAlt />, title: 'Eventos presenciales', sub: 'Bogotá, Buenos Aires, México DF' },
                { icon: <FaGlobeAmericas />, title: '100% virtual', sub: 'Estudiantes en 20+ países' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="contact__detail card-lift">
                  {item.icon}
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <span className="nav__wordmark">AURUM</span>
            <div className="footer__links">
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#metodo">Método</a>
              <a href="#resultados">Resultados</a>
              <a href="#contacto">Contacto</a>
            </div>
            <div className="footer__social">
              <a href="https://instagram.com/danielseguraf" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com/@teoriadepoder" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://tiktok.com/@danielseguraf" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
          <div className="gradient-line" />
          <div className="footer__bottom">
            <p>&copy; 2026 Aurum Team</p>
          </div>
        </div>
      </footer>

      {/* ─── Sticky mobile CTA ─── */}
      <div className="sticky-cta">
        <a href="https://api.aurumteam.com/1a1daniel" className="btn btn-primary shine-sweep sticky-cta__btn">
          Reservar mi lugar <FaArrowRight className="btn-arrow" />
        </a>
      </div>
    </div>
  );
}
