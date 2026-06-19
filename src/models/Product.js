import db from '../config/firebase.js';
import { collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export const createProductModel = async (product) => {
    const productRef = await addDoc(productsCollection, product);
    
    return {
        id: productRef.id,
        ...product
    };
}

export const getProductsModel = async () => {
    const snapshot = await getDocs(productsCollection);
    const products = [];

    snapshot.forEach(doc => {
        products.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return products;
}

export const getProductByIdModel = async (id) => {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) return null;

    return {
        id: snapshot.id,
        ...snapshot.data()
    };
}

export const updateProductModel = async (id, product) => {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) return null;

    await updateDoc(productRef, product);
    
    return {
        id,
        ...product
    };
}

export const deleteProductModel = async (id) => {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) return null;

    await deleteDoc(productRef);

    const deletedProduct = {
        id: snapshot.id,
        ...snapshot.data()
    };

    return deletedProduct;
}