const {DataTypes} = require('sequelize');
const Admin = require('../models/Admin');

exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body; 
        console.log(name, email, password);

        // Usa await para esperar la resolución de la promesa
        const existingAdmin = await Admin.findOne({ where: { email } });
        if (existingAdmin) {
            console.log(email);
            return res.status(400).json({ error: 'Admin already exists' });
        }

        const admin = await Admin.create({ name, email, password });
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};