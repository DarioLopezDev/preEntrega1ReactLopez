import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList,MenuItem,Flex,Box,Spacer } from '@chakra-ui/react'



const NavBar = () => {
  return (
    <div>
        <Flex>
  <Box p='4'>
        <h3>SuperMascotas MilKiBoyCo</h3>
  </Box>
  <Spacer />

        <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>Alimentos Balanceados</MenuItem>
    <MenuItem>Accesorios Caninos</MenuItem>
    <MenuItem>Remedios Caninos</MenuItem>
    <MenuItem>Casas Para Tu Mascota</MenuItem>
    <MenuItem>Juguetes Para tu Mascota</MenuItem>
  </MenuList>
</Menu>
  <Spacer />
  <Box p='4'>
        <CartWidget />
  </Box>
</Flex>

    </div>
  )
}

export default NavBar