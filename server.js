const express = require('express');
const path = require('path');
const app = express();
const { getAllProducts, getProductById, getProductsByCategory } = require('./src/api/products');

// Serve static files from the root directory
app.use(express.static(__dirname));

// API endpoints
app.get('/api/products', (req, res) => {
    const products = getAllProducts();
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = getProductById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.get('/api/categories/:id/products', (req, res) => {
    const products = getProductsByCategory(req.params.id);
    res.json(products);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Try different ports if one is in use
const ports = [3000, 3001, 3002, 3003];

function startServer(ports) {
    const port = ports.shift();
    if (!port) {
        console.error('No available ports');
        process.exit(1);
    }

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is busy, trying next port...`);
            startServer(ports);
        } else {
            console.error(err);
        }
    });
}

startServer([...ports]);
