import {Pool} from "pg";

const pool = new Pool ({
    user : 'postgres',
    host : "localhost",
    database : "crud_db",
    password : "afifa",
    port : 5432
})

export default pool ;
