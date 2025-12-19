import React, { useState } from 'react';
import { Container, Card, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Loader2, CheckCircle2 } from 'lucide-react';

const ConfettiPiece = ({ delay }) => (
    <motion.div
      initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
      animate={{ scale: [0, 1, 0.5], opacity: [1, 1, 0], x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300, rotate: Math.random() * 360 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="position-absolute"
      style={{ width: '8px', height: '8px', backgroundColor: ['#2563eb', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)], borderRadius: '2px', zIndex: 10 }}
    />
);

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setShowConfetti(true);
      setTimeout(() => navigate('/login'), 2500);
    }, 1500);
  };

  return (
    <div className="min-vh-100 py-5 d-flex align-items-center" style={{ backgroundColor: '#f3f4f6' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              
              <div className="text-center mb-4">
                 <h1 className="fw-black text-dark display-5" style={{ letterSpacing: '-2px' }}>
                    CREATE <span className="text-gradient">ACCOUNT</span>
                 </h1>
                 <p className="text-secondary fw-medium">Start your fitness transformation today!</p>
              </div>

              <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '2.5rem', backgroundColor: 'white' }}>
                <Card.Body className="p-0">
                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                        <User size={14}/> Full Name
                      </Form.Label>
                      <Form.Control 
                        type="text" 
                        className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                        <Mail size={14}/> Email Address
                      </Form.Label>
                      <Form.Control 
                        type="email" 
                        className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold"
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
                        required
                      />
                    </Form.Group>

                    <div className="position-relative text-center mt-5">
                      <AnimatePresence>
                        {showConfetti && (
                          <div className="position-absolute top-50 start-50 translate-middle">
                            {[...Array(30)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} />)}
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
                        style={{ height: '65px', fontSize: '1.2rem' }}
                      >
                        {isLoading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Loader2/></motion.div> : 
                         isSuccess ? <><CheckCircle2/> ACCOUNT CREATED</> : "START YOUR JOURNEY"}
                      </motion.button>
                    </div>
                  </Form>
                  
                  <div className="text-center mt-4">
                    <p className="text-secondary small fw-bold">
                        Already have an account? <Link to="/login" className="text-primary text-decoration-none">Sign In</Link>
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