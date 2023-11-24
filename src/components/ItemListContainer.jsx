import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [Productos, setProductos] = useState([]);
    const { CategoriaID } = useParams();

    const getProdByCat = async () => {
        // Lógica para obtener productos por categoría
        try {
            const response = await fetch(`/src/data/api.json?Categoria=${CategoriaID}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener productos por categoría:", error);
        }
    };

    const getProductos = async () => {
        // Lógica para obtener todos los productos
        try {
            const response = await fetch('/src/data/api.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener todos los productos:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const funcionProductos = CategoriaID ? getProdByCat : getProductos;

            try {
                const res = await funcionProductos();
                setProductos(res);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();

    }, [CategoriaID]);

    return (
        <>
            <ItemList Productos={Productos} />
        </>
    );
}

export default ItemListContainer;