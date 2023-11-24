import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Productos, setProductos] = useState([]);
    const { id } = useParams();

    const cargarProductos = async () => {
        try {
            const response = await fetch('/src/data/api.json')
            const data = await response.json();

            if (data) {
                setProductos(data);
            } else {
                console.error('El archivo JSON no tiene la propiedad "Productos".', data);
            }
        } catch (error) {
            console.error('Error al cargar productos:', error);
        }
    };

    const getProductos = () => cargarProductos();

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <>
            {Productos.length > 0 ? (
                <ItemDetail Productos={Productos} />
            ) : (
                <div>No se encontraron productos.</div>
            )}
        </>
    );
};
export default ItemDetailContainer;