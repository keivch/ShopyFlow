const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/CartItemsController');

// Obtener todos los ítems del carrito
router.get('/allCartItems/', cartItemController.getAllCartItems);

// Obtener un ítem del carrito por ID
router.get('/getCartItem/:id', cartItemController.getCartItemById);

// Crear un nuevo ítem en el carrito
router.post('/createCartItem/', cartItemController.createCartItem);

// Actualizar un ítem del carrito
router.put('/updateCartItem/:id', cartItemController.updateCartItem);

// Eliminar un ítem del carrito
router.delete('/deleteCartItem/:id', cartItemController.deleteCartItem);

module.exports = router;
