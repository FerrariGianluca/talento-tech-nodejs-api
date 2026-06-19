import db from '../config/firebase.js';
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

const productos = [
    {
        title: "Laptop Dell XPS 13",
        description: "Laptop ultraligera con procesador Intel Core i7 y 16GB de RAM",
        price: 1299.99,
        stock: 15
    },
    {
        title: "Mouse Logitech MX Master 3",
        description: "Mouse inalámbrico ergonómico con precisión avanzada",
        price: 99.99,
        stock: 42
    },
    {
        title: "Teclado Mecánico RGB",
        description: "Teclado mecánico con switches Cherry MX y iluminación RGB",
        price: 159.99,
        stock: 28
    },
    {
        title: "Monitor LG UltraWide 34\"",
        description: "Monitor curvo ultraancho 3440x1440 para productividad máxima",
        price: 799.99,
        stock: 8
    },
    {
        title: "Auriculares Sony WH-1000XM5",
        description: "Auriculares con cancelación de ruido y audio de alta calidad",
        price: 379.99,
        stock: 22
    },
    {
        title: "Webcam Logitech C922",
        description: "Webcam Full HD con corrección de luz automática",
        price: 79.99,
        stock: 35
    },
    {
        title: "Hub USB-C 7 en 1",
        description: "Hub multiconexión con puertos USB 3.0, HDMI y cargador",
        price: 49.99,
        stock: 56
    },
    {
        title: "Mousepad SteelSeries QcK",
        description: "Mousepad grande de tela con base antideslizante",
        price: 29.99,
        stock: 70
    }
];

const createProducts = () => {
    productos.forEach(async (producto) => {
        await addDoc(productsCollection, producto);
    });
}

createProducts();