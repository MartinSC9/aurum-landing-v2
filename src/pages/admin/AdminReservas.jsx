import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { reservas } from '../../data/mockData';
import { FiPlus, FiCalendar, FiClock, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './AdminPages.css';

const typeColors = {
  'Mentoria 1a1': 'badge-gold',
  'Sesion Diagnostico': 'badge-blue',
  'Salida de Campo': 'badge-purple',
  'Seguimiento': 'badge-green',
};

const statusColors = {
  confirmada: 'badge-green',
  pendiente: 'badge-gold',
  cancelada: 'badge-red',
};

export default function AdminReservas() {
  const [currentMonth, setCurrentMonth] = useState(4); // May (0-indexed)
  const [selectedDate, setSelectedDate] = useState('2026-05-23');
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

  const year = 2026;
  const firstDay = new Date(year, currentMonth, 1).getDay();
  const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const dayEvents = (day) => {
    const dateStr = `${year}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return reservas.filter(r => r.date === dateStr);
  };

  const selectedReservas = reservas.filter(r => r.date === selectedDate).sort((a, b) => a.time.localeCompare(b.time));

  const upcoming = reservas
    .filter(r => r.status !== 'cancelada' && r.date >= '2026-05-22')
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
    .slice(0, 7);

  return (
    <AdminLayout activeItem="reservas" title="Reservas" subtitle="Calendario de sesiones y citas">
      {/* Stats */}
      <div className="admin-grid admin-grid-stats" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Total Reservas', value: reservas.length },
          { label: 'Confirmadas', value: reservas.filter(r => r.status === 'confirmada').length },
          { label: 'Pendientes', value: reservas.filter(r => r.status === 'pendiente').length },
          { label: 'Esta Semana', value: reservas.filter(r => r.date >= '2026-05-22' && r.date <= '2026-05-28').length },
        ].map((s, i) => (
          <div key={i} className="admin-card stat-card stat-card-compact">
            <span className="admin-card-title">{s.label}</span>
            <p className="admin-stat-value" style={{ fontSize: '1.4rem' }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="reservas-layout">
        {/* Calendar */}
        <div className="admin-card calendar-card">
          <div className="calendar-header">
            <button className="admin-btn-icon" onClick={() => setCurrentMonth(m => Math.max(0, m - 1))}>
              <FiChevronLeft />
            </button>
            <span className="calendar-month">{months[currentMonth]} {year}</span>
            <button className="admin-btn-icon" onClick={() => setCurrentMonth(m => Math.min(11, m + 1))}>
              <FiChevronRight />
            </button>
          </div>

          <div className="calendar-grid">
            {days.map(d => (
              <div key={d} className="calendar-day-name">{d}</div>
            ))}
            {Array.from({ length: startOffset }, (_, i) => (
              <div key={`e-${i}`} className="calendar-day empty" />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const events = dayEvents(day);
              const isSelected = dateStr === selectedDate;
              const isToday = dateStr === '2026-05-22';
              return (
                <div
                  key={day}
                  className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${events.length > 0 ? 'has-events' : ''}`}
                  onClick={() => setSelectedDate(dateStr)}
                >
                  <span className="calendar-day-num">{day}</span>
                  {events.length > 0 && (
                    <div className="calendar-dots">
                      {events.slice(0, 3).map((_, idx) => (
                        <span key={idx} className="calendar-dot" />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected date events */}
        <div className="admin-card">
          <div className="admin-section-header" style={{ marginBottom: '12px' }}>
            <h3 className="admin-section-title">
              <FiCalendar style={{ marginRight: '8px' }} />
              {selectedDate}
            </h3>
            <button className="admin-btn admin-btn-gold admin-btn-sm">
              <FiPlus /> Agendar
            </button>
          </div>

          {selectedReservas.length === 0 ? (
            <div className="admin-empty" style={{ padding: '30px' }}>
              <FiCalendar className="admin-empty-icon" />
              <p>No hay reservas para esta fecha</p>
            </div>
          ) : (
            <div className="reservas-list">
              {selectedReservas.map(r => (
                <div key={r.id} className={`reserva-item ${r.status === 'cancelada' ? 'cancelled' : ''}`}>
                  <div className="reserva-time">
                    <FiClock /> {r.time}
                  </div>
                  <div className="reserva-info">
                    <div className="reserva-client">
                      <FiUser style={{ fontSize: '14px' }} /> {r.clientName}
                    </div>
                    <div className="reserva-meta">
                      <span className={`badge ${typeColors[r.type] || 'badge-gray'}`}>{r.type}</span>
                      <span className={`badge ${statusColors[r.status]}`}>{r.status}</span>
                    </div>
                    {r.notes && <div className="reserva-notes">{r.notes}</div>}
                    <div className="reserva-coach">Coach: {r.coach}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upcoming */}
      <div className="admin-card" style={{ marginTop: '20px' }}>
        <h3 className="admin-card-title">Proximos 7 dias</h3>
        <div className="admin-table-wrap" style={{ border: 'none' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Cliente</th>
                <th>Tipo</th>
                <th>Coach</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.map(r => (
                <tr key={r.id}>
                  <td>{r.date.slice(5)}</td>
                  <td>{r.time}</td>
                  <td className="name">{r.clientName}</td>
                  <td><span className={`badge ${typeColors[r.type] || 'badge-gray'}`}>{r.type}</span></td>
                  <td>{r.coach}</td>
                  <td><span className={`badge ${statusColors[r.status]}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
