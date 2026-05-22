import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { blogPosts } from '../../data/mockData';
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';
import './AdminPages.css';

const categoryColors = {
  Seduccion: 'badge-gold',
  Mentalidad: 'badge-purple',
  Imagen: 'badge-blue',
  Apps: 'badge-green',
  Casos: 'badge-green',
};

const statusColors = {
  publicado: 'badge-green',
  borrador: 'badge-gray',
  programado: 'badge-blue',
};

export default function AdminBlog() {
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('todos');

  const categories = [...new Set(blogPosts.map(p => p.category))];

  const filtered = blogPosts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === 'todos' || p.category === filterCat;
    return matchSearch && matchCat;
  });

  return (
    <AdminLayout activeItem="blog" title="Blog" subtitle="Gestion de articulos y contenido">
      {/* Stats */}
      <div className="admin-grid admin-grid-stats" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Total Articulos', value: blogPosts.length },
          { label: 'Publicados', value: blogPosts.filter(p => p.status === 'publicado').length },
          { label: 'Vistas Totales', value: blogPosts.reduce((s, p) => s + p.views, 0).toLocaleString() },
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
          <input placeholder="Buscar articulo..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="admin-select" value={filterCat} onChange={e => setFilterCat(e.target.value)}>
          <option value="todos">Todas las categorias</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button className="admin-btn admin-btn-gold">
          <FiPlus /> Nuevo Articulo
        </button>
      </div>

      {/* Table */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Vistas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td className="name" style={{ whiteSpace: 'normal', maxWidth: '300px' }}>{p.title}</td>
                <td><span className={`badge ${categoryColors[p.category] || 'badge-gray'}`}>{p.category}</span></td>
                <td><span className={`badge ${statusColors[p.status]}`}>{p.status}</span></td>
                <td>{p.date || '-'}</td>
                <td>{p.views > 0 ? p.views.toLocaleString() : '-'}</td>
                <td>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="admin-btn-icon">
                      {p.status === 'publicado' ? <FiEye /> : <FiEyeOff />}
                    </button>
                    <button className="admin-btn-icon"><FiEdit2 /></button>
                    <button className="admin-btn-icon"><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
