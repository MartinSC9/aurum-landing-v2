import { FaInstagram, FaYoutube, FaWhatsapp, FaCalendarAlt, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import './LinkInBio.css';

const AVATAR = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80';

const LINKS = [
  {
    icon: <FaGraduationCap />,
    title: 'Metodo Aurum 2.0',
    subtitle: 'Programa completo de transformacion',
    href: '/',
    featured: true,
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Sesion 1 a 1 con Daniel',
    subtitle: 'Mentoring personalizado — $99 USD',
    href: '/reservas',
  },
  {
    icon: <FaYoutube />,
    title: 'Canal de YouTube',
    subtitle: 'Contenido gratuito cada semana',
    href: '#',
  },
  {
    icon: <FaWhatsapp />,
    title: 'Contacto por WhatsApp',
    subtitle: 'Escribinos para consultas',
    href: '#',
  },
];

export default function LinkInBio() {
  return (
    <div className="bio">
      <div className="bio-bg" />
      <div className="bio-container">
        {/* Profile */}
        <div className="bio-profile">
          <div className="bio-avatar-ring">
            <img src={AVATAR} alt="Daniel Segura" className="bio-avatar-img" />
          </div>
          <div className="bio-handle">@danielseguraf</div>
          <h1 className="bio-name">Daniel Segura</h1>
          <p className="bio-tagline">
            Ayudo a hombres de 30–50 anos a estar con la mujer de sus suenos
          </p>
          <div className="bio-socials">
            <a href="https://instagram.com/danielseguraf" target="_blank" rel="noreferrer"><FaInstagram size={18} /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaYoutube size={18} /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaWhatsapp size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="bio-links">
          {LINKS.map((link, i) => (
            <a key={i} href={link.href} className={`bio-link ${link.featured ? 'bio-link-featured' : ''}`}>
              <div className="bio-link-icon">{link.icon}</div>
              <div className="bio-link-text">
                <strong>{link.title}</strong>
                <span>{link.subtitle}</span>
              </div>
              <span className="bio-link-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="bio-stats">
          <div><strong>488K</strong><span>Seguidores</span></div>
          <div><strong>247+</strong><span>Transformados</span></div>
          <div><strong>20+</strong><span>Paises</span></div>
        </div>

        {/* Footer */}
        <div className="bio-footer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 3 L22 21 L2 21 Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <path d="M12 9 L17 19 L7 19 Z" fill="#c9a84c" />
          </svg>
          <span>AURUM TEAM</span>
        </div>
      </div>
    </div>
  );
}
