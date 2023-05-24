const {Sequelize}=require('sequelize');

const db = new Sequelize({
  host: 'localhost',
  database: 'db_todos',
  port: 5432,
  username: 'postgres',
  password: 'root',
  dialect: 'postgres'
});

module.exports = db;