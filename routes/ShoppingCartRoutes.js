const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/ShoppingCartController.js');

// Rutas 
router.get('/allShoppingCart/', shoppingCartController.getAllCarts); // Obtener todos los carritos
router.get('/getShoppingCart/:id', shoppingCartController.getCartById); // Obtener un carrito por ID
router.post('/createShoppingCart/', shoppingCartController.createCart); 
router.put('/updateShoppingCart/:id', shoppingCartController.updateCart); 
router.delete('/deleteShoppingCart/:id', shoppingCartController.deleteCart); 

module.exports = router;
