import React, { useState } from 'react';
import { Container, Accordion, Card, Form, Row, Col } from 'react-bootstrap';
import { Trophy, Share2, Send, Target, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Composant Confetti
const ConfettiPiece = ({ delay, colors = ['#2563eb', '#06b6d4', '#fbbf24', '#22c55e'] }) => (
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
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: '2px',
      zIndex: 10
    }}
  />
);

export default function Progress() {
  const [joined, setJoined] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postAchievement, setPostAchievement] = useState("");
  const [showConfettiPost, setShowConfettiPost] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const [errors, setErrors] = useState({ title: "", achievement: "" });

  // JOIN
  const handleJoin = () => {
    setJoined(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };

  // POST
  const handlePost = (e) => {
    e.preventDefault();

    // Reset errors
    let tempErrors = { title: "", achievement: "" };
    let hasError = false;

    if (!postTitle.trim()) {
      tempErrors.title = "Please enter a title";
      hasError = true;
    }

    if (!postAchievement.trim()) {
      tempErrors.achievement = "Please enter your achievement";
      hasError = true;
    }

    setErrors(tempErrors);

    if (hasError) return;

    setIsPosting(true);
    setShowConfettiPost(true);

    setTimeout(() => {
      setIsPosting(false);
      setIsPosted(true);
      setTimeout(() => setShowConfettiPost(false), 1000);
    }, 1500);
  };

  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: '#f3f4f6' }}>
      <Container className="py-5">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-5">
          <h1 className="display-2 fw-black text-dark mb-0" style={{ letterSpacing: '-2px' }}>
            CHALLENGES & <span className="text-gradient">PROGRESS</span>
          </h1>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {/* Challenges */}
            <div className="mb-5">
              <h3 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <Target className="text-primary" /> Active Challenges
              </h3>
              <Accordion defaultActiveKey="0" className="custom-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Trophy className="me-3 text-warning" size={20}/>
                    Challenge #1: Virtual Marathon
                  </Accordion.Header>
                  <Accordion.Body className="position-relative overflow-hidden">
                    <p className="fw-medium text-dark">Compete against other users globally. Goal: cover the longest distance in 7 days.</p>
                    <ul className="text-secondary mb-4">
                      <li>Run at least 20 km total</li>
                      <li>Beat your previous personal record</li>
                      <li>Top 10 wins a <span className="text-primary fw-bold">Gold Badge</span></li>
                    </ul>

                    <div className="position-relative d-inline-block">
                      <AnimatePresence>
                        {showConfetti && (
                          <div className="position-absolute top-50 start-50 translate-middle">
                            {[...Array(20)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} />)}
                          </div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        whileHover={{ scale: joined ? 1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleJoin}
                        disabled={joined}
                        className={`btn rounded-pill px-5 py-2 fw-bold shadow-lg transition-all border-0 d-flex align-items-center gap-2 ${joined ? 'bg-success text-white' : 'btn-primary text-white'}`}
                        style={{ minWidth: '180px', height: '50px', justifyContent: 'center' }}
                      >
                        {joined ? (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="d-flex align-items-center gap-2">
                            <CheckCircle2 size={20} /> JOINED!
                          </motion.div>
                        ) : "JOIN CHALLENGE"}
                      </motion.button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <Share2 className="me-3 text-info" size={20}/> 
                    Community Milestones
                  </Accordion.Header>
                  <Accordion.Body className="text-secondary">
                    <p>Share your daily victories and get motivated by others.</p>
                    <ul>
                      <li>Post your workout screenshots</li>
                      <li>Real-time community leaderboard access</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Formulaire Share Your Story */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-0 shadow-lg p-4 p-md-5 hover-card" style={{ borderRadius: '2rem', backgroundColor: 'white' }}>
                <div className="mb-4">
                  <h3 className="fw-black text-dark mb-2">Share Your Story</h3>
                  <div className="bg-primary" style={{ height: '4px', width: '50px', borderRadius: '2px' }}></div>
                </div>

                <Form onSubmit={handlePost}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold text-dark small text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Post Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      className={`py-3 px-4 border-0 rounded-4 shadow-sm bg-light ${errors.title ? 'border border-danger' : ''}`}
                      style={{ transition: '0.3s', fontSize: '1.05rem' }}
                    />
                    {errors.title && <div className="text-danger small mt-1">{errors.title}</div>}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold text-dark small text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Your Achievement</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell us about your training today..."
                      value={postAchievement}
                      onChange={(e) => setPostAchievement(e.target.value)}
                      className={`py-3 px-4 border-0 rounded-4 shadow-sm bg-light ${errors.achievement ? 'border border-danger' : ''}`}
                      style={{ transition: '0.3s', fontSize: '1.05rem' }}
                    />
                    {errors.achievement && <div className="text-danger small mt-1">{errors.achievement}</div>}
                  </Form.Group>

                  <div className="position-relative text-center">
                    <AnimatePresence>
                      {showConfettiPost && (
                        <div className="position-absolute top-50 start-50 translate-middle">
                          {[...Array(30)].map((_, i) => <ConfettiPiece key={i} delay={i * 0.01} colors={['#2563eb', '#22c55e', '#ffffff']} />)}
                        </div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={isPosting || isPosted}
                      whileHover={{ scale: isPosted ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`btn w-100 py-3 rounded-pill fw-black shadow-lg d-flex align-items-center justify-content-center gap-3 border-0 transition-all ${isPosted ? 'bg-success text-white' : 'btn-primary text-white'}`}
                      style={{ fontSize: '1.2rem', letterSpacing: '1px', height: '65px' }}
                    >
                      {isPosting ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                          <Loader2 size={24} />
                        </motion.div>
                      ) : isPosted ? (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="d-flex align-items-center gap-2">
                          <CheckCircle2 size={26} /> SUCCESSFULLY POSTED!
                        </motion.div>
                      ) : (
                        <>
                          <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            <Send size={22} />
                          </motion.div>
                          POST TO COMMUNITY FEED
                        </>
                      )}
                    </motion.button>
                  </div>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
