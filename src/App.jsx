import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import About from './pages/About';
import Progress from './pages/Progress';
import Reserve from './pages/Reserve';
import Confirmation from './pages/Confirmation';
import Register from './pages/Register'; 

const AppContent = () => {
  const location = useLocation();
  const noFooterRoutes = ['/login', '/register'];

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Toaster 
        position="top-center" 
        toastOptions={{ duration: 3000, style: { background: '#333', color: '#fff' } }} 
      />
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

      {!noFooterRoutes.includes(location.pathname) && (
        <footer className="bg-black text-white text-center py-4 border-top border-secondary border-opacity-25">
          <p className="mb-0">&copy; 2025 FitRay</p>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;