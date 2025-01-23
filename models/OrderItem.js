const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    },
    Product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = OrderItem
Order.hasMany(OrderItem, { foreignKey: 'Order_id' });
Product.hasMany(OrderItem, { foreignKey: 'Product_id' });
OrderItem.belongsTo(Order, { foreignKey: 'Order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'Product_id' });