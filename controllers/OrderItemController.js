const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Crear
exports.createOrderItem = async (req, res) => {
  const { Order_id, Product_id, quantity, subtotal } = req.body;

  if (!Order_id || !Product_id || !quantity || !subtotal) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const orderItem = await OrderItem.create({ Order_id, Product_id, quantity, subtotal });
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll({
      include: [Order, Product], // Incluye datos relacionados
    });
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener uno en espeficifo
exports.getOrderItemById = async (req, res) => {
  const { id } = req.params;

  try {
    const orderItem = await OrderItem.findByPk(id, { include: [Order, Product] });
    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem no encontrado' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar 
exports.updateOrderItem = async (req, res) => {
  const { id } = req.params;
  const { quantity, subtotal } = req.body;

  try {
    const orderItem = await OrderItem.findByPk(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem no encontrado' });
    }

    orderItem.quantity = quantity ?? orderItem.quantity;
    orderItem.subtotal = subtotal ?? orderItem.subtotal;

    await orderItem.save();
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar 
exports.deleteOrderItem = async (req, res) => {
  const { id } = req.params;

  try {
    const orderItem = await OrderItem.findByPk(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem no encontrado' });
    }

    await orderItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
