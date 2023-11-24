import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'



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
            <MenuItem>Alimentos</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Remedios</MenuItem>
            <MenuItem>Juguetes</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box >
          <CartWidget />
        </Box>
      </Flex>

    </div>
  )
}

export default NavBar