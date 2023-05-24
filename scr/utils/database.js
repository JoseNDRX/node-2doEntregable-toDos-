const {Sequelize}=require('sequelize');

const db = new Sequelize({
  host: 'dpg-chn3pl64dad21k49g8ng-a.oregon-postgres.render.com',
  database: 'db_todos',
  port: 5432,
  username: 'ndrx',
  password: 'Np6sYetl3lEe4yQzCcqgVWwh8GOjS15v',
  dialect: 'postgres',
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
});

//postgres://ndrx:Np6sYetl3lEe4yQzCcqgVWwh8GOjS15v@dpg-chn3pl64dad21k49g8ng-a.oregon-postgres.render.com/db_todos

module.exports = db;