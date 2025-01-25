const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

// Obtener todas las ordenes
router.get('/allOrders/', orderController.getAllOrders);

// Obtener una orden por ID
router.get('/getOrder/:id', orderController.getOrderById);

// Crear una nueva orden
router.post('/createOrder/', orderController.createOrder);

module.exports = router;