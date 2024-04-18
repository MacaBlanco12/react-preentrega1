import React from 'react'
import ProductoCard from './componentes/ProductoCard/ProductoCard'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
const App = () => {
 
  return (
    <div>
      
      <NavBar/>
      <ItemListContainer greeting={"DEPILACION DEFINITIVA"}/>
      
    </div>
  )
}

export default App