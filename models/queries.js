import { pool } from '../config/db.js';


const addEstudQuery = async(nombre, rut, curso, nivel) =>{
    try {
       const objeto = {
        //esto es parametrizar:
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [nombre, rut, curso, nivel]
       }

       const response = await pool.query(objeto);
       console.log(response.rows);
       if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
    }
};

const getEstudQuery = async() =>{
    try {
       const objeto = {
        //esto es parametrizar:
        text: 'SELECT * FROM estudiantes',
        rowMode: 'array',
       }

       const response = await pool.query(objeto);
       console.log(response.rows);
       if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
    }
};

const getEstudQueryByRut = async(rut) =>{
    try {
       const objeto = {
        //esto es parametrizar:
        text: 'SELECT * FROM estudiantes where rut = $1',
        values: [rut],
       }

       const response = await pool.query(objeto);
       console.log(response.rows);
       if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
    }
};

const updateEstudQuery = async(nombre, rut, curso, nivel, id) =>{
    try {
       const objeto = {
        //esto es parametrizar:
        text: 'UPDATE estudiantes SET nombre= $1, rut= $2, curso= $3, nivel= $4, id= $5 WHERE id=$5 RETURNING *',
        values: [nombre, rut, curso, nivel, id]
       }

       const response = await pool.query(objeto);
       console.log(response.rows);
       if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
    }
};

const deleteEstudQuery = async (id) => {
    try {
      const objeto = {
        text: 'DELETE FROM estudiantes WHERE id=$1 RETURNING *',
        values: [id],
      };
      const response = await pool.query(objeto);
      if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
      console.log(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
    }
  };




export { addEstudQuery, getEstudQuery, getEstudQueryByRut, updateEstudQuery, deleteEstudQuery };