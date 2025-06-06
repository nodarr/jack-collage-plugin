import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import collageHandler from './generate-collage.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/generate-collage', collageHandler);

app.get('/openapi.json', (req, res) => {
  res.sendFile(new URL('./openapi.json', import.meta.url).pathname);
});

app.get('/.well-known/ai-plugin.json', (req, res) => {
  res.sendFile(new URL('./ai-plugin.json', import.meta.url).pathname);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});