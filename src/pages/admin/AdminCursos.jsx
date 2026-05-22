import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { cursos } from '../../data/mockData';
import { FiPlus, FiEdit2, FiChevronDown, FiChevronUp, FiUsers, FiClock, FiDollarSign, FiPlay } from 'react-icons/fi';
import './AdminPages.css';

const statusColors = { publicado: 'badge-green', proximamente: 'badge-blue', borrador: 'badge-gray' };

export default function AdminCursos() {
  const [expandedCourse, setExpandedCourse] = useState(1);
  const [expandedModule, setExpandedModule] = useState(null);

  const activeCourse = cursos.find(c => c.id === expandedCourse);

  return (
    <AdminLayout activeItem="cursos" title="Cursos" subtitle="Gestion de cursos y contenido">
      {/* Course selector tabs */}
      <div className="course-tabs">
        {cursos.map(c => (
          <button
            key={c.id}
            className={`course-tab ${expandedCourse === c.id ? 'active' : ''}`}
            onClick={() => { setExpandedCourse(c.id); setExpandedModule(null); }}
          >
            <span className="course-tab-title">{c.title}</span>
            <span className={`badge ${statusColors[c.status]}`}>{c.status}</span>
          </button>
        ))}
        <button className="course-tab course-tab-add">
          <FiPlus /> Nuevo Curso
        </button>
      </div>

      {activeCourse && (
        <>
          {/* Course header */}
          <div className="admin-card course-header-card">
            <div className="course-header-top">
              <div>
                <h2 className="course-title">{activeCourse.title}</h2>
                <p className="course-desc">{activeCourse.description}</p>
                <div className="course-meta">
                  <span>{activeCourse.modules.length} modulos</span>
                  <span>{activeCourse.modules.reduce((s, m) => s + m.lessons, 0)} clases</span>
                  <span>${activeCourse.price} USD</span>
                </div>
              </div>
              <button className="admin-btn admin-btn-outline admin-btn-sm">
                <FiEdit2 /> Editar Curso
              </button>
            </div>

            <div className="course-stats">
              <div className="course-stat">
                <FiUsers className="course-stat-icon" />
                <div>
                  <span className="course-stat-value">{activeCourse.enrolledCount}</span>
                  <span className="course-stat-label">Alumnos</span>
                </div>
              </div>
              <div className="course-stat">
                <FiPlay className="course-stat-icon" />
                <div>
                  <span className="course-stat-value">{activeCourse.completionRate}%</span>
                  <span className="course-stat-label">Completacion</span>
                </div>
              </div>
              <div className="course-stat">
                <FiDollarSign className="course-stat-icon" />
                <div>
                  <span className="course-stat-value">${activeCourse.revenue.toLocaleString()}</span>
                  <span className="course-stat-label">Ingresos</span>
                </div>
              </div>
              <div className="course-stat">
                <FiClock className="course-stat-icon" />
                <div>
                  <span className="course-stat-value">{activeCourse.modules.reduce((s, m) => s + m.lessons, 0)}</span>
                  <span className="course-stat-label">Clases</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="admin-section">
            <div className="admin-section-header">
              <h3 className="admin-section-title">Modulos del Curso</h3>
              <button className="admin-btn admin-btn-outline admin-btn-sm">
                <FiPlus /> Agregar Modulo
              </button>
            </div>

            <div className="modules-list">
              {activeCourse.modules.map((mod, idx) => (
                <div key={mod.id} className="module-item">
                  <div
                    className="module-header"
                    onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                  >
                    <div className="module-number">{idx + 1}</div>
                    <div className="module-info">
                      <span className="module-title">{mod.title}</span>
                      <span className="module-meta">{mod.lessons} clases · {mod.duration}</span>
                    </div>
                    <div className="module-progress-wrap">
                      <div className="progress-bar-wrap" style={{ width: '80px' }}>
                        <div className="progress-bar" style={{ width: `${mod.progress}%` }} />
                      </div>
                      <span className="module-progress-text">{mod.progress}%</span>
                    </div>
                    {expandedModule === mod.id ? <FiChevronUp /> : <FiChevronDown />}
                  </div>

                  {expandedModule === mod.id && (
                    <div className="module-lessons">
                      {Array.from({ length: mod.lessons }, (_, i) => (
                        <div key={i} className="lesson-item">
                          <FiPlay className="lesson-icon" />
                          <span className="lesson-title">Leccion {i + 1}</span>
                          <button className="admin-btn-icon" style={{ marginLeft: 'auto' }}><FiEdit2 /></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
