import React from 'react'
import style from '../Cart/Cart.module.css'
//imagenes
import bagIcon from '../../assets/gifs/bolsa.gif'
import { Link } from 'react-router-dom'
import mayorQ from '../../assets/img/mayorQ.png'


const Cart = () => {
  return (
    <div id="Cart" className={style.containerCart}>
    <div className={style.shop}></div>
    <section className={style.info}>
      <img src={bagIcon} alt="Icono de bolsa de compras" />
      <h3>Pufi CART</h3>
      <hr />
      <h4>Descripción del producto</h4>
      <Link to='/'> <span><img src={mayorQ} alt="" /></span> VER MÁS</Link>
    </section>
  </div>
  )
}

export default Cart