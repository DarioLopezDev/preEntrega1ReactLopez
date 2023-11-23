import React from 'react';
import Item from './Item';

const ItemList = ({ Productos }) => {
    // Verifica si Productos es un array antes de intentar mapearlo
    if (!Array.isArray(Productos)) {
        console.error("Productos no es un array:", Productos);
        return null; 
    }

    return (
        <>
            {Productos.map(({ id, nombre, descripcion, precio, stock, categoria, imagen }) => (
                <Item 
                    key={id}
                    id={id}
                    nombre={nombre}
                    descripcion={descripcion}
                    precio={precio}
                    stock={stock}
                    categoria={categoria}
                    imagen={imagen}
                />
            ))}
        </>
    );
}

export default React.memo(ItemList);