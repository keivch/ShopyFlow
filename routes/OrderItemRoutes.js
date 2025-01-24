const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/OrderItemController');

// Rutas 
router.post('/createOrderItem/', orderItemController.createOrderItem);
router.get('/allOrderItems/', orderItemController.getAllOrderItems);
router.get('/getOrderItem/:id', orderItemController.getOrderItemById); 
router.put('/updateOrderItem/:id', orderItemController.updateOrderItem);
router.delete('/deleteOrderItem/:id', orderItemController.deleteOrderItem);

module.exports = router;
