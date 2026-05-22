import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { leads as initialLeads } from '../../data/mockData';
import { FiSearch, FiPlus, FiEye, FiTrash2, FiX, FiMessageSquare } from 'react-icons/fi';
import './AdminPages.css';

const statusColors = {
  nuevo: 'badge-blue',
  contactado: 'badge-gold',
  'en negociacion': 'badge-purple',
  convertido: 'badge-green',
  perdido: 'badge-red',
};

const sourceIcons = {
  Instagram: '#E1306C',
  YouTube: '#FF0000',
  Web: 'var(--gold)',
  TikTok: '#00f2ea',
  Referido: 'var(--green-text)',
};

const pipelineStages = [
  { key: 'nuevo', label: 'Nuevo', color: '#60a5fa' },
  { key: 'contactado', label: 'Contactado', color: 'var(--gold)' },
  { key: 'en negociacion', label: 'En Negociacion', color: '#a78bfa' },
  { key: 'convertido', label: 'Convertido', color: 'var(--green-text)' },
  { key: 'perdido', label: 'Perdido', color: 'var(--red-text)' },
];

export default function AdminLeads() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('kanban');
  const [selected, setSelected] = useState(null);

  const filtered = initialLeads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout activeItem="leads" title="Leads / CRM" subtitle="Pipeline de ventas">
      {/* Stats */}
      <div className="admin-grid admin-grid-stats" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Total Leads', value: initialLeads.length },
          { label: 'Nuevos', value: initialLeads.filter(l => l.status === 'nuevo').length },
          { label: 'En Negociacion', value: initialLeads.filter(l => l.status === 'en negociacion').length },
          { label: 'Convertidos', value: initialLeads.filter(l => l.status === 'convertido').length },
          { label: 'Tasa Conversion', value: `${Math.round((initialLeads.filter(l => l.status === 'convertido').length / initialLeads.length) * 100)}%` },
        ].map((s, i) => (
          <div key={i} className="admin-card stat-card stat-card-compact">
            <span className="admin-card-title">{s.label}</span>
            <p className="admin-stat-value" style={{ fontSize: '1.4rem' }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="admin-toolbar">
        <div className="admin-search">
          <FiSearch className="admin-search-icon" />
          <input placeholder="Buscar lead..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="view-toggle">
          <button className={`view-toggle-btn ${view === 'kanban' ? 'active' : ''}`} onClick={() => setView('kanban')}>Kanban</button>
          <button className={`view-toggle-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>Lista</button>
        </div>
        <button className="admin-btn admin-btn-gold">
          <FiPlus /> Nuevo Lead
        </button>
      </div>

      {/* Kanban view */}
      {view === 'kanban' && (
        <div className="kanban-board">
          {pipelineStages.map(stage => {
            const stageLeads = filtered.filter(l => l.status === stage.key);
            return (
              <div key={stage.key} className="kanban-column">
                <div className="kanban-column-header">
                  <div className="kanban-indicator" style={{ background: stage.color }} />
                  <span className="kanban-column-title">{stage.label}</span>
                  <span className="kanban-count">{stageLeads.length}</span>
                </div>
                <div className="kanban-cards">
                  {stageLeads.map(lead => (
                    <div key={lead.id} className="kanban-card" onClick={() => setSelected(lead)}>
                      <div className="kanban-card-source" style={{ color: sourceIcons[lead.source] }}>{lead.source}</div>
                      <div className="kanban-card-name">{lead.name}</div>
                      <div className="kanban-card-email">{lead.email}</div>
                      <div className="kanban-card-interest">
                        <FiMessageSquare style={{ fontSize: '12px' }} /> {lead.interest}
                      </div>
                      {lead.message && (
                        <div className="kanban-card-msg">{lead.message}</div>
                      )}
                      <div className="kanban-card-date">{lead.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List view */}
      {view === 'list' && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fuente</th>
                <th>Interes</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(l => (
                <tr key={l.id} style={{ opacity: l.status === 'perdido' ? 0.5 : 1 }}>
                  <td>
                    <div className="name">{l.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--ink-dim)' }}>{l.email}</div>
                  </td>
                  <td><span style={{ color: sourceIcons[l.source], fontWeight: 600, fontSize: '0.8rem' }}>{l.source}</span></td>
                  <td>{l.interest}</td>
                  <td><span className={`badge ${statusColors[l.status]}`}>{l.status}</span></td>
                  <td>{l.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button className="admin-btn-icon" onClick={() => setSelected(l)}><FiEye /></button>
                      <button className="admin-btn-icon"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="admin-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <h2 className="admin-modal-title">{selected.name}</h2>
              <button className="admin-btn-icon" onClick={() => setSelected(null)}><FiX /></button>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{selected.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Telefono</span>
                <span className="detail-value">{selected.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Fuente</span>
                <span className="detail-value" style={{ color: sourceIcons[selected.source] }}>{selected.source}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interes</span>
                <span className="detail-value">{selected.interest}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Estado</span>
                <span className={`badge ${statusColors[selected.status]}`}>{selected.status}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Fecha</span>
                <span className="detail-value">{selected.date}</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <span className="detail-label">Mensaje</span>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.88rem', marginTop: '6px', lineHeight: 1.6 }}>{selected.message}</p>
            </div>

            {selected.notes.length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <span className="detail-label">Notas</span>
                {selected.notes.map((n, i) => (
                  <div key={i} className="note-item">{n}</div>
                ))}
              </div>
            )}

            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => setSelected(null)}>Cerrar</button>
              <button className="admin-btn admin-btn-gold admin-btn-sm">Cambiar Estado</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
