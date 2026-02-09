import { BrowserRouter as Router } from 'react-router-dom'; //Route
import Routesweb from './routes/Routesweb'; // Asegúrate de que esta ruta sea correcta
// import Home from '../pages/Home';


function App() {
  return (
    <Router>
      
      <Routesweb />
    
    </Router>
  );
}

export default App;