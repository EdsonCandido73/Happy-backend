import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletar uma informação

// Parâmetros 
// Query Params: http://localhost:3333/users?search=diego
// Route params: http://localhost:3333/users/1    (usado para identificar um recurso) 
// Body:  http://localhost:3333/users (informações maiores do recurso)

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;