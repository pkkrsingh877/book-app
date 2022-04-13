const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

client.connect();

module.exports = client;
