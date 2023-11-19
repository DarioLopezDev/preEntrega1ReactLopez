import React, { useState } from 'react'
import { Button, Badge, Toast } from '@chakra-ui/react'
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
    if (count > 0) {
        toast.success(`Has agregado ${count} producto/s al carrito`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
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
            theme: "dark",
        });
    }
}
return (
    <>
    <div className='countContainer'>
        <div className='classCount'>

            <Button colorScheme='teal' variant='ghost' onClick={decCount}>
                -
            </Button>

            <Badge colorScheme='purple'>{count}</Badge>

            <Button colorScheme='teal' variant='ghost' onClick={incContador}>
                +
            </Button>
        </div>
        <div className='classCount'>
            <Button colorScheme='linkedin' onClick={addCart}>Agregar al carrito</Button>
            <ToastContainer />
        </div>
    </div>
        {/* <div className='classCount'>
            <Button colorScheme='linkedin' onClick={addCart}>Agregar al carrito</Button>
        </div> */}
    </>
)
}


export default ItemCount