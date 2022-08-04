const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_enigma_employee',
    password: '123',
    port: 5432
});
module.exports =  pool;
