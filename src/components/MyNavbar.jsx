import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

export default function MyNavbar() {
  const navigate = useNavigate();
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload(); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top border-bottom border-secondary border-opacity-25">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase fst-italic d-flex align-items-center gap-2">
          Fit<span className="text-primary">Ray</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/services">Programmes</Nav.Link>
            <Nav.Link as={Link} to="/progress">Défis</Nav.Link>
            <Nav.Link as={Link} to="/reserve">Réserver</Nav.Link>
            <Nav.Link as={Link} to="/about">Contact</Nav.Link>

            {user ? (
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="d-flex align-items-center gap-2 border-0"
                >
                  <div
                    className="bg-primary rounded-circle p-1 d-flex align-items-center justify-content-center"
                    style={{ width: 30, height: 30 }}
                  >
                    <User size={18} className="text-white" />
                  </div>
                  <span className="fw-bold">{user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" align="end">
                  <Dropdown.Item
                    onClick={handleLogout}
                    className="text-danger d-flex align-items-center gap-2"
                  >
                    <LogOut size={16} /> Se déconnecter
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-light"
                  className="rounded-pill px-4 btn-sm"
                >
                  Connexion
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="primary"
                  className="rounded-pill px-4 btn-sm fw-bold"
                >
                  Rejoindre
                </Button>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}