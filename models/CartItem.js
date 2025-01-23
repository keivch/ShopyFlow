const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const ShoppingCart = require('./ShoppingCart');
const Product = require('./Product');

const CartItem = sequelize.define('CartItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ShoppingCart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ShoppingCart,
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

module.exports = CartItem
ShoppingCart.hasMany(CartItem, { foreignKey: 'ShoppingCart_id' });
CartItem.belongsTo(ShoppingCart, { foreignKey: 'ShoppingCart_id' });