const Pool = require('pg').Pool;

const USER = 'postgres';
const PASSWORD = 'postgres';
const HOST = '127.0.0.1';
const DATABASE_PORT = 5432;
const DATABASE_NAME = 'jwt-pern';

const CONNECTION = { user: USER, password: PASSWORD, host: HOST, port: DATABASE_PORT, database: DATABASE_NAME };

const pool = new Pool(CONNECTION);

module.exports = pool;
