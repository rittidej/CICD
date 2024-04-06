const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mydatabase', 'root', 'mypassword', {
  host: 'db',
  dialect: 'mysql'
});

module.exports = sequelize;