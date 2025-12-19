import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function About() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setShowConfetti(true);
      toast.success("Message sent successfully! We'll get back to you.");
      
      setTimeout(() => {
        setShowConfetti(false);
        setIsSent(false); 
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-vh-100 py-5 d-flex align-items-center" style={{ backgroundColor: '#f3f4f6' }}>
      <Container className="py-5">
        <Row className="align-items-center mb-5">
            <Col lg={5} className="mb-5 mb-lg-0">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                    <h1 className="display-3 fw-black text-dark mb-4" style={{ letterSpacing: '-2px' }}>
                        GET IN <span className="text-gradient">TOUCH</span>
                    </h1>
                    <p className="lead text-secondary mb-5 fw-medium">
                        Have questions about our programs? Need technical support? 
                        Our team is here to help you achieve your fitness goals.
                    </p>
                    
                    <div className="d-flex flex-column gap-4">
                        <ContactItem icon={<Phone size={24}/>} title="Phone" value="+1 613 888 8888" />
                        <ContactItem icon={<Mail size={24}/>} title="Email" value="contact@FitRay.com" />
                        <ContactItem icon={<MapPin size={24}/>} title="Location" value="199 Fitness Street, Ottawa, ON" />
                    </div>
                </motion.div>
            </Col>

            <Col lg={7}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '2.5rem', backgroundColor: 'white' }}>
                        <Card.Body>
                            <div className="mb-5">
                                <h3 className="fw-black text-dark mb-2" style={{ fontSize: '1.8rem' }}>Send us a message</h3>
                                <div className="text-gradient" style={{ height: '4px', width: '60px', borderRadius: '10px' }}></div>
                            </div>
                            
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                                                <div style={{width: '10px', height: '2px', backgroundColor: 'currentColor'}}></div>
                                                Full Name
                                            </Form.Label>
                                            <Form.Control type="text" className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                                                <div style={{width: '10px', height: '2px', backgroundColor: 'currentColor'}}></div>
                                                Email Address
                                            </Form.Label>
                                            <Form.Control type="email" className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-bold" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Group className="mb-5">
                                    <Form.Label className="fw-black text-primary small text-uppercase mb-2 d-flex align-items-center gap-2" style={{ letterSpacing: '2px' }}>
                                        <div style={{width: '10px', height: '2px', backgroundColor: 'currentColor'}}></div>
                                        Message
                                    </Form.Label>
                                    <Form.Control as="textarea" rows={4} className="py-3 px-4 border-0 rounded-4 shadow-sm bg-light fw-medium" style={{ resize: 'none' }} placeholder="How can we help you?" required />
                                </Form.Group>

                                <div className="position-relative">
                                    <AnimatePresence>
                                        {showConfetti && (
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                {[...Array(30)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} />)}
                                            </div>
                                        )}
                                    </AnimatePresence>

                                    <motion.button 
                                        type="submit"
                                        disabled={isSending || isSent}
                                        whileHover={{ scale: isSent ? 1 : 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`btn w-100 py-3 rounded-pill fw-black shadow-lg border-0 transition-all d-flex align-items-center justify-content-center gap-3 ${
                                            isSent ? 'bg-success text-white' : 'btn-primary text-white'
                                        }`}
                                        style={{ fontSize: '1.1rem', height: '65px' }}
                                    >
                                        {isSending ? (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                                <Loader2 size={24} />
                                            </motion.div>
                                        ) : isSent ? (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="d-flex align-items-center gap-2">
                                                <CheckCircle2 size={24} /> MESSAGE SENT!
                                            </motion.div>
                                        ) : (
                                            <><Send size={20}/> SEND MESSAGE</>
                                        )}
                                    </motion.button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </motion.div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

function ContactItem({ icon, title, value }) {
    return (
        <div className="d-flex align-items-center gap-4">
            <div className="bg-white p-3 rounded-circle text-primary shadow-sm border border-light d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                {icon}
            </div>
            <div>
                <div className="fw-black text-primary small text-uppercase mb-1" style={{ letterSpacing: '1px' }}>{title}</div>
                <div className="fs-5 fw-black text-dark">{value}</div>
            </div>
        </div>
    );
}