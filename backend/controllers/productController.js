const Product = require('../models/Product');

// Fetch all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create a new product
// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imagePath = req.file ? `https://smart-yoga-products-backend.onrender.com/uploads/${req.file.filename}` : null;
    const newProduct = await Product.create({ name, price, description, image: imagePath });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};



  
  // Update an existing product
  const updateProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.path : null;
  
    try {
      const updatedData = { name, description, price };
      if (image) updatedData.image = image;
  
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedData, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };  

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
