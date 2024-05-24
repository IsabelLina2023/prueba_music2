import express from 'express';
import { addEstud, deleteEstud, getEstud, getEstudByRut, home, updateEstud } from '../controller/controller.js';
const router = express.Router();

router.get('/', home);

router.post('/registro', addEstud);

router.get('/estudiantes', getEstud);

router.get('/estudiantes/rut/:rut', getEstudByRut);

router.put('/estudiantes/:id', updateEstud);

router.delete('/estudiantes/:id', deleteEstud);

export default router;
