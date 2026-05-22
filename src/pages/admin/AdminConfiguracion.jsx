import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { FiUser, FiCreditCard, FiMail, FiMessageCircle, FiBell, FiGlobe } from 'react-icons/fi';
import './AdminPages.css';

const tabs = [
  { key: 'perfil', label: 'Perfil', icon: FiUser },
  { key: 'pagos', label: 'Pagos', icon: FiCreditCard },
  { key: 'emails', label: 'Emails', icon: FiMail },
  { key: 'whatsapp', label: 'WhatsApp', icon: FiMessageCircle },
  { key: 'notificaciones', label: 'Notificaciones', icon: FiBell },
  { key: 'seo', label: 'SEO', icon: FiGlobe },
];

export default function AdminConfiguracion() {
  const [activeTab, setActiveTab] = useState('perfil');

  return (
    <AdminLayout activeItem="config" title="Configuracion" subtitle="Ajustes de la plataforma">
      <div className="config-layout">
        {/* Tabs */}
        <div className="config-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`config-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <tab.icon /> {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="admin-card config-content">
          {activeTab === 'perfil' && (
            <>
              <h3 className="config-section-title">Perfil de Administrador</h3>
              <div className="config-avatar-section">
                <div className="admin-avatar" style={{ width: '64px', height: '64px', fontSize: '1.2rem' }}>DS</div>
                <button className="admin-btn admin-btn-outline admin-btn-sm">Cambiar foto</button>
              </div>
              <div className="config-form-grid">
                <div className="admin-field">
                  <label>Nombre</label>
                  <input defaultValue="Daniel" />
                </div>
                <div className="admin-field">
                  <label>Apellido</label>
                  <input defaultValue="Segura" />
                </div>
                <div className="admin-field">
                  <label>Email</label>
                  <input defaultValue="daniel@aurumteam.com" type="email" />
                </div>
                <div className="admin-field">
                  <label>Telefono</label>
                  <input defaultValue="+54 11 1234-5678" />
                </div>
              </div>
              <div className="admin-field">
                <label>Bio</label>
                <textarea defaultValue="Ayudo a hombres 30-50 anos a estar con la mujer de sus suenos. 12+ anos de experiencia, 247+ hombres transformados." />
              </div>
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '8px' }}>Guardar Cambios</button>
            </>
          )}

          {activeTab === 'pagos' && (
            <>
              <h3 className="config-section-title">Integracion de Pagos</h3>
              <div className="admin-field">
                <label>Stripe Public Key</label>
                <input defaultValue="pk_live_••••••••••••••••" type="password" />
              </div>
              <div className="admin-field">
                <label>Stripe Secret Key</label>
                <input defaultValue="sk_live_••••••••••••••••" type="password" />
              </div>
              <div className="admin-field">
                <label>MercadoPago Access Token</label>
                <input defaultValue="APP_USR-••••••••••••" type="password" />
              </div>
              <div className="admin-field">
                <label>PayPal Client ID</label>
                <input defaultValue="AX••••••••••••••••" type="password" />
              </div>
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '8px' }}>Guardar</button>
            </>
          )}

          {activeTab === 'emails' && (
            <>
              <h3 className="config-section-title">Plantillas de Email</h3>
              {[
                { name: 'Bienvenida', subject: 'Bienvenido a Aurum Team, {nombre}!', body: 'Hola {nombre}, tu transformacion comienza hoy...' },
                { name: 'Confirmacion de compra', subject: 'Confirmacion: {servicio}', body: 'Gracias por tu compra de {servicio}. Tu acceso esta listo.' },
                { name: 'Recordatorio de sesion', subject: 'Recordatorio: sesion manana a las {hora}', body: 'Hola {nombre}, te recordamos tu sesion de {tipo} manana...' },
                { name: 'Seguimiento', subject: 'Como vas, {nombre}?', body: 'Han pasado {dias} dias desde tu ultima sesion...' },
              ].map((tpl, i) => (
                <div key={i} className="email-template">
                  <h4 className="email-template-name">{tpl.name}</h4>
                  <div className="admin-field">
                    <label>Asunto</label>
                    <input defaultValue={tpl.subject} />
                  </div>
                  <div className="admin-field">
                    <label>Cuerpo</label>
                    <textarea defaultValue={tpl.body} rows={2} />
                  </div>
                </div>
              ))}
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '8px' }}>Guardar Plantillas</button>
            </>
          )}

          {activeTab === 'whatsapp' && (
            <>
              <h3 className="config-section-title">WhatsApp Business</h3>
              <div className="admin-field">
                <label>Numero de WhatsApp</label>
                <input defaultValue="+54 11 1234-5678" />
              </div>
              <div className="admin-field">
                <label>Mensaje de bienvenida</label>
                <textarea defaultValue="Hola! Gracias por contactar a Aurum Team. En que podemos ayudarte? Un especialista te respondera en breve." rows={3} />
              </div>
              <div className="admin-field">
                <label>Mensaje post-diagnostico</label>
                <textarea defaultValue="Hola {nombre}! Fue un gusto conocerte en tu sesion diagnostico. Cuando estes listo para dar el siguiente paso, estamos aca." rows={3} />
              </div>
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '8px' }}>Guardar</button>
            </>
          )}

          {activeTab === 'notificaciones' && (
            <>
              <h3 className="config-section-title">Notificaciones</h3>
              {[
                { label: 'Nuevo lead registrado', freq: 'Inmediato' },
                { label: 'Nueva compra de curso', freq: 'Inmediato' },
                { label: 'Sesion agendada', freq: 'Inmediato' },
                { label: 'Cliente completo modulo', freq: 'Diario' },
                { label: 'Resumen semanal', freq: 'Semanal' },
              ].map((n, i) => (
                <div key={i} className="notification-row">
                  <div className="notification-info">
                    <input type="checkbox" defaultChecked className="notification-check" />
                    <span className="notification-label">{n.label}</span>
                  </div>
                  <select className="admin-select" style={{ minWidth: '120px' }} defaultValue={n.freq}>
                    <option>Inmediato</option>
                    <option>Diario</option>
                    <option>Semanal</option>
                  </select>
                </div>
              ))}
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '16px' }}>Guardar</button>
            </>
          )}

          {activeTab === 'seo' && (
            <>
              <h3 className="config-section-title">SEO y Analytics</h3>
              <div className="admin-field">
                <label>Meta Title</label>
                <input defaultValue="Aurum Team - Coaching de Relaciones para Hombres" />
              </div>
              <div className="admin-field">
                <label>Meta Description</label>
                <textarea defaultValue="Transforma tu vida sentimental con el Metodo Aurum 2.0. Programa completo de coaching para hombres 30-50 anos. 247+ hombres transformados." rows={3} />
              </div>
              <div className="admin-field">
                <label>Google Analytics ID</label>
                <input defaultValue="G-XXXXXXXXXX" />
              </div>
              <div className="admin-field">
                <label>Facebook Pixel ID</label>
                <input defaultValue="1234567890" />
              </div>
              <button className="admin-btn admin-btn-gold" style={{ marginTop: '8px' }}>Guardar</button>
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
