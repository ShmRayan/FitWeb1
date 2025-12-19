import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube, Dumbbell } from 'lucide-react'; 

export default function Footer() {
  return (
    <footer className="text-white py-5 mt-auto" style={{ backgroundColor: '#0F172A' }}>
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
                <div className="bg-primary text-white rounded p-1 d-flex align-items-center justify-content-center" style={{width: 32, height: 32}}>
                    <Dumbbell size={20} style={{ transform: 'rotate(-45deg)' }} />
                </div>
                <h4 className="fw-black text-uppercase m-0 lh-1">Fit<span className="text-primary">Ray</span></h4>
            </div>
            
            <p className="text-secondary small" style={{maxWidth: '300px'}}>
              Your ultimate partner in fitness. We provide world-class coaching, 
              nutrition plans, and data analytics to help you smash your goals.
            </p>
          </Col>
          
          <Col md={2} xs={6}>
            <h6 className="fw-bold mb-4 text-white">Platform</h6>
            <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
              <li><a href="/" className="text-decoration-none text-secondary hover-text-white transition-all">Home</a></li>
              <li><a href="/services" className="text-decoration-none text-secondary hover-text-white transition-all">Programs</a></li>
              <li><a href="/progress" className="text-decoration-none text-secondary hover-text-white transition-all">Challenges</a></li>
            </ul>
          </Col>

          <Col md={2} xs={6}>
            <h6 className="fw-bold mb-4 text-white">Company</h6>
            <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
              <li><a href="/about" className="text-decoration-none text-secondary hover-text-white transition-all">About Us</a></li>
              <li><a href="/about" className="text-decoration-none text-secondary hover-text-white transition-all">Contact</a></li>
              <li>Terms of Service</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold mb-4 text-white">Join the Community</h6>
            <div className="d-flex gap-3">
              <SocialIcon icon={<Instagram size={20}/>} />
              <SocialIcon icon={<Twitter size={20}/>} />
              <SocialIcon icon={<Youtube size={20}/>} />
              <SocialIcon icon={<Facebook size={20}/>} />
            </div>
          </Col>
        </Row>
        <div className="text-center pt-4 mt-5 border-top border-secondary border-opacity-10 text-secondary small">
          &copy; {new Date().getFullYear()} FitRay. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ icon }) {
    return (
        <div className="bg-white bg-opacity-5 p-2 rounded-circle cursor-pointer transition-all hover-bg-primary text-white">
            {icon}
        </div>
    );
}