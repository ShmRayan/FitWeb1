import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/plans')
      .then(res => res.json())
      .then(data => {
        setPlans(data);
        setLoading(false);
      })
      .catch(err => console.error("Erreur connexion serveur:", err));
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container className="mt-5">
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Nos Programmes</h1>
            <p className="lead text-secondary">Choisissez le plan adapté à vos ambitions</p>
        </div>

        {loading ? (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Chargement des plans depuis le serveur...</p>
            </div>
        ) : (
            <Row>
                {plans.map((plan, index) => (
                    <Col key={plan.id} md={4} className="mb-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-100 bg-black text-white border-secondary border-opacity-25 shadow-lg">
                                <Card.Body className="d-flex flex-col flex-column p-4">
                                    <div className="mb-3">
                                        <Badge bg="primary" className="mb-2">{plan.level}</Badge>
                                        <Card.Title className="h3 fw-bold">{plan.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{plan.duration}</Card.Subtitle>
                                    </div>
                                    
                                    <ul className="list-unstyled flex-grow-1 my-4">
                                        <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success"/> Programme complet</li>
                                        <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success"/> Suivi nutritionnel</li>
                                        <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success"/> Support 24/7</li>
                                    </ul>

                                    <Button variant="outline-light" className="w-100 mt-auto rounded-pill hover-scale">
                                        Choisir ce plan
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