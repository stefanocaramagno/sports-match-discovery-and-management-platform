import app from './app';
import sequelize from './db/config';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connesso con successo.');
        app.listen(PORT, () => {
            console.log(`Server avviato su http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Errore di connessione al database:', error);
    }
};

startServer();
