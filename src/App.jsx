import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import About from './pages/About';
import Progress from './pages/Progress';
import Reserve from './pages/Reserve';
import Confirmation from './pages/Confirmation';

const Register = () => <div className="text-white pt-5 mt-5 text-center"><h1>Inscription (En construction)</h1></div>;

function App() {
  return (
    <Router>
      <div className="bg-dark min-vh-100 d-flex flex-column">
        <MyNavbar />
        
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        <footer className="bg-black text-white text-center py-4 border-top border-secondary border-opacity-25">
            <p className="mb-0">&copy; 2025 FitRay. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;