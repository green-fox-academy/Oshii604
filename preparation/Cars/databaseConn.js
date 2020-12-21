/*
require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
});
*/

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `cars`,
});

module.exports = conn;
