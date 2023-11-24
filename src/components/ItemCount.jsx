import React, { useState } from 'react'
import { Button, Badge } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const addCart = () => {
        if (counter > 0) {
            toast.success(`Has agregado ${counter} producto/s al carrito`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('No has seleccionado ningun producto', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    return (
        <>
            <div>
                <div>

                    <Button colorScheme='red' variant='ghost' onClick={decrement}>
                        -
                    </Button>

                    <Badge colorScheme='purple'>{counter}</Badge>

                    <Button colorScheme='blue' variant='ghost' onClick={increment}>
                        +
                    </Button>
                </div>
                <div>
                    <Button colorScheme='linkedin' onClick={addCart}>Agregar al carrito</Button>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}


export default ItemCount