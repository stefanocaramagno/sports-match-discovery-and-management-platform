import express from 'express';
import path from 'path';
import matchRoutes from './routes/matchRoutes';

const app = express();

// Middleware per il parsing JSON
app.use(express.json());

// Middleware per i file statici
app.use(express.static(path.join(__dirname, '../public')));

// Reindirizza '/' alla home del sito
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/home.html'));
});

// API Routes
app.use('/api/matches', matchRoutes); 

export default app;
