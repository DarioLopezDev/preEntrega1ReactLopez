import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ Productos }) => {
    const { id } = useParams();
    const productID = parseInt(id, 10);
    const producto = Productos.find((p) => p.id === productID);

    if (!producto) {
        return <div>No se encontró el producto</div>;
    }

    return (
        <Center p='1rem'>
            <Card>
                <CardHeader>
                    <Heading size='md'>{producto.nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <div>
                        <Image
                            src={`/src/assets/img/${producto.imagen}`}
                            alt={producto.nombre}
                            borderRadius='md'
                            boxSize='300px'
                        />
                    </div>
                    <Text>{producto.stock}</Text>
                    <Text>{producto.descripcion}</Text>
                    <Text>{producto.precio}</Text>
                    <Text>{producto.categoria}</Text>
                </CardBody>
                <CardFooter>
                    <ItemCount />
                </CardFooter>
            </Card>
        </Center>
    );
};

export default React.memo(ItemDetail);