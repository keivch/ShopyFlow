const sequelize = require('../config/db');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const ShoppingCart = require('../models/ShoppingCart');
const CartItem = require('../models/CartItem');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Failed to synchronize database:', error);
    }
};

syncDatabase();