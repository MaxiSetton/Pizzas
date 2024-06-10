import mysql from 'mysql2/promise'
import 'dotenv/config'
import {connection} from "./connection.js"

export async function update(id, campo, valor){
    try{ 
        const [results, _]= await connection.query(
    `UPDATE pizza SET ${campo}=? WHERE id=?`,[valor, id]
    )
    console.log(results)}
    catch(err){
        console.log(err)
    }
}
export async function deleteById(id){
    try{ 
        const [results, _]= await connection.query(
    `DELETE FROM pizza WHERE id=?`,[id]
    )
    console.log(results)}
    catch(err){
        console.log(err)
    }
}