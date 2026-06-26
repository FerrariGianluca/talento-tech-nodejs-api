import { Router } from 'express';
import { login } from "../controllers/auth.controller.js";

const router = Router();

// Prefijo: /api/auth

router.post("/login", login);

export default router;