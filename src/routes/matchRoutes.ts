import express from 'express';
import { getMatches, createMatch, getMatchById, deleteMatch } from '../controllers/matchController';

const router = express.Router();

// Si visualizzano tutti i Match
router.get('/', getMatches);

// Si crea un Match
router.post('/', createMatch);

// Si elimina un Match
router.delete('/:id', deleteMatch);

// Si recuperano le informazioni di un Match specifico
router.get('/:id', getMatchById);

export default router;