import express from 'express';
import { ProductController } from '../controllers';

const { addNewProduct, getAllProducts, editProduct, deleteProduct } = ProductController;

const router = express.Router();

router.route('/create').post(addNewProduct);
router.route('/all').get(getAllProducts);
router.route('/:id')
  .patch(editProduct)
  .delete(deleteProduct)

export default router;
