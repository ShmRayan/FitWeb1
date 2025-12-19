import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Reserve() {
  const [service, setService] = useState('');
  const [cost, setCost] = useState(0);
  const [mode, setMode] = useState('solo'); 
  const navigate = useNavigate();

  const expertsData = {
    entrainement: { label: "Entraînements Personnalisés", price: 10, experts: ["Lucie Martin", "Maxime Dubois", "Sophie Leroux"] },
    support: { label: "Support Coachs", price: 15, experts: ["Marie Dupont", "Antoine Rousseau", "Laura Garcia"] },
    nutrition: { label: "Nutrition", price: 20, experts: ["Émilie Lefebvre", "Pierre Lambert", "Amélie Dubois"] }
  };

  const handleServiceChange = (e) => {
    const val = e.target.value;
    setService(val);
    setCost(val ? expertsData[val].price : 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container>
        <h1 className="text-center mb-5 fw-bold">Réserver une Séance</h1>

        <div className="d-flex justify-content-center gap-3 mb-4">
            <Button variant={mode === 'solo' ? 'primary' : 'outline-secondary'} onClick={() => setMode('solo')}>Mode Solo</Button>
            <Button variant={mode === 'friends' ? 'primary' : 'outline-secondary'} onClick={() => setMode('friends')}>Entre Amis</Button>
        </div>

        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="bg-black text-white border-secondary border-opacity-25 p-4 shadow">
                    <Card.Body>
                        <h3 className="mb-4">{mode === 'solo' ? 'Réserver pour moi' : 'Réserver pour un groupe'}</h3>
                        
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Control placeholder="Nom" className="bg-dark text-white border-secondary" required />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Control placeholder="Prénom" className="bg-dark text-white border-secondary" required />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Votre Email" className="bg-dark text-white border-secondary" required />
                            </Form.Group>

                            {mode === 'friends' && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Emails des amis (séparés par des virgules)</Form.Label>
                                    <Form.Control type="text" placeholder="ami1@mail.com, ami2@mail.com" className="bg-dark text-white border-secondary" />
                                </Form.Group>
                            )}

                            <Form.Group className="mb-3">
                                <Form.Select className="bg-dark text-white border-secondary" onChange={handleServiceChange} required>
                                    <option value="">Sélectionner le service</option>
                                    <option value="entrainement">Entraînements Personnalisés (10$)</option>
                                    <option value="support">Support Coachs Certifiés (15$)</option>
                                    <option value="nutrition">Conseils Nutritionnels (20$)</option>
                                </Form.Select>
                            </Form.Group>

                            {service && (
                                <Form.Group className="mb-3">
                                    <Form.Select className="bg-dark text-white border-secondary" required>
                                        <option value="">Choisir un expert</option>
                                        {expertsData[service].experts.map(exp => (
                                            <option key={exp} value={exp}>{exp}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            )}

                            <Form.Group className="mb-4">
                                <Form.Control type="date" className="bg-dark text-white border-secondary" required />
                            </Form.Group>

                            {cost > 0 && (
                                <Alert variant="info" className="text-center fw-bold">
                                    Coût total estimé : {cost}$
                                </Alert>
                            )}

                            <Button type="submit" variant="success" size="lg" className="w-100 rounded-pill">
                                CONFIRMER LA RÉSERVATION
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}