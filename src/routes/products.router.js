import { Router } from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

// CRUD - Create, Read, Update, Delete
// CREATE
router.post('/', auth, createProduct);

// READ
router.get('/', getProducts);
router.get('/:id', getProductById);

// UPDATE: PUT Y PATCH
router.put('/:id', auth, updateProduct);

// DELETE
router.delete('/:id', auth, deleteProduct);

export default router;