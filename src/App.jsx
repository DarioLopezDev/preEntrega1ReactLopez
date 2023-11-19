import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/categoria/:categoriaID" element={<ItemListContainer />} />
          <Route exact path='/item/:ItemID' element={<ItemDetailContainer/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
