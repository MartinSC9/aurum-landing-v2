import { useState } from 'react';
import { FaClock, FaDollarSign, FaVideo, FaWhatsapp, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import './Reservas.css';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const SLOTS = ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '21:00', '21:30', '22:00'];

function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

export default function Reservas() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const days = getCalendarDays(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const isAvailable = (day) => {
    if (!day) return false;
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;
    return date >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const handleSubmit = (e) => { e.preventDefault(); setStep(3); };

  return (
    <div className="reservas">
      {/* Header */}
      <div className="reservas-header">
        <a href="/" className="reservas-back"><FaArrowLeft size={12} /> <span>Volver</span></a>
        <a href="/" className="reservas-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3 L22 21 L2 21 Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <path d="M12 9 L17 19 L7 19 Z" fill="#c9a84c" />
          </svg>
          <span>AURUM</span>
        </a>
      </div>

      <div className="reservas-container">
        {step === 3 ? (
          <div className="reservas-confirmed">
            <div className="confirmed-check"><FaCheck size={32} /></div>
            <h2>Sesion <em>agendada</em></h2>
            <p>Tu sesion con Daniel fue agendada para el <strong>{selectedDay} de {MONTHS[currentMonth]}</strong> a las <strong>{selectedTime}hs</strong>.</p>
            <p className="confirmed-note">Vas a recibir un mensaje por WhatsApp para confirmar tu asistencia.</p>
            <div className="confirmed-details">
              <div><FaVideo /> Video llamada (Google Meet)</div>
              <div><FaClock /> 1 hora de duracion</div>
              <div><FaDollarSign /> $99 USD</div>
            </div>
            <a href="/" className="btn btn-primary" style={{ marginTop: 32 }}>Volver al inicio <span className="arrow">→</span></a>
          </div>
        ) : (
          <div className="reservas-grid">
            {/* Sidebar */}
            <div className="reservas-info">
              <div className="reservas-profile">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Daniel Segura" className="reservas-avatar" />
                <div>
                  <h2 style={{ fontSize: 24 }}>Mentoring 1 a 1</h2>
                  <p className="reservas-subtitle">con Daniel Segura</p>
                </div>
              </div>

              <div className="reservas-meta">
                <div><FaClock /> <span>1 hora</span></div>
                <div><FaVideo /> <span>Video llamada</span></div>
                <div><FaDollarSign /> <span>$99 USD</span></div>
              </div>

              <div className="reservas-description">
                <p>Video llamada con Daniel Segura para asesoria personalizada 1 a 1.</p>
                <p>Para la sesion debes estar en un lugar comodo, con buena senal y donde puedas comunicarte con tranquilidad.</p>
                <p className="reservas-warning">Si agendas y no asistes, no podras volver a agendar con nosotros.</p>
              </div>

              <div className="reservas-includes">
                <h4>Que incluye</h4>
                <ul>
                  <li><span className="inc-check"><FaCheck size={10} /></span> Analisis profundo de tu situacion</li>
                  <li><span className="inc-check"><FaCheck size={10} /></span> Plan de accion personalizado</li>
                  <li><span className="inc-check"><FaCheck size={10} /></span> Estrategia para tu personalidad</li>
                  <li><span className="inc-check"><FaCheck size={10} /></span> Seguimiento post-sesion por WhatsApp</li>
                </ul>
              </div>
            </div>

            {/* Main */}
            <div className="reservas-main">
              {step === 1 && (
                <>
                  <div className="reservas-main-head">
                    <span className="eyebrow">Paso 1</span>
                    <h3>Selecciona fecha y horario</h3>
                  </div>

                  <div className="calendar">
                    <div className="calendar-nav">
                      <button onClick={prevMonth}><FaArrowLeft size={12} /></button>
                      <span>{MONTHS[currentMonth]} {currentYear}</span>
                      <button onClick={nextMonth}><FaArrowRight size={12} /></button>
                    </div>
                    <div className="calendar-header">
                      {DAYS.map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="calendar-grid">
                      {days.map((day, i) => (
                        <button
                          key={i}
                          className={`calendar-day ${!day ? 'empty' : ''} ${!isAvailable(day) ? 'disabled' : ''} ${selectedDay === day ? 'selected' : ''}`}
                          disabled={!isAvailable(day)}
                          onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDay && (
                    <div className="time-slots">
                      <div className="eyebrow" style={{ marginBottom: 16 }}>
                        Horarios · {selectedDay} de {MONTHS[currentMonth]}
                      </div>
                      <div className="slots-grid">
                        {SLOTS.map(slot => (
                          <button
                            key={slot}
                            className={`slot ${selectedTime === slot ? 'slot-selected' : ''}`}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTime && (
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: 24 }} onClick={() => setStep(2)}>
                      Continuar <span className="arrow">→</span>
                    </button>
                  )}
                </>
              )}

              {step === 2 && (
                <form className="reservas-form" onSubmit={handleSubmit}>
                  <div className="reservas-main-head">
                    <span className="eyebrow">Paso 2</span>
                    <h3>Completa tus datos</h3>
                  </div>

                  <div className="form-selected">
                    <span>{selectedDay} de {MONTHS[currentMonth]} — {selectedTime}hs</span>
                    <button type="button" onClick={() => setStep(1)}>Cambiar</button>
                  </div>

                  <div className="form-group">
                    <label>Nombre completo</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp (con codigo de pais)</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+54 9 11 1234-5678" />
                  </div>
                  <div className="form-group">
                    <label>Contanos brevemente tu situacion</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Que te gustaria trabajar en la sesion?" />
                  </div>

                  <div className="form-total">
                    <span>Total</span>
                    <strong>$99 USD</strong>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Confirmar sesion — $99 USD
                  </button>

                  <p className="form-note"><FaWhatsapp /> Recibiras confirmacion por WhatsApp</p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
