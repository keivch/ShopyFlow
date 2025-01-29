const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');
const Product = require('./Product');

const product_images = sequelize.define('product_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

product_images.belongsTo(Product, { foreignKey: 'Product_id', as: 'product' });
Product.hasMany(product_images, { foreignKey: 'Product_id', as: 'images' });

module.exports = product_images;