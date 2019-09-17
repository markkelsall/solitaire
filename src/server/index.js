import express from 'express';
import { version } from '../../package.json';

const app = express();

app.use(express.static('dist'));
app.get('/health', (req, res) => {
    res.json({ version });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
