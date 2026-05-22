import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { clientes as initialClientes } from '../../data/mockData';
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiEye, FiX } from 'react-icons/fi';
import './AdminPages.css';

const planColors = {
  'Metodo Aurum 2.0': 'badge-gold',
  'Sesion 1a1': 'badge-purple',
  'Sesion Diagnostico': 'badge-blue',
};

const statusColors = {
  activo: 'badge-green',
  pausado: 'badge-gold',
  baja: 'badge-red',
};

const paymentColors = {
  'al dia': 'badge-green',
  pendiente: 'badge-gold',
  vencido: 'badge-red',
};

export default function AdminClientes() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');
  const [selected, setSelected] = useState(null);

  const filtered = initialClientes.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'todos' || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <AdminLayout activeItem="clientes" title="Clientes" subtitle={`${initialClientes.length} clientes registrados`}>
      {/* Toolbar */}
      <div className="admin-toolbar">
        <div className="admin-search">
          <FiSearch className="admin-search-icon" />
          <input placeholder="Buscar por nombre o email..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="admin-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="activo">Activos</option>
          <option value="pausado">Pausados</option>
          <option value="baja">Baja</option>
        </select>
        <button className="admin-btn admin-btn-gold">
          <FiPlus /> Nuevo Cliente
        </button>
      </div>

      {/* Table */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Plan</th>
              <th>Estado</th>
              <th>Pago</th>
              <th>Progreso</th>
              <th>Sesiones</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td>
                  <div className="name">{c.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-dim)' }}>{c.email}</div>
                </td>
                <td><span className={`badge ${planColors[c.plan] || 'badge-gray'}`}>{c.plan}</span></td>
                <td><span className={`badge ${statusColors[c.status]}`}>{c.status}</span></td>
                <td><span className={`badge ${paymentColors[c.paymentStatus]}`}>{c.paymentStatus}</span></td>
                <td>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: `${c.progress}%` }} />
                    <span className="progress-text">{c.progress}%</span>
                  </div>
                </td>
                <td>{c.sessions}</td>
                <td>{c.city}</td>
                <td>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="admin-btn-icon" onClick={() => setSelected(c)}><FiEye /></button>
                    <button className="admin-btn-icon"><FiEdit2 /></button>
                    <button className="admin-btn-icon"><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                <span className="detail-label">Edad</span>
                <span className="detail-value">{selected.age} anos</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ocupacion</span>
                <span className="detail-value">{selected.occupation}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ciudad</span>
                <span className="detail-value">{selected.city}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Plan</span>
                <span className={`badge ${planColors[selected.plan] || 'badge-gray'}`}>{selected.plan}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Estado</span>
                <span className={`badge ${statusColors[selected.status]}`}>{selected.status}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pago</span>
                <span className={`badge ${paymentColors[selected.paymentStatus]}`}>{selected.paymentStatus}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Inicio</span>
                <span className="detail-value">{selected.startDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Sesiones</span>
                <span className="detail-value">{selected.sessions}</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <span className="detail-label">Progreso del programa</span>
              <div className="progress-bar-wrap" style={{ marginTop: '8px', height: '10px' }}>
                <div className="progress-bar" style={{ width: `${selected.progress}%` }} />
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>{selected.progress}%</span>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
