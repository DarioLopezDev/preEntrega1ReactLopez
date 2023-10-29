import React from 'react'
import { Badge } from '@chakra-ui/react'

import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
        <h5><FaShoppingCart/></h5>
        <Badge colorScheme='purple'>5</Badge>
    </div>
  )
}

export default CartWidget