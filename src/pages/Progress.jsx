import { Container, Accordion, Card, Form, Button } from 'react-bootstrap';
import { Trophy, Share2 } from 'lucide-react';

export default function Progress() {
  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container>
        <div className="text-center mb-5">
            <h1 className="fw-bold text-primary">Défis & Progrès</h1>
            <p className="lead text-white-50">Repoussez vos limites et partagez vos succès avec la communauté.</p>
        </div>

        <Card className="bg-black text-white border-secondary border-opacity-25 mb-5">
            <Card.Body>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0" className="bg-black text-white">
                        <Accordion.Header><Trophy className="me-2 text-warning"/> Défi 1: Course Virtuelle</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            <p>Participez à une course virtuelle contre d'autres utilisateurs. Objectif : parcourir la plus grande distance en une semaine.</p>
                            <ul>
                                <li>Parcourir au moins 20 km</li>
                                <li>Améliorer votre temps personnel</li>
                                <li>Top 10 du classement = Badge Or</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="bg-black text-white">
                        <Accordion.Header><Share2 className="me-2 text-info"/> Partagez vos Progrès</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            <p>Mettez à jour votre statut et publiez vos performances.</p>
                            <ul>
                                <li>Capture d'écran de vos activités</li>
                                <li>Tableau de classement en temps réel</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <div className="p-4 rounded-3 border border-secondary border-opacity-25 bg-black">
            <h3 className="mb-4">Partagez votre expérience</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Titre du post</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Mon record au 10km !" className="bg-dark text-white border-secondary"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Votre histoire</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Racontez-nous..." className="bg-dark text-white border-secondary"/>
                </Form.Group>
                <Button variant="outline-primary">Publier sur le mur</Button>
            </Form>
        </div>
      </Container>
    </div>
  );
}