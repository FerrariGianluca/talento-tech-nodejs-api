import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) res.status(401).json({ error: "Token no enviado" });

    const token = authHeader.split(" ")[1];
    if (!token) res.status(401).json({ error: "Formato de token inválido" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
}
