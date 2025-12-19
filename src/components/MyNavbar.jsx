import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, LogOut, Dumbbell, ChevronDown, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload(); 
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <Navbar
      variant="dark" expand="lg" className="py-3 sticky-top"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLogoClick} className="d-flex align-items-center gap-2 me-4">
          <div className="bg-primary text-white rounded p-1 d-flex align-items-center justify-content-center shadow-lg" style={{ width: 40, height: 40 }}>
            <Dumbbell size={26} style={{ transform: 'rotate(-45deg)' }} />
          </div>
          <div className="fw-black text-uppercase lh-1" style={{ fontSize: '1.6rem', letterSpacing: '-1.5px' }}>
            <span className="text-white">Fit</span><span className="text-primary" style={{ textShadow: '0 0 20px rgba(37, 99, 235, 0.6)' }}>Ray</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center gap-4 fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>
            <Nav.Link as={Link} to="/" className="nav-hover-effect text-white opacity-75">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-hover-effect text-white opacity-75">Programs</Nav.Link>
            <Nav.Link as={Link} to="/progress" className="nav-hover-effect text-white opacity-75">Challenges</Nav.Link>
            <Nav.Link as={Link} to="/reserve" className="nav-hover-effect text-white opacity-75">Book Now</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-hover-effect text-white opacity-75">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle as="div" className="d-flex align-items-center gap-3 bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-10 shadow-sm" style={{ cursor: 'pointer' }}>
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-black shadow" style={{ width: 35, height: 35, fontSize: '1rem' }}>
                    {user.name.charAt(0)}
                  </div>
                  <div className="text-start d-none d-sm-block me-1">
                    <div className="opacity-50 fw-bold" style={{ fontSize: '0.6rem', marginBottom: '-3px', letterSpacing: '1px' }}>MEMBER</div>
                    <div className="fw-black text-white small">{user.name}</div>
                  </div>
                  <ChevronDown size={14} className="text-primary" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark border border-white border-opacity-10 shadow-lg rounded-4 mt-2 py-2 overflow-hidden" style={{ minWidth: '200px' }}>
                  <div className="px-4 py-2 mb-2 border-bottom border-white border-opacity-10">
                    <div className="text-white-50 small fw-bold uppercase">Status</div>
                    <div className="text-success small fw-black d-flex align-items-center gap-1">
                       <div style={{width: 8, height: 8, backgroundColor: '#22c55e', borderRadius: '50%'}}></div> Pro Athlete
                    </div>
                  </div>
                  <Dropdown.Item as={Link} to="/progress" className="text-white px-4 py-2 small fw-bold d-flex align-items-center gap-2">
                    <Trophy size={16} className="text-warning"/> My Progress
                  </Dropdown.Item>
                  <Dropdown.Divider className="bg-white opacity-10" />
                  <Dropdown.Item onClick={handleLogout} className="text-danger d-flex align-items-center gap-2 px-4 py-2 fw-black small">
                    <LogOut size={16} /> LOG OUT
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <div className="d-flex gap-4 align-items-center">
                <Link to="/login" className="text-white text-decoration-none fw-bold small nav-hover-effect opacity-75">LOG IN</Link>
                <Button as={Link} to="/register" className="btn-primary rounded-pill px-4 py-2 fw-black border-0 shadow-lg text-uppercase" style={{ fontSize: '0.85rem' }}>
                    JOIN FREE
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .nav-hover-effect { transition: all 0.3s ease; }
        .nav-hover-effect:hover { opacity: 1 !important; color: #2563eb !important; transform: translateY(-1px); }
        .dropdown-item:hover { background-color: rgba(37, 99, 235, 0.1) !important; color: #2563eb !important; }
      `}</style>
    </Navbar>
  );
}