import { generateToken } from "../utils/token.generator.js";

const default_user = {
    id: 1,
    name: "User",
    email: "user@email.com",
    password: "strongPass123",
    admin: true
}

export const login = (req, res) => {
    const { email, password } = req.body
    
    if (!email || !password) res.status(400).json({ error: "Faltan credenciales" });
    if (email !== default_user.email || password !== default_user.password) res.status(401).json({ error: "Credenciales inválidas" });
    
    const token = generateToken(default_user);

    res.json({ message: "Login exitoso", token });
}