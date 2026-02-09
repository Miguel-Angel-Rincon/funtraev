import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layouts/publiclayout';

// Importar páginas
import Inicio from '../pages/Inicio';


export default function Routesweb() {
  return (
    <Routes>
      {/* ✅ Rutas públicas */}
      <Route path="/" element={<PublicLayout><Inicio /></PublicLayout>} />
      
    </Routes>
  );
}