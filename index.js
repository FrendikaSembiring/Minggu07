import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const hostname = '127.0.0.1';
const port = 8000;

app.use(express.static('public'))

app.get('(/home)?', (req,res) => {
    res.sendFile(__dirname+'/public/pages/home.html')
});

app.get('/pricing', (req,res) => {
    res.sendFile(__dirname+'/public/pages/pricing.html')
});

app.get('/product', (req,res) => {
    res.sendFile(__dirname+'/public/pages/product.html')
});

app.get('/disabled', (req,res) => {
    res.sendFile(__dirname+'/public/pages/disabled.html')
});

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
})