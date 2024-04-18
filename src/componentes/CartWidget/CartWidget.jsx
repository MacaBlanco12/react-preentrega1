import React from 'react'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='contieneCarrito'>
         <img className='imgCarrito' src="./carrito.ico" alt="imagen de carrito rosa" />
         <strong className='contadorCarrito'>1</strong>
    </div>
   
  )
}

export default CartWidget