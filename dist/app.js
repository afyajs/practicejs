"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const practice_type_repository_1 = require("./infrastructure/practice-type-repository");
const port = 1000;
const app = express_1.default();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const rep = new practice_type_repository_1.PracticeTypeRepository();
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
//# sourceMappingURL=app.js.map