const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/CartItemsController');

// Rutas
router.get('/allCartItems/', cartItemController.getAllCartItems);
router.get('/getCartItem/:id', cartItemController.getCartItemById);
router.post('/createCartItem/', cartItemController.createCartItem);
router.put('/updateCartItem/:id', cartItemController.updateCartItem);
router.delete('/deleteCartItem/:id', cartItemController.deleteCartItem);

module.exports = router;
