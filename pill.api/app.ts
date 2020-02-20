import express from 'express';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('HM_PLL', 'root', '12345678', { host: 'localhost', dialect: 'mysql' });

const app = express();

app.get('/', (_, res) => res.send('May the force be with you'));

app.listen(3000, () => console.log('Server was started on 3000'));

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });