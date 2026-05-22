import { Link } from 'react-router-dom';
import {
  FiGrid, FiUsers, FiBookOpen, FiMessageSquare,
  FiCalendar, FiDollarSign, FiFileText, FiSettings,
  FiX, FiExternalLink, FiLogOut, FiTriangle
} from 'react-icons/fi';
import './AdminSidebar.css';

const menu = [
  { key: 'dashboard', label: 'Dashboard', icon: FiGrid, path: '/admin' },
  { key: 'clientes', label: 'Clientes', icon: FiUsers, path: '/admin/clientes' },
  { key: 'cursos', label: 'Cursos', icon: FiBookOpen, path: '/admin/cursos' },
  { key: 'leads', label: 'Leads / CRM', icon: FiMessageSquare, path: '/admin/leads' },
  { key: 'reservas', label: 'Reservas', icon: FiCalendar, path: '/admin/reservas' },
  { key: 'finanzas', label: 'Finanzas', icon: FiDollarSign, path: '/admin/finanzas' },
  { key: 'blog', label: 'Blog', icon: FiFileText, path: '/admin/blog' },
  { key: 'config', label: 'Configuracion', icon: FiSettings, path: '/admin/configuracion' },
];

export default function AdminSidebar({ activeItem, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`admin-sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <FiTriangle className="sidebar-logo-icon" />
          <div>
            <span className="sidebar-brand-name">AURUM</span>
            <span className="sidebar-brand-sub">Panel Admin</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menu.map(item => (
            <Link
              key={item.key}
              to={item.path}
              className={`sidebar-link ${activeItem === item.key ? 'active' : ''}`}
              onClick={onClose}
            >
              <item.icon className="sidebar-link-icon" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-footer-link">
            <FiExternalLink /> Ir al sitio
          </Link>
          <button className="sidebar-footer-link">
            <FiLogOut /> Cerrar sesion
          </button>
        </div>
      </aside>
    </>
  );
}
