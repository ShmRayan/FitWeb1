import React, { useState } from 'react';
import { Container, Card, Form, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Loader2, CheckCircle2 } from 'lucide-react';

const ConfettiPiece = ({ delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
    animate={{ scale: [0, 1, 0.5], opacity: [1, 1, 0], x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, rotate: Math.random() * 360 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="position-absolute"
    style={{ width: '8px', height: '8px', backgroundColor: ['#2563eb', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)], borderRadius: '2px', zIndex: 10 }}
  />
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      if (email === "rayan@uottawa.ca" && password === "123") {
          
          const userData = { name: "Rayan", email: email };
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');

          setIsLoading(false);
          setIsSuccess(true);
          setShowConfetti(true);
          setTimeout(() => {
            navigate('/');
            window.location.reload(); 
          }, 2000);
      } else {
          setIsLoading(false);
          setError("Invalid email or password. Use rayan@uottawa.ca / 123");
      }
    }, 1500);
  };

  return (
    <div className="min-vh-100 py-5 d-flex align-items-center" style={{ backgroundColor: '#f3f4f6' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              
              <div className="text-center mb-4">
                 <h1 className="fw-black text-dark display-5" style={{ letterSpacing: '-2px' }}>
                    LOG <span className="text-gradient">IN</span>
                 </h1>
                 <p className="text-secondary fw-medium">Welcome back to the FitRay family!</p>
              </div>

              <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '2.5rem', backgroundColor: 'white' }}>
                <Card.Body className="p-0">
                  {error && <Alert variant="danger" className="rounded-4 border-0 small fw-bold text-center">{error}</Alert>}

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                        <Mail size={14}/> Email Address
                      </Form.Label>
                      <Form.Control 
                        type="email"
                        className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                        <Lock size={14}/> Password
                      </Form.Label>
                      <Form.Control 
                        type="password" 
                        className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="position-relative text-center mt-5">
                      <AnimatePresence>
                        {showConfetti && (
                          <div className="position-absolute top-50 start-50 translate-middle">
                            {[...Array(20)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} />)}
                          </div>
                        )}
                      </AnimatePresence>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading || isSuccess}
                        className={`btn w-100 py-3 rounded-pill fw-black shadow-lg border-0 d-flex align-items-center justify-content-center gap-2 transition-all ${
                          isSuccess ? 'bg-success text-white' : 'btn-primary text-white'
                        }`}
                        style={{ height: '60px', fontSize: '1.1rem' }}
                      >
                        {isLoading ? (
                           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                             <Loader2 size={24}/>
                           </motion.div>
                        ) : isSuccess ? (
                           <><CheckCircle2 size={24}/> ACCESS GRANTED</>
                        ) : (
                           "SIGN IN"
                        )}
                      </motion.button>
                    </div>
                  </Form>
                  
                  <div className="text-center mt-4">
                    <p className="text-secondary small fw-bold">
                        Don't have an account? <Link to="/register" className="text-primary text-decoration-none">Join Free</Link>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}