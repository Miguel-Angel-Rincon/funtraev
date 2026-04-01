import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../components/layouts/publiclayout';


import Sumideros from '../pages/Servicios/Sumideros';
import Vial from '../pages/Servicios/Vial';
import Residuos from '../pages/Servicios/Residuos';
import AreasVerdes from '../pages/Servicios/AreasVerdes';

export default function ServiciosRoutes() {
  return (
    <Routes>
      
      <Route path="/sumideros" element={<PublicLayout><Sumideros /></PublicLayout>} />
      <Route path="/vial" element={<PublicLayout><Vial /></PublicLayout>} />
      <Route path="/residuos" element={<PublicLayout><Residuos /></PublicLayout>} />
      <Route path="/areas-verdes" element={<PublicLayout><AreasVerdes /></PublicLayout>} />
    </Routes>
  );
}