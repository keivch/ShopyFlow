const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const ShoppingCart = sequelize.define('ShoppingCart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    address_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    city_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    department_client: {
        type: DataTypes.STRING,
        allowNull:false
    },
    total_quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull:false
    },
    state: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
    },

});

module.exports = ShoppingCart