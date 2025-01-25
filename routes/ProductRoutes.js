const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Obtener todos los productos
router.get('/allProducts/', productController.getAllProdcuts);

// Obtener un producto por ID
router.get('/getProduct/:id', productController.getProductById);

// Crear un nuevo producto
router.post('/createProduct/', productController.createProduct);

// Actualizar un producto
router.put('/updateProduct/:id', productController.updateProduct);

// Eliminar un producto
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;