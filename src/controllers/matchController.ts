import { Request, Response } from 'express';
import Match from '../models/match';

// Si visualizzano tutti i Match 
export const getMatches = async (req: Request, res: Response) => {
    try {
        const matches = await Match.findAll();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recuperare i match' });
    }
};

// Si crea un Match 
export const createMatch = async (req: Request, res: Response) => {
    try {
        const { title, sport, date, time, difficulty, location } = req.body;

        const match = await Match.create({
            title,
            sport,
            date,
            time,
            difficulty,
            location,
        });

        res.status(201).json(match);
    } catch (error) {
        console.error('Errore nella creazione del match:', error);
        res.status(500).json({ error: 'Errore nella creazione del match' });
    }
};

// Si elimina un Match 
export const deleteMatch = async (req: Request, res: Response) => {
    try {
        const matchId = req.params.id;
        console.log('Tentativo di eliminare il match con ID:', matchId);

        const match = await Match.findByPk(matchId);
        if (!match) {
            return res.status(404).json({ error: 'Match non trovato' });
        }

        await match.destroy(); 
        res.status(200).json({ message: 'Match eliminato con successo' });
    } catch (error) {
        console.error('Errore nell\'eliminazione del match:', error);
        res.status(500).json({ error: 'Errore nell\'eliminazione del match' });
    }
};

// Si recuperano le informazioni di un Match specifico 
export const getMatchById = async (req: Request, res: Response) => {
    console.log('Richiesta ricevuta per ID:', req.params.id);

    try {
        const matchId = req.params.id;

        const match = await Match.findByPk(matchId);
        console.log('Risultato della query:', match);

        if (!match) {
            console.log('Match non trovato per ID:', matchId);
            return res.status(404).json({ error: 'Match non trovato' });
        }

        res.status(200).json(match);
    } catch (error) {
        console.error('Errore nel recuperare il match:', error);
        res.status(500).json({ error: 'Errore nel recuperare il match' });
    }
};
