const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: 'localhost',
  database: 'lapo_db',
  password: process.env.DB_PASSWORD || 'admin',
  port: process.env.DB_PORT || 5432,  
});

module.exports = pool;