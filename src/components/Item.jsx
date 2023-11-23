import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, ButtonGroup, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, precio, categoria, imagen }) => {
    const rutaImagen = `/src/assets/img/${imagen}`;
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{nombre}</Heading>
                </CardHeader>
                <CardBody>
                <Image
                        src={rutaImagen}
                        alt={nombre}
                        borderRadius='lg'
                    />
                    <Text>{descripcion}</Text>
                    <Text>{precio}</Text>
                    <Text>{categoria}</Text>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to = {`/Cart`}>
                            <Button variant='solid' colorScheme='violet'>
                                Agregar al carrito
                            </Button>
                        </Link>
                        <Link to={`./Item/${id}`}>
                            <Button variant='ghost' colorScheme='violet'>
                                Detalles
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>

    )
}

export default Item