import * as express from 'express';
import { Response } from 'express';

const app = express();
const ob = { name: ['vlad'] };

app.get('/', (_, res) => res.send('May the force be with you'));

app.listen(3000, () => console.log('Server was started on 3000'));