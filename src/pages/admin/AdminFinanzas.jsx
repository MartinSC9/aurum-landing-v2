import AdminLayout from '../../components/AdminLayout';
import { transacciones, ingresosMensuales, cursos } from '../../data/mockData';
import { FiDollarSign, FiTrendingUp, FiDownload } from 'react-icons/fi';
import './AdminPages.css';

export default function AdminFinanzas() {
  const totalIngresos = transacciones.filter(t => t.status === 'pagado').reduce((s, t) => s + t.amount, 0);
  const ingresosMes = transacciones.filter(t => t.status === 'pagado' && t.date >= '2026-05-01').reduce((s, t) => s + t.amount, 0);
  const maxIngreso = Math.max(...ingresosMensuales.map(i => i.valor));

  // Revenue by service
  const byService = {};
  transacciones.filter(t => t.status === 'pagado').forEach(t => {
    byService[t.service] = (byService[t.service] || 0) + t.amount;
  });
  const serviceEntries = Object.entries(byService).sort((a, b) => b[1] - a[1]);
  const serviceColors = ['var(--gold)', 'var(--gold-bright)', '#60a5fa', '#a78bfa', 'var(--green-text)'];

  // Donut chart segments
  const totalForDonut = serviceEntries.reduce((s, [, v]) => s + v, 0);
  let cumulativePct = 0;
  const donutSegments = serviceEntries.map(([name, value], i) => {
    const pct = (value / totalForDonut) * 100;
    const offset = cumulativePct;
    cumulativePct += pct;
    return { name, value, pct, offset, color: serviceColors[i] || 'var(--ink-dim)' };
  });

  return (
    <AdminLayout activeItem="finanzas" title="Finanzas" subtitle="Pagos, ingresos y transacciones">
      {/* Stats */}
      <div className="admin-grid admin-grid-stats" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Ingresos Totales', value: `$${totalIngresos.toLocaleString()}`, change: '+18%' },
          { label: 'Ingresos Este Mes', value: `$${ingresosMes.toLocaleString()}`, change: '+32%' },
          { label: 'Promedio Mensual', value: `$${Math.round(totalIngresos / 12).toLocaleString()}`, change: '' },
          { label: 'Servicio Top', value: serviceEntries[0]?.[0] || '-', change: `$${serviceEntries[0]?.[1].toLocaleString() || 0}` },
        ].map((s, i) => (
          <div key={i} className="admin-card stat-card">
            <div className="stat-card-header">
              <span className="admin-card-title">{s.label}</span>
              <FiDollarSign className="stat-card-icon" />
            </div>
            <p className="admin-stat-value">{s.value}</p>
            {s.change && <span className="admin-stat-change up">{s.change}</span>}
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="dashboard-charts">
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

        <div className="admin-card">
          <h3 className="admin-card-title">Ingresos por Servicio</h3>
          <div className="donut-chart-wrap">
            <svg viewBox="0 0 36 36" className="donut-chart">
              {donutSegments.map((seg, i) => (
                <circle
                  key={i}
                  cx="18" cy="18" r="15.915"
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="3"
                  strokeDasharray={`${seg.pct} ${100 - seg.pct}`}
                  strokeDashoffset={`${-seg.offset}`}
                  className="donut-segment"
                />
              ))}
            </svg>
            <div className="donut-center">
              <span className="donut-total">${(totalForDonut / 1000).toFixed(1)}k</span>
              <span className="donut-label">Total</span>
            </div>
          </div>
          <div className="donut-legend">
            {donutSegments.map((seg, i) => (
              <div key={i} className="donut-legend-item">
                <span className="donut-legend-dot" style={{ background: seg.color }} />
                <span className="donut-legend-name">{seg.name}</span>
                <span className="donut-legend-value">${seg.value.toLocaleString()} ({Math.round(seg.pct)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="admin-card" style={{ marginTop: '20px' }}>
        <div className="admin-section-header" style={{ marginBottom: '12px' }}>
          <h3 className="admin-card-title" style={{ margin: 0 }}>Transacciones</h3>
          <button className="admin-btn admin-btn-outline admin-btn-sm">
            <FiDownload /> Exportar CSV
          </button>
        </div>
        <div className="admin-table-wrap" style={{ border: 'none' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Monto</th>
                <th>Metodo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map(t => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td className="name">{t.client}</td>
                  <td>{t.service}</td>
                  <td style={{ color: t.amount > 0 ? 'var(--gold)' : 'var(--ink-dim)', fontWeight: 600 }}>
                    {t.amount > 0 ? `$${t.amount}` : 'Gratis'}
                  </td>
                  <td>{t.method}</td>
                  <td>
                    <span className={`badge ${t.status === 'pagado' ? 'badge-green' : t.status === 'gratis' ? 'badge-gray' : 'badge-gold'}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
