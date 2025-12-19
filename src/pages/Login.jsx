import { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        alert("Connexion réussie ! Bienvenue " + data.user.name);
        navigate('/'); 
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="bg-black text-white border-secondary border-opacity-25 shadow-lg p-4" style={{ width: '400px' }}>
          <Card.Body>
            <h2 className="text-center mb-4 fw-bold">Connexion</h2>
            
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <div className="input-group">
                    <span className="input-group-text bg-dark text-white border-secondary"><User size={18}/></span>
                    <Form.Control 
                        type="email" 
                        placeholder="rayan@uottawa.ca"
                        className="bg-dark text-white border-secondary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mot de passe</Form.Label>
                <div className="input-group">
                    <span className="input-group-text bg-dark text-white border-secondary"><Lock size={18}/></span>
                    <Form.Control 
                        type="password" 
                        placeholder="123"
                        className="bg-dark text-white border-secondary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 fw-bold rounded-pill">
                SE CONNECTER
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
}