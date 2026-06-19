import { createProductModel, getProductsModel, getProductByIdModel, updateProductModel, deleteProductModel } from "../models/Product.js";

export const createProduct = async (req, res) => {
    const { title, description, price, stock } = req.body;

    if (!title?.trim() || !description?.trim() || price === undefined || stock === undefined){
        return res.status(400).json({ error: "Faltan datos obligatorios para el producto" });
    }

    if (isNaN(price) || isNaN(stock)){
        return res.status(400).json({ error: "El precio y/o el stock deben ser valores numéricos" });
    }

    if (price < 0 || stock < 0){
        return res.status(400).json({ error: "El precio y/o el stock deben ser mayores o iguales a cero" });
    }

    const newProduct = { title: title.trim() , description: description.trim(), price: Number(price), stock: Number(stock) };

    const product = await createProductModel(newProduct);
    
    res.status(201).json({
        message: 'Producto creado correctamente',
        product
    });
}

export const getProducts = async (req, res) => {
    const products = await getProductsModel();
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await getProductByIdModel(id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, stock } = req.body;

    if (!title?.trim() || !description?.trim() || price === undefined || stock === undefined){
        return res.status(400).json({ error: "Faltan datos obligatorios para el producto" });
    }

    if (isNaN(price) || isNaN(stock)){
        return res.status(400).json({ error: "El precio y/o el stock deben ser valores numéricos" });
    }

    if (price < 0 || stock < 0){
        return res.status(400).json({ error: "El precio y/o el stock deben ser mayores o iguales a cero" });
    }

    const updatedProduct = { title: title.trim() , description: description.trim(), price: Number(price), stock: Number(stock) };

    const product = await updateProductModel(id, updatedProduct);

    if (!product) return res.status(404).json({ error: "Producto no encontrado" });

    res.json({
        message: 'Producto actualizado correctamente',
        product
    });
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    const deletedProduct = await deleteProductModel(id);

    if (!deletedProduct) return res.status(404).json({ error: "Producto no encontrado" });

    res.json({ 
        message: 'Producto eliminado correctamente',
        product: deletedProduct
    });
}