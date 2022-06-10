import express from 'express';
import cors from 'cors'; 
import { routes } from './routes';

const app = express(); 

app.use(cors());  
app.use(routes); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use

app.listen(3333, () => {
    console.log('HTTP server running!')
})

