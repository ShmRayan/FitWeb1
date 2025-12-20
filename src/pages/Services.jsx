import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const [plans, setPlans] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./services.json') 
      .then(res => res.json())
      .then(data => {
        setPlans(data);     
        setLoading(false);  
      })
      .catch(err => {
        console.error("Erreur chargement services:", err);
        setLoading(false);
      });
  }, []);

  const handleChoosePlan = (planId) => {
    navigate('/reserve', { state: { selectedService: planId } });
  };

  return (
    <div className="min-vh-100 py-5" style={{backgroundColor: '#f3f4f6'}}>
      <Container className="mt-4">
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">Our Programs</h1>
            <p className="lead text-secondary">Simple pricing. No hidden fees.</p>
        </div>

        {loading ? (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
            </div>
        ) : (
            <Row className="justify-content-center">
                {plans.map((plan, index) => (
                    <Col key={plan.id} md={4} className="mb-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-100 border-0 shadow-lg hover-card overflow-hidden" style={{borderRadius: '20px'}}>
                                <div className={`bg-${plan.color} py-2`}></div>
                                <Card.Body className="d-flex flex-column p-5">
                                    <div className="text-center mb-4">
                                       <Badge className={`bg-${plan.color} bg-opacity-10 text-${plan.color === 'dark' ? 'dark' : plan.color} mb-3 px-3 py-2 rounded-pill text-uppercase`} style={{ border: 'none' }}>{plan.level}</Badge>
                                        
                                        <Card.Title className="h2 fw-bold text-dark">{plan.title}</Card.Title>
                                        
                                        <h3 className="text-secondary fw-normal">{plan.price}</h3>
                                        <small className="text-muted">{plan.duration}</small>
                                    </div>
                                    
                                    <div className="flex-grow-1 my-4">
                                        {plan.features.map((feat, i) => (
                                            <div key={i} className="mb-3 d-flex align-items-center gap-3">
                                                <CheckCircle size={20} className={`text-${plan.color}`}/> 
                                                <span className="text-dark fw-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button 
                                        onClick={() => handleChoosePlan(plan.id)}
                                        variant={plan.color} 
                                        className="w-100 rounded-pill py-3 fw-bold shadow-sm"
                                    >
                                        CHOOSE PLAN
                                    </Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        )}
      </Container>
    </div>
  );
}