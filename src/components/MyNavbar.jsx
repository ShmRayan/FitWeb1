import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, LogOut, Dumbbell } from 'lucide-react';

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
      window.scrollTo(0, 0);
    }
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="py-3 sticky-top"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleLogoClick}
          className="d-flex align-items-center gap-2 me-4"
        >
          <div
            className="bg-primary text-white rounded p-1 d-flex align-items-center justify-content-center shadow-lg"
            style={{ width: 40, height: 40 }}
          >
            <Dumbbell size={26} style={{ transform: 'rotate(-45deg)' }} />
          </div>

          <div
            className="fw-black text-uppercase lh-1"
            style={{ fontSize: '1.6rem', letterSpacing: '-1.5px' }}
          >
            <span className="text-white">Fit</span>
            <span className="text-primary" style={{ textShadow: '0 0 20px rgba(37, 99, 235, 0.6)' }}>
              Ray
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mx-auto align-items-center gap-4 fw-bold text-uppercase small"
            style={{ letterSpacing: '1px' }}
          >
            <Nav.Link as={Link} to="/" className="nav-hover-effect text-white opacity-75">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-hover-effect text-white opacity-75">Programs</Nav.Link>
            <Nav.Link as={Link} to="/progress" className="nav-hover-effect text-white opacity-75">Challenges</Nav.Link>
            <Nav.Link as={Link} to="/reserve" className="nav-hover-effect text-white opacity-75">Book Now</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-hover-effect text-white opacity-75">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent"
                  className="d-flex align-items-center gap-2 border border-secondary border-opacity-50 rounded-pill px-3 py-2 text-white shadow-sm"
                >
                  <div
                    className="bg-primary rounded-circle p-1 d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: 32, height: 32 }}
                  >
                    <User size={18} />
                  </div>
                  <span className="fw-bold small">{user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  align="end"
                  className="bg-dark border border-secondary border-opacity-25 shadow-lg rounded-4 mt-2 py-2"
                >
                  <Dropdown.Item
                    onClick={handleLogout}
                    className="text-danger d-flex align-items-center gap-2 px-4 py-2 fw-bold"
                  >
                    <LogOut size={18} /> Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <div className="d-flex gap-4 align-items-center">
                <Link
                  to="/login"
                  className="text-white text-decoration-none fw-bold small nav-hover-effect opacity-75"
                >
                  LOG IN
                </Link>
                <Button
                  as={Link}
                  to="/register"
                  className="btn-primary rounded-pill px-4 py-2 fw-black border-0 shadow-lg text-uppercase"
                  style={{ fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)' }}
                >
                  JOIN FREE
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>{`
        .nav-hover-effect {
          transition: all 0.3s ease;
        }
        .nav-hover-effect:hover {
          opacity: 1 !important;
          color: #2563eb !important;
          transform: translateY(-1px);
        }
      `}</style>
    </Navbar>
  );
}