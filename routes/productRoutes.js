const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateStock,
  deleteProduct,
  getLowStockProducts,
  getCategorySummary
} = require('../controllers/productController');

// Special report routes must be declared before /:id to avoid path conflicts
router.route('/low-stock').get(getLowStockProducts);
router.route('/summary').get(getCategorySummary);

router.route('/')
  .get(getProducts)
  .post(createProduct);

router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/:id/stock').patch(updateStock);

module.exports = router;
