import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LinkInBio from './pages/LinkInBio';
import Reservas from './pages/Reservas';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/links" element={<LinkInBio />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}
