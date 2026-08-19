import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/config';

class Match extends Model {
    public id!: number;
    public sport!: string;
    public title!: string;
    public date!: string;
    public time!: string;
    public location!: string;
    public difficulty!: string;
}

Match.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Match',
        tableName: 'matches',
    }
);

export default Match;
