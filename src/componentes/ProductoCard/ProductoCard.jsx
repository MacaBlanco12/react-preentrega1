import React from 'react'
import ProductoImagen from '../ProductoImagen/ProductoImagen'
import ProductoBoton from '../ProductoBoton/ProductoBoton'
import ProductoInfo from '../ProductoInfo/ProductoInfo'
const ProductoCard = () => {
  return (
    <div>
        
        <ProductoInfo/>
        <ProductoBoton/>
        <ProductoImagen/>
    </div>
  )
}

export default ProductoCard