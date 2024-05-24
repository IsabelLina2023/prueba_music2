import { addEstudQuery, deleteEstudQuery, getEstudQuery, getEstudQueryByRut, updateEstudQuery } from '../models/queries.js';




export const home = (req, res) =>{
    res.send('Hola mundo ahora desde controller');
};

export const addEstud = async (req, res) =>{
    const { nombre, rut, curso, nivel } = req.body;
    await addEstudQuery(nombre, rut, curso, nivel);
    res.send('Estudiante agregado');
};

export const getEstud = async (req, res) =>{
    const estud = await getEstudQuery();
    res.send(estud);
};

export const getEstudByRut = async (req, res) =>{
    const { rut } = req.params;
    const estudRut = await getEstudQueryByRut(rut);
    res.send(estudRut);
};

export const updateEstud = async (req, res) =>{
    const { id } = req.params;
    const { nombre, rut, curso, nivel } = req.body;
    const estudId = await updateEstudQuery(nombre, rut, curso, nivel, id);
    res.send(estudId);
};

export const deleteEstud = async (req, res) => {
    const { id } = req.params;
    const estudDel = await deleteEstudQuery(id);
    res.send('Estudiante eliminado');
}


