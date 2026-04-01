import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layouts/publiclayout';
import ServiciosRoutes from './ServiciosRoutes';

import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';
import Contactenos from '../pages/Contactenos';

export default function Routesweb() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Inicio /></PublicLayout>} />
      <Route path="/nosotros" element={<PublicLayout><Nosotros /></PublicLayout>} />
      <Route path="/contactenos" element={<PublicLayout><Contactenos /></PublicLayout>} />
      <Route path="/servicios/*" element={<ServiciosRoutes />} />
    </Routes>
  );
}
