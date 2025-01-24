const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({ include: Product });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await CartItem.findByPk(id, { include: Product });
    if (!cartItem) {
      return res.status(404).json({ error: 'CartItem no encontrado' });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCartItem = async (req, res) => {
  const { ShoppingCart_id, Product_id, quantity, subtotal } = req.body;
  try {
    const cartItem = await CartItem.create({
      ShoppingCart_id,
      Product_id,
      quantity,
      subtotal
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity, subtotal } = req.body;
  try {
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) {
      return res.status(404).json({ error: 'CartItem no encontrado' });
    }

    cartItem.quantity = quantity || cartItem.quantity;
    cartItem.subtotal = subtotal || cartItem.subtotal;
    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) {
      return res.status(404).json({ error: 'CartItem no encontrado' });
    }

    await cartItem.destroy();
    res.status(200).json({ message: 'CartItem eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
