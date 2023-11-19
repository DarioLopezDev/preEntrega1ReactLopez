import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const Productos = [
        { id: 1, nombre: "Collar celeste", descripcion: "Collar color celeste", precio: 400, stock: 10, categoria: "cat1" },
        { id: 2, nombre: "Pechera Pesada", descripcion: "Pechera para perros grandes de alta resistencia", precio: 350, stock: 12, categoria: "cat2" },
        { id: 3, nombre: "Juguetes para Perros", descripcion: "Juguetes con sonidos para perros", precio: 250, stock: 24, categoria: "cat3" },
        { id: 4, nombre: "Juguetes para Gatos", descripcion: "Juguetes diseñados para gatos", precio: 300, stock: 13, categoria: "cat3" },
        { id: 5, nombre: "Collar Azul", descripcion: "Collar color azul", precio: 800, stock: 25, categoria: "cat1" },
        { id: 6, nombre: "Cardial para Perros", descripcion: "Pastilla para el cuidado del Corazon en perros", precio: 560, stock: 26, categoria: "cat4" },

    ]

    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Productos);
            }, 500)
        })
    }
    
    const getUnProducto = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Convert ItemID to number
                const itemID = parseInt(id, 10);
                const producto = Productos.find((item) => item.id === itemID);
                resolve(producto);
            }, 500);
        });
    };
    
    
    const getProdByCat = (CategoriaID) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const productosCategoria = Productos.filter(item => item.categoria === CategoriaID);
                resolve(productosCategoria);
            }, 500)
        })
    }
}

export default ItemDetailContainer