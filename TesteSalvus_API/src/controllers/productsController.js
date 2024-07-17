const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message, result: [] });
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.getProductsByCategory(category);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message, result: [] });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Produto não encontrado', result: {} });
        }
    } catch (error) {
        res.status(500).json({ error: error.message, result: {} });
    }
};

const getDiscountedProducts = async (req, res) => {
    try {
        const products = await Product.getDiscountedProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message, result: [] });
    }
};

const getRandomDiscountedProduct = async (req, res) => {
    try {
        const products = await Product.getDiscountedProducts();
        if (products.length === 0) {
            return res.status(404).json({ error: 'Nenhum produto encontrado em promoção', result: {} });
        }
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        res.json(randomProduct);
    } catch (error) {
        res.status(500).json({ error: error.message, result: {} });
    }
};

const getUpcomingProducts = async (req, res) => {
    try {
        const products = await Product.getUpcomingProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message, result: [] });
    }
};

module.exports = {
    getProducts,
    getProductsByCategory,
    getProductById,
    getDiscountedProducts,
    getRandomDiscountedProduct,
    getUpcomingProducts
};
