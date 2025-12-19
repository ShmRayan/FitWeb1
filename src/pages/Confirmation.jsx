import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <Container>
        <CheckCircle size={80} className="text-success mb-4" />
        <h1 className="display-4 fw-bold mb-3">Réservation Confirmée !</h1>
        <p className="lead text-secondary mb-5">Merci d'avoir choisi FitRay. Un email de confirmation vous a été envoyé.</p>
        
        <Button as={Link} to="/" variant="primary" className="rounded-pill px-5">
            Retour à l'accueil
        </Button>
      </Container>
    </div>
  );
}