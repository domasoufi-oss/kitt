import express, { Request, Response } from 'express';

const app = express();


const PORT = 3000;
const HOST = '0.0.0.0'; // THIS IS THE KEY

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
