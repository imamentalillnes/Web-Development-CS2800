import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"0",
    database:"todos"
})

export default pool;