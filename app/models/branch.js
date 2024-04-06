const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const branch = sequelize.define('branch', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        validate: {
            notEmpty: true
        }
    },
},{
    timestamps: true,
    tableName: 'branch',
    paranoid: true,
});

module.exports = branch;