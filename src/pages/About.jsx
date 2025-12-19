import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

export default function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Merci de votre avis.");
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container>
        <div className="text-center mb-5">
            <h1 className="fw-bold">Contactez-Nous</h1>
            <p className="text-secondary">Nous sommes là pour répondre à toutes vos questions</p>
        </div>

        <Row className="justify-content-center mb-5">
            <Col md={4} className="text-center mb-3">
                <Phone size={32} className="text-primary mb-2"/>
                <h5>+1 613 888 8888</h5>
            </Col>
            <Col md={4} className="text-center mb-3">
                <Mail size={32} className="text-primary mb-2"/>
                <h5>contact@FitRay.com</h5>
            </Col>
            <Col md={4} className="text-center mb-3">
                <MapPin size={32} className="text-primary mb-2"/>
                <h5>199 Fitness Street, Ottawa</h5>
            </Col>
        </Row>

        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="bg-black text-white border-secondary border-opacity-25 p-4 shadow-lg">
                    <Card.Body>
                        <h3 className="text-center mb-4">Votre avis nous intéresse</h3>
                        
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={24} className="text-warning cursor-pointer" fill="orange" />
                            ))}
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom complet</Form.Label>
                                <Form.Control type="text" placeholder="Votre nom" className="bg-dark text-white border-secondary" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="nom@exemple.com" className="bg-dark text-white border-secondary" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Votre message..." className="bg-dark text-white border-secondary" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 rounded-pill fw-bold">
                                Envoyer le message
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