import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Confirmation() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
      <Container>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <CheckCircle size={100} className="text-success mb-4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="display-3 fw-black mb-3" style={{ letterSpacing: '-2px' }}>
            BOOKING <span className="text-gradient">CONFIRMED!</span>
          </h1>
          
          <p className="lead text-white-50 mb-5 mx-auto fw-medium" style={{ maxWidth: '600px' }}>
            Thank you for choosing FitRay. Your journey to a better version of yourself starts now. 
            A confirmation email has been sent to your inbox.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              as={Link} 
              to="/" 
              variant="primary" 
              className="btn-primary rounded-pill px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-lg border-0"
            >
                <Home size={20} /> BACK TO HOME
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}