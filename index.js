import 'dotenv/config'
import {connection} from "./connection.js"
import {deleteById, update} from "./functions.js"


async function getById(id){
    try
    {
        const[results,_]= await connection.query(
        'SELECT * FROM pizza WHERE id=?', [id]
        )
        console.log(results)
    }
    catch(err){
        console.log(err)
    }
}
async function getAll(){
    try
    {
        const[results,_]= await connection.query(
        'SELECT * FROM pizza'
        )
        console.log(results)
    }
    catch(err){
        console.log(err)
    }
}
async function insertPizza(nombre, libreGluten,descripcion, importe){
    try
    {
        const[results,_]= await connection.query(
        'INSERT INTO pizza (nombre, libreGluten, descripcion, importe) VALUES (?,?,?,?)', [nombre,libreGluten,descripcion,importe]
        )
        console.log(results)
    }
    catch(err){
        console.log(err)
    }
}


