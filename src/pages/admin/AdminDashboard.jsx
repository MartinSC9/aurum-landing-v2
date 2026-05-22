import AdminLayout from '../../components/AdminLayout';
import { clientes, cursos, leads, reservas, transacciones, ingresosMensuales } from '../../data/mockData';
import { FiUsers, FiBookOpen, FiMessageSquare, FiDollarSign, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import './AdminPages.css';

export default function AdminDashboard() {
  const totalIngresos = transacciones.filter(t => t.status === 'pagado').reduce((s, t) => s + t.amount, 0);
  const clientesActivos = clientes.filter(c => c.status === 'activo').length;
  const leadsNuevos = leads.filter(l => l.status === 'nuevo').length;
  const reservasHoy = reservas.filter(r => r.date === '2026-05-23').length;
  const maxIngreso = Math.max(...ingresosMensuales.map(i => i.valor));

  const stats = [
    { label: 'Ingresos Totales', value: `$${totalIngresos.toLocaleString()}`, change: '+32%', icon: FiDollarSign, up: true },
    { label: 'Clientes Activos', value: clientesActivos, change: '+12%', icon: FiUsers, up: true },
    { label: 'Alumnos Cursos', value: cursos.reduce((s, c) => s + c.enrolledCount, 0), change: '+18%', icon: FiBookOpen, up: true },
    { label: 'Leads Nuevos', value: leadsNuevos, change: '+5', icon: FiMessageSquare, up: true },
    { label: 'Reservas Proximas', value: reservasHoy, change: 'hoy', icon: FiCalendar, up: true },
    { label: 'Tasa Conversion', value: '11.5%', change: '+2.1%', icon: FiTrendingUp, up: true },
  ];

  const actividadReciente = [
    { user: 'Pablo Reyes', action: 'Compro Metodo Aurum 2.0', status: 'PAGO', date: '15 May' },
    { user: 'Fernando Ortiz', action: 'Nuevo lead desde Instagram', status: 'NUEVO', date: '21 May' },
    { user: 'Santiago Herrera', action: 'Completo modulo 4', status: 'PROGRESO', date: '20 May' },
    { user: 'Diego Fernandez', action: 'Sesion 1a1 realizada', status: 'COMPLETADO', date: '20 May' },
    { user: 'Sebastian Rivas', action: 'Nuevo lead desde Instagram', status: 'NUEVO', date: '22 May' },
  ];

  const statusClass = (s) => {
    const map = { PAGO: 'badge-green', NUEVO: 'badge-blue', PROGRESO: 'badge-gold', COMPLETADO: 'badge-green', PENDIENTE: 'badge-gold' };
    return map[s] || 'badge-gray';
  };

  return (
    <AdminLayout activeItem="dashboard" title="Dashboard" subtitle="Resumen general de Aurum Team">
      {/* Stats */}
      <div className="admin-grid admin-grid-stats">
        {stats.map((s, i) => (
          <div key={i} className="admin-card stat-card">
            <div className="stat-card-header">
              <span className="admin-card-title">{s.label}</span>
              <s.icon className="stat-card-icon" />
            </div>
            <p className="admin-stat-value">{s.value}</p>
            <span className={`admin-stat-change ${s.up ? 'up' : 'down'}`}>{s.change}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="dashboard-charts">
        {/* Ingresos chart */}
        <div className="admin-card chart-card">
          <h3 className="admin-card-title">Ingresos Mensuales (USD)</h3>
          <div className="bar-chart">
            {ingresosMensuales.map((item, i) => (
              <div key={i} className="bar-col">
                <div className="bar-tooltip">${item.valor.toLocaleString()}</div>
                <div
                  className={`bar ${i === ingresosMensuales.length - 1 ? 'bar-current' : ''}`}
                  style={{ height: `${(item.valor / maxIngreso) * 100}%` }}
                />
                <span className="bar-label">{item.mes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div className="admin-card">
          <h3 className="admin-card-title">Pipeline de Ventas</h3>
          <div className="pipeline-funnel">
            {[
              { label: 'Leads totales', value: leads.length, pct: 100, color: 'var(--gold)' },
              { label: 'Contactados', value: leads.filter(l => l.status === 'contactado').length, pct: 75, color: 'var(--gold-soft)' },
              { label: 'En negociacion', value: leads.filter(l => l.status === 'en negociacion').length, pct: 40, color: 'var(--gold-bright)' },
              { label: 'Convertidos', value: leads.filter(l => l.status === 'convertido').length, pct: 20, color: 'var(--green-text)' },
            ].map((step, i) => (
              <div key={i} className="funnel-step">
                <div className="funnel-bar-bg">
                  <div className="funnel-bar" style={{ width: `${step.pct}%`, background: step.color }} />
                </div>
                <div className="funnel-info">
                  <span className="funnel-label">{step.label}</span>
                  <span className="funnel-value">{step.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="dashboard-bottom">
        {/* Actividad reciente */}
        <div className="admin-card">
          <h3 className="admin-card-title">Actividad Reciente</h3>
          <div className="admin-table-wrap" style={{ border: 'none' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Accion</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {actividadReciente.map((a, i) => (
                  <tr key={i}>
                    <td className="name">{a.user}</td>
                    <td>{a.action}</td>
                    <td><span className={`badge ${statusClass(a.status)}`}>{a.status}</span></td>
                    <td>{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Proximas reservas */}
        <div className="admin-card">
          <h3 className="admin-card-title">Proximas Reservas</h3>
          <div className="upcoming-list">
            {reservas.filter(r => r.status !== 'cancelada').slice(0, 5).map(r => (
              <div key={r.id} className="upcoming-item">
                <div className="upcoming-time">
                  <span className="upcoming-date">{r.date.slice(5)}</span>
                  <span className="upcoming-hour">{r.time}</span>
                </div>
                <div className="upcoming-info">
                  <span className="upcoming-name">{r.clientName}</span>
                  <span className="upcoming-type">{r.type}</span>
                </div>
                <span className={`badge ${r.status === 'confirmada' ? 'badge-green' : 'badge-gold'}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
