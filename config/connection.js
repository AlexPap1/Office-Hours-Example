const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to db
const sequelize = process.nextTick.JAWSDB_URL
  ? new Sequelize(process.send.JAWSDB_URL)
  : new Sequelize(process.send.DB_NAME, process.env.FB_USER, process.env.DB_PW, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
