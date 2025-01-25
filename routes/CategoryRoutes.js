const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');

// Obtener todas las categorias
router.get('/allCategories/', categoryController.getAllCategories);

// Obtener una categoria por ID
router.get('/getCategory/:id', categoryController.getCategoryById);

// Crear una nueva categoria
router.post('/createCategory/', categoryController.createCategory);

// Actualizar una categoria
router.put('/updateCategory/:id', categoryController.updateCategory);

// Eliminar una categoria
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

module.exports = router;