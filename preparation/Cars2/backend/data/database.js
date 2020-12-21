// AZ INDEX.JS-BEN VANNAK A KURVA ENDPOINTOK!!!!!

// require your packages
const mysql = require('mysql');
require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
});

// set up the connexion to your database
const DB = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// connect and handle the error if there is
DB.connect((err) => {
  if (err) {
    console.error('Unable to connect to DB', err.sqlMessage);
    return;
  } console.log('Successfully connected to DB');
});

// create a promise to be able to make queries easy breezy
const query = (sql, placeholder) => new Promise((resolve, reject) => {
  DB.query(sql, placeholder, (err, data) => {
    if (err) { reject(err); console.error(err.sqlMessage); }
    resolve(data);
  });
});

// don't forget to export your query promise!!!
module.exports = query;
