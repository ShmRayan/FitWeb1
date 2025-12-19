import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Activity, Zap, BarChart3 } from 'lucide-react'; 

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="bg-dark text-white min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div 
          className="position-absolute w-100 h-100" 
          style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
              zIndex: 0
          }}
        ></div>

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-2 fw-black text-uppercase mb-4 fw-bold"
              >
                Dépassez vos <span className="text-primary">Limites</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="lead mb-5 text-light opacity-75"
              >
                Rejoignez FitRay pour découvrir une nouvelle dimension de santé.
                Programmes personnalisés, suivi expert et résultats garantis.
              </motion.p>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
              >
                  <Button size="lg" variant="primary" className="rounded-pill px-5 py-3 fw-bold shadow-lg border-0">
                    COMMENCER MAINTENANT
                  </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SERVICES SECTION --- */}
      <div className="py-5 bg-black text-white">
        <Container className="py-5">
            <Row className="text-center mb-5">
                <Col>
                    <h2 className="display-5 fw-bold text-uppercase">Nos <span className="text-primary">Fonctionnalités</span></h2>
                    <p className="lead text-secondary">Tout ce dont vous avez besoin pour réussir</p>
                </Col>
            </Row>

            <Row className="g-4">
                <Col md={4}>
                    <FeatureCard 
                        icon={<Activity size={40} className="text-primary mb-3"/>}
                        title="Plans Personnalisés"
                        desc="Des entraînements adaptés à votre morphologie et vos objectifs précis."
                    />
                </Col>
                <Col md={4}>
                    <FeatureCard 
                        icon={<Zap size={40} className="text-primary mb-3"/>}
                        title="Suivi Nutritionnel"
                        desc="Calculez vos macros et suivez votre alimentation pour des résultats optimaux."
                    />
                </Col>
                <Col md={4}>
                    <FeatureCard 
                        icon={<BarChart3 size={40} className="text-primary mb-3"/>}
                        title="Analytics Avancés"
                        desc="Visualisez votre progression avec des graphiques détaillés en temps réel."
                    />
                </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="h-100 bg-dark text-white border-secondary border-opacity-25 shadow-sm p-4">
                <Card.Body className="text-center">
                    {icon}
                    <Card.Title className="fw-bold h4 mb-3">{title}</Card.Title>
                    <Card.Text className="text-secondary">
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
    );
}