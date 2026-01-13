import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('TS is now working on Windows and Linux!');
});

// Use '0.0.0.0' to allow external traffic from your router
app.listen(port, '0.0.0.0', () => {
    console.log(`Face is listening on all interfaces at port ${port}`);
});