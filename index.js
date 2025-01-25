const express = require('express');
const app = express();
const PORT = 3000;
const shoppingCartRoutes = require('./routes/ShoppingCartRoutes');
const cartItemRoutes = require('./routes/CartItemsRoutes');
const productRoutes = require('./routes/ProductRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const orderRoutes = require('./routes/OrderRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const authRoutes = require('./routes/AuthRouter');

// Middleware
app.use(express.json());

// Rutas para shppingcart
app.use('/api/shopping-cart', shoppingCartRoutes);
// Rutas para CartItem
app.use('/api/cart-items', cartItemRoutes);
// Rutas para Product
app.use('/api/products', productRoutes);
// Rutas para Category
app.use('/api/categories', categoryRoutes);
// Rutas para Order
app.use('/api/orders', orderRoutes);
// Rutas para Admin
app.use('/api/admin', adminRoutes);
// Rutas para Auth
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
