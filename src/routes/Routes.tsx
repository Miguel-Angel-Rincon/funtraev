import { BrowserRouter as Router, Routes,  } from 'react-router-dom'; //Route
import Navbar from '../components/layouts/navbar';
// import Home from '../pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      
      <Navbar />
      
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;