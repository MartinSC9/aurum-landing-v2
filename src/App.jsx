import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LinkInBio from './pages/LinkInBio';
import Reservas from './pages/Reservas';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminClientes from './pages/admin/AdminClientes';
import AdminCursos from './pages/admin/AdminCursos';
import AdminLeads from './pages/admin/AdminLeads';
import AdminReservas from './pages/admin/AdminReservas';
import AdminFinanzas from './pages/admin/AdminFinanzas';
import AdminBlog from './pages/admin/AdminBlog';
import AdminConfiguracion from './pages/admin/AdminConfiguracion';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/links" element={<LinkInBio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/clientes" element={<AdminClientes />} />
        <Route path="/admin/cursos" element={<AdminCursos />} />
        <Route path="/admin/leads" element={<AdminLeads />} />
        <Route path="/admin/reservas" element={<AdminReservas />} />
        <Route path="/admin/finanzas" element={<AdminFinanzas />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/configuracion" element={<AdminConfiguracion />} />
      </Routes>
    </BrowserRouter>
  );
}
