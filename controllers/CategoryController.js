const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    const {id} = req.params;
    try{
        const category = await Category.findByPk(id);
        if(!category){
            return res.status(404).json({error: 'Category not found'});
        }
        res.status(200).json(category);
        }catch(error){
            res.status(500).json({error: error.message});
    }
};

exports.createCategory = async (req, res) => {
    const {name} = req.body;
    try{
        const category = await Category.create({name});
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.updateCategory = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try{
        const category = await Category.findByPk(id);
        if(!category){
            return res.status(404).json({error: 'Category not found'});
        }
        category.name = name;
        await category.save();
        res.status(200).json(category);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteCategory = async (req, res) => {
    const {id} = req.params;
    try{
        const category = await Category.findByPk(id);
        if(!category){
            return res.status(404).json({error: 'Category not found'});
        }
        await category.destroy();
        res.status(200).json({message: 'Category deleted successfully'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

