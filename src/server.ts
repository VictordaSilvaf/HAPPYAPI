import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';


import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// }
// Métodos HTTP: GET, POST, PUT, DELETE
/* Parâmetros {
*   Query Params: http://localhost:3333/users?search=diego (definido pelo "?")
*   Route Params: http://localhost:3333/users/1 (indentificar recursos)
*   Body: http://localhost:3333/users (Informações com bastante dados)
*
*
*/

app.listen(3333);
