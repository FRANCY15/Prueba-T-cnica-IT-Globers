import React from 'react'
import style from '../Puff/Puff.module.css'
//imagenes
import puffIcon from '../../assets/img/puffIcon.png'
import { Link } from 'react-router-dom'
import mayorQ from '../../assets/img/mayorQ.png'
const Puff = () => {
  return (
    <div id="Puff" className={style.containerPuff}>
    <section className={style.info}>
      <img src={puffIcon} alt="Icono de puff" />
      <h3>Pufi RAIN</h3>
      <hr />
      <h4>Descripción del producto</h4>
      <Link to='/'> <span><img src={mayorQ} alt="" /></span> VER MÁS</Link>
    </section>
    <div className={style.shop}></div>
  </div>
  )
}

export default Puff