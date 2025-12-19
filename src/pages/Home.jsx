import { Container, Button, Card, Accordion,Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Activity, Zap, BarChart3, ArrowRight, Star, Quote, Plus, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div className="position-absolute w-100 h-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}>
        </div>
        <div className="position-absolute w-100 h-100" style={{background: 'linear-gradient(90deg, #f3f4f6 0%, rgba(243,244,246,0.9) 40%, rgba(243,244,246,0.2) 100%)', zIndex: 1}}></div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
           <div className="col-md-8 col-lg-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.8}}>
                  <div className="d-inline-block px-3 py-1 mb-3 rounded-pill bg-white border border-primary text-primary fw-bold small shadow-sm">
                    New Generation Fitness
                  </div>
                  <h1 className="display-2 fw-black mb-4 lh-1 text-dark" style={{letterSpacing: '-2px'}}>
                    PUSH YOUR <br/>
                    <span className="text-gradient">LIMITS TODAY</span>
                  </h1>
                  <p className="lead mb-5 text-secondary pe-5 fw-medium">
                    Join FitRay to unlock a new dimension of health. Personalized plans, expert tracking, and guaranteed results tailored just for you.
                  </p>
                  <div className="d-flex gap-3">
                    <Button onClick={() => navigate('/register')} size="lg" variant="primary" className="rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center gap-2 hover-scale">
                        START NOW <ArrowRight size={20}/>
                    </Button>
                    <Button onClick={scrollToFeatures} size="lg" variant="white" className="rounded-pill px-5 py-3 fw-bold bg-white text-dark shadow-sm hover-shadow-md transition-all">
                        Learn More
                    </Button>
                  </div>
              </motion.div>
           </div>
        </Container>
      </div>

      <div id="features" className="py-5" style={{backgroundColor: '#fff'}}>
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="display-4 fw-black text-dark mb-3">Why Choose Us?</h2>
                <p className="lead text-secondary">Everything you need to build the best version of yourself.</p>
            </div>

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true} 
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-5 px-4" 
            >
                <SwiperSlide className="h-auto">
                    <FeatureCard icon={<Activity size={32} className="text-white"/>} color="bg-primary" title="Custom Plans" desc="Workouts tailored specifically to your body type."/>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <FeatureCard icon={<Zap size={32} className="text-white"/>} color="bg-warning" title="Nutrition Tracking" desc="Calculate macros and track your daily intake."/>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <FeatureCard icon={<BarChart3 size={32} className="text-white"/>} color="bg-success" title="Advanced Analytics" desc="Visualize your progress with detailed charts."/>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <FeatureCard icon={<Star size={32} className="text-white"/>} color="bg-dark" title="Elite Coaching" desc="Get advice from certified professionals 24/7."/>
                </SwiperSlide>
            </Swiper>
        </Container>
      </div>

      <div className="py-5" style={{backgroundColor: '#f8fafc'}}>
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-black text-dark">Success Stories</h2>
                <p className="text-secondary">Join 500+ athletes who changed their lives.</p>
            </div>
        
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-5 px-4"
            >
                <SwiperSlide className="h-auto"><TestimonialCard name="Alex Johnson" role="Lost 10kg" text="FitRay changed my life. The coaches are incredibly supportive."/></SwiperSlide>
                <SwiperSlide className="h-auto"><TestimonialCard name="Sarah Williams" role="Marathon Runner" text="The nutrition tracking is a game changer. Fueling properly is key."/></SwiperSlide>
                <SwiperSlide className="h-auto"><TestimonialCard name="Mike Chen" role="Muscle Gain" text="I gained 5kg of muscle thanks to the personalized workout plans."/></SwiperSlide>
                <SwiperSlide className="h-auto"><TestimonialCard name="Emma Watson" role="Yoga Lover" text="The flexibility programs helped me recover from my back pain."/></SwiperSlide>
            </Swiper>
        </Container>
      </div>

      <div className="py-5 bg-white">
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-black">FAQ</h2>
                        <p className="text-secondary">Common questions about our services.</p>
                    </div>
                    <Accordion className="custom-accordion">
                        <FaqItem eventKey="0" question="Is FitRay suitable for beginners?" answer="Absolutely! We have dedicated programs for beginners."/>
                        <FaqItem eventKey="1" question="Can I cancel anytime?" answer="Yes, no hidden fees or contracts."/>
                        <FaqItem eventKey="2" question="Do I need gym equipment?" answer="Not necessarily. We offer Home Workout plans too."/>
                    </Accordion>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}


function FeatureCard({ icon, title, desc, color }) {
    return (
        <Card className="h-100 border-0 p-4 shadow-lg hover-shadow-xl transition-all" style={{borderRadius: '1.5rem', backgroundColor: '#fff', cursor: 'grab'}}>
            <Card.Body>
                <div className={`${color} rounded-4 d-inline-flex p-3 mb-4 shadow-md`}>
                    {icon}
                </div>
                <Card.Title className="fw-bold h4 mb-3 text-dark">{title}</Card.Title>
                <Card.Text className="text-secondary">{desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function TestimonialCard({ name, role, text }) {
    return (
        <Card className="h-100 border-0 shadow-lg p-4 position-relative overflow-hidden" style={{borderRadius: '1.5rem', background: 'white', cursor: 'grab'}}>
            <Quote size={120} className="position-absolute text-light opacity-25" style={{top: -20, right: -20, color: '#e2e8f0'}} />
            <Card.Body className="position-relative z-1 d-flex flex-column">
                <div className="d-flex text-warning mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#f59e0b" size={18} className="me-1"/>)}
                </div>
                <Card.Text className="text-dark fs-5 mb-4 flex-grow-1" style={{lineHeight: '1.6'}}>"{text}"</Card.Text>
                <div className="d-flex align-items-center gap-3 pt-3 border-top mt-auto">
                    <div className="bg-primary text-white rounded-circle fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{width: 45, height: 45, fontSize: '1.2rem'}}>
                        {name.charAt(0)}
                    </div>
                    <div>
                        <div className="fw-bold text-dark">{name}</div>
                        <small className="text-primary fw-bold">{role}</small>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

function FaqItem({ eventKey, question, answer }) {
    return (
        <Accordion.Item eventKey={eventKey} className="mb-3 border-0 rounded-4 overflow-hidden">
            <Accordion.Header className="py-2 px-1 fw-bold">{question}</Accordion.Header>
            <Accordion.Body className="text-secondary bg-light pb-4">{answer}</Accordion.Body>
        </Accordion.Item>
    );
}