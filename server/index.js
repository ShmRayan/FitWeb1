const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5000;
const SECRET_KEY = "mon_secret_super_securise";

app.use(cors());
app.use(express.json()); 

const plans = [
    { id: 1, name: "Perte de Poids", duration: "8 semaines", level: "Débutant" },
    { id: 2, name: "Prise de Masse", duration: "12 semaines", level: "Intermédiaire" },
    { id: 3, name: "Athlète Hybride", duration: "10 semaines", level: "Avancé" }
];

app.get('/api/plans', (req, res) => {
    res.json(plans);
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const userMock = {
        email: "rayan@uottawa.ca",
        password: "123" 
    };

    if (email === userMock.email && password === userMock.password) {
        const token = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: '1h' });
        
        res.json({ 
            success: true, 
            token: token, 
            user: { email: email, name: "Rayan Saadani" } 
        });
    } else {
        res.status(401).json({ success: false, message: "Email ou mot de passe incorrect" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});