import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const ConfettiPiece = ({ delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
    animate={{ 
      scale: [0, 1, 0.5], 
      opacity: [1, 1, 0],
      x: (Math.random() - 0.5) * 400, 
      y: (Math.random() - 0.5) * 400,
      rotate: Math.random() * 360
    }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="position-absolute"
    style={{
      width: '10px',
      height: '10px',
      backgroundColor: ['#2563eb', '#06b6d4', '#fbbf24', '#22c55e'][Math.floor(Math.random() * 4)],
      borderRadius: '2px',
      zIndex: 10
    }}
  />
);

export default function Reserve() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mode, setMode] = useState('solo');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', 
    service: '', expert: '', date: '', friends: ''
  });

  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (location.state?.selectedService) {
      const map = { 'weight_loss': 'entrainement', 'muscle_gain': 'support', 'hybrid': 'nutrition' };
      setFormData(prev => ({ ...prev, service: map[location.state.selectedService] || 'entrainement' }));
    }
  }, [location.state]);

  const expertsData = {
    entrainement: { label: "Personalized Workout", price: 10, experts: ["Lucie Martin", "Maxime Dubois"] },
    support: { label: "Coach Support", price: 15, experts: ["Marie Dupont", "Antoine Rousseau"] },
    nutrition: { label: "Nutrition Advice", price: 20, experts: ["Émilie Lefebvre", "Pierre Lambert"] }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
      setShowConfetti(true);
      toast.success("Booking Confirmed! Check your email.");
      setTimeout(() => {
        navigate('/confirmation');
      }, 2500);
    }, 1500);
  };

  const currentPrice = formData.service ? expertsData[formData.service].price : 0;

  return (
    <div className="min-vh-100 py-5 d-flex align-items-center" style={{backgroundColor: '#f3f4f6'}}>
      <Container>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5 text-dark">Book a Session</h1>
                <p className="text-secondary">Start your journey with us today.</p>
            </div>

            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                        <div className="d-flex border-bottom">
                            <button 
                                type="button"
                                className={`flex-fill btn rounded-0 py-3 fw-bold ${mode === 'solo' ? 'btn-primary' : 'btn-light text-secondary'}`}
                                onClick={() => setMode('solo')}
                            >
                                Solo Session
                            </button>
                            <button 
                                type="button"
                                className={`flex-fill btn rounded-0 py-3 fw-bold ${mode === 'friends' ? 'btn-primary' : 'btn-light text-secondary'}`}
                                onClick={() => setMode('friends')}
                            >
                                With Friends
                            </button>
                        </div>

                        <Card.Body className="p-5 bg-white">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label className="small text-secondary fw-bold">FIRST NAME</Form.Label>
                                        <Form.Control type="text" name="firstName" className="bg-light border-0 py-3" required onChange={handleChange}/>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label className="small text-secondary fw-bold">LAST NAME</Form.Label>
                                        <Form.Control type="text" name="lastName" className="bg-light border-0 py-3" required onChange={handleChange}/>
                                    </Col>
                                </Row>

                                <div className="mb-3">
                                    <Form.Label className="small text-secondary fw-bold">EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" name="email" className="bg-light border-0 py-3" required onChange={handleChange}/>
                                </div>

                                {mode === 'friends' && (
                                    <div className="mb-3">
                                        <Form.Label className="small text-secondary fw-bold">FRIENDS' EMAILS</Form.Label>
                                        <Form.Control type="text" name="friends" className="bg-light border-0 py-3" placeholder="email1@test.com, email2@test.com" onChange={handleChange}/>
                                    </div>
                                )}

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Label className="small text-secondary fw-bold">SERVICE</Form.Label>
                                        <Form.Select name="service" value={formData.service} onChange={handleChange} className="bg-light border-0 py-3" required>
                                            <option value="">Select Service</option>
                                            <option value="entrainement">Workout ($10)</option>
                                            <option value="support">Coach ($15)</option>
                                            <option value="nutrition">Nutrition ($20)</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="small text-secondary fw-bold">EXPERT</Form.Label>
                                        <Form.Select 
                                            name="expert" 
                                            value={formData.expert}
                                            onChange={handleChange}
                                            className="bg-light border-0 py-3" 
                                            disabled={!formData.service} 
                                            required
                                        >
                                            <option value="">Any Expert</option>
                                            {formData.service && expertsData[formData.service].experts.map(exp => (
                                                <option key={exp} value={exp}>{exp}</option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <div className="mb-4">
                                    <Form.Label className="small text-secondary fw-bold">DATE</Form.Label>
                                    <Form.Control type="date" name="date" className="bg-light border-0 py-3" required onChange={handleChange} />
                                </div>

                                <div className="position-relative text-center">
                                    <AnimatePresence>
                                        {showConfetti && (
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                {[...Array(30)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} />)}
                                            </div>
                                        )}
                                    </AnimatePresence>

                                    <motion.button 
                                        type="submit"
                                        disabled={isBooking || isSuccess}
                                        whileHover={{ scale: isSuccess ? 1 : 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`btn w-100 rounded-pill py-3 fw-black shadow-lg border-0 transition-all ${
                                            isSuccess ? 'bg-success text-white' : 'btn-primary text-white'
                                        }`}
                                        style={{ fontSize: '1.1rem', height: '60px' }}
                                    >
                                        {isBooking ? (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                                <Loader2 size={24} />
                                            </motion.div>
                                        ) : isSuccess ? (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="d-flex align-items-center justify-content-center gap-2">
                                                <CheckCircle2 size={24} /> BOOKED SUCCESSFULLY!
                                            </motion.div>
                                        ) : (
                                            `CONFIRM BOOKING ${currentPrice > 0 ? `• $${currentPrice}` : ''}`
                                        )}
                                    </motion.button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </motion.div>
      </Container>
    </div>
  );
}