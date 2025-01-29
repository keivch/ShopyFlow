const Product = require("../models/Product");
const Category = require("../models/Category");
const { cloudinary } = require("../config/uploadConfig");
const ProductImage = require("../models/Product_images");

exports.getAllProdcuts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: ProductImage, as: "images" }], // Incluir imágenes
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: [{ model: ProductImage, as: "images" }],
    });
    if (!product) {
      return res.status(404).json({ error: "Product no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category_id, quantity } = req.body;
    const files = req.files; // Capturar varias imágenes

    // Crear el producto en la BD
    const product = await Product.create({
      name,
      description,
      price,
      category_id,
      quantity,
    });

    // Subir imágenes a Cloudinary y guardar en product_images
    if (files) {
      const uploadPromises = files.map(async (file) => {
        const uploadedImage = await cloudinary.uploader.upload(file.path);
        return ProductImage.create({
          Product_id: product.id,
          image: uploadedImage.secure_url,
        });
      });

      await Promise.all(uploadPromises); // Esperar todas las subidas
    }

    res.status(201).json({ product, message: "Producto creado con imágenes" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category_id, quantity } = req.body;
  
    try {
      const product = await Product.findByPk(id, {
        include: [{ model: Image, as: "images" }], // Incluye imágenes del producto
      });
  
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
  
      // Actualizar campos básicos
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category_id = category_id || product.category_id;
      product.quantity = quantity || product.quantity;
      await product.save();
  
      // Manejar nuevas imágenes si se enviaron
      if (req.files && req.files.length > 0) {
        for (const img of product.images) {
          const publicId = img.image.split("/").pop().split(".")[0]; // Extraer public_id
          await cloudinary.uploader.destroy(publicId);
          await img.destroy();
        }
  
        const uploadedImages = await Promise.all(
          req.files.map(async (file) => {
            const result = await cloudinary.uploader.upload(file.path);
            return await Image.create({ product_id: product.id, image: result.secure_url });
          })
        );
  
        product.images = uploadedImages;
      }
  
      res.status(200).json({ product, message: "Producto actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product no encontrado" });
    }
    await product.destroy();
    res.status(200).json({ message: "Product eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


