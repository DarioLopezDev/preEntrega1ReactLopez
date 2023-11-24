import React from 'react'
import { Badge } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <>
      <Spacer />
      <div className='logoCarrito'>
        <Flex align='center' justify='center'>
          <FaShoppingCart />
        </Flex>
        <h3 className='numeroCarrito'><Badge colorScheme='purple'></Badge></h3>
      </div>
    </>
  )
}

export default CartWidget