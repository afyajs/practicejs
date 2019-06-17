import express from 'express';
import { IPracticeTypeRepository } from './domain/practices/practice-type-repository.interface';
import { PracticeTypeRepository } from './infrastructure/practice-type-repository';

const port = 1000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const rep: IPracticeTypeRepository = new PracticeTypeRepository();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/config', (req, res) => {
    res.send(rep.get());
});

app.post('/config', (req, res) => {
    rep.save(req.body);
    console.log(req.body);
    res.send(rep.get());
});

app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});
