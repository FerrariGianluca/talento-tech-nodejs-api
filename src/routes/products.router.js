import { Router } from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

// CRUD - Create, Read, Update, Delete
// CREATE
router.post('/', createProduct);

// READ
router.get('/', getProducts);
router.get('/:id', getProductById);

// UPDATE: PUT Y PATCH
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id', deleteProduct);

export default router;