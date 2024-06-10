import mysql from 'mysql2/promise'
export const connection = await mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE
})