const express = require('express');
const app = express();
const PORT = 3000;
const shoppingCartRoutes = require('./routes/ShoppingCartRoutes');
const cartItemRoutes = require('./routes/CartItemsRoutes');
const orderItemRoutes = require('./routes/OrderItemRoutes');

// Middleware
app.use(express.json());

// Rutas para shppingcart
app.use('/api/shopping-cart', shoppingCartRoutes);
// Rutas para CartItem
app.use('/api/cart-items', cartItemRoutes);
// Rutas para OrderItem
app.use('/api/orderitems', orderItemRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
