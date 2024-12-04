const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Get all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Create a new product with image upload
router.post('/', upload.single('image'), createProduct);

// Update a product
router.put('/:id', upload.single('image'), updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
