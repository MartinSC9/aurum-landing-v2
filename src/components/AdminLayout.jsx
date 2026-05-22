import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import './AdminLayout.css';

export default function AdminLayout({ activeItem, title, subtitle, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="admin-layout">
      <AdminSidebar
        activeItem={activeItem}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <main className="admin-main">
        <header className="admin-header">
          <button className="admin-hamburger" onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
          <div className="admin-header-info">
            <h1 className="admin-header-title">{title}</h1>
            {subtitle && <p className="admin-header-subtitle">{subtitle}</p>}
          </div>
          <div className="admin-header-user">
            <div className="admin-avatar">DS</div>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
