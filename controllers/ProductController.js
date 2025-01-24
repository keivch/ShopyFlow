const Product = require('../models/Product');
const Category = require('../models/Category');

exports.getAllProdcuts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: [{ model: Category, as: 'category' }]  });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id,{ include: [{ model: Category, as: 'category' }] });
        if (!product) {
            return res.status(404).json({ error: 'Product no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category_id, image, quantity } = req.body;
        const product = await Product.create({ name, description, price, category_id, image, quantity });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, Category_id, image, quantity } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product no encontrado' });
        }
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.Category_id = Category_id || product.Category_id;
        product.image = image || product.image;
        product.quantity = quantity || product.quantity;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product no encontrado' });
        }
        await product.destroy();
        res.status(200).json({ message: 'Product eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}