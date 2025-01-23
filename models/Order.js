const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./Category');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  state: {
    type: DataTypes.ENUM('Pendiente', 'Enviado', 'Entregado', 'Cancelado'),
    defaultValue: 'Pendiente',
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  name_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_client: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  
});

module.exports = Order;
