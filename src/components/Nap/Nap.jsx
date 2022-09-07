import React from 'react'
import style from '../Nap/Nap.module.css'
//imagenes
import almohadaIcon from '../../assets/gifs/almohada.gif'
import { Link } from 'react-router-dom'
import mayorQ from '../../assets/img/mayorQ.png'
const Nap = () => {
  return (
    <div id="Nap" className={style.containerNap}>
    <section className={style.info}>
      <img src={almohadaIcon} alt="Icono de almohada" />
      <h3>Pufi NAP</h3>
      <hr />
      <h4>Descripción del producto</h4>
      <Link to='/'> <span><img src={mayorQ} alt="" /></span> VER MÁS</Link>
    </section>
    <div className={style.shop}></div>
  </div>
  )
}

export default Nap