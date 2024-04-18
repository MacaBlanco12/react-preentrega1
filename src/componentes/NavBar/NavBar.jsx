import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (
        <header className='lista'>

            <nav>
                <ul className='lista'>
                    <li >Hombres</li>
                    <li>Mujeres</li>
                    <li>Adolescentes</li>
                    <li>Refuerzos</li>
                </ul>
            </nav>
            <img className="logoSinFondo" src="./sinfondo.ico" alt="logo mab azul " />
            <CartWidget />
        </header>
    )
}

export default NavBar