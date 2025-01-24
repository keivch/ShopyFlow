const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const {
            order_date,
            state,
            total,
            name_client,
            city_client,
            phone_client,
            address_client,
        }
            = req.body;
        const newOrder = await Order.create({
            order_date,
            state,
            total,
            name_client,
            city_client,
            phone_client,
            address_client,
        });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


