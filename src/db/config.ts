import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('meetyourmatch_database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
