const ShoppingCart = require('../models/ShoppingCart');

// Metodo para obtener todos
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Metodo para obtener 1
exports.getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await ShoppingCart.findByPk(id);
    if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear carrito
exports.createCart = async (req, res) => {
  try {
    const newCart = await ShoppingCart.create(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar 
exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await ShoppingCart.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ message: 'Carrito no encontrado' });
    const updatedCart = await ShoppingCart.findByPk(id);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ShoppingCart.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Carrito no encontrado' });
    res.status(200).json({ message: 'Carrito eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
