import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Rain/Rain.module.css'
//imagenes
import umbrellaRain from '../../assets/gifs/paraguas.gif'
import mayorQ from '../../assets/img/mayorQ.png'


const Rain = () => {
  return (
    <div id="Rain" className={style.containerRain}>
      <section className={style.shop}><button>SHOP</button></section>
      <section className={style.info}>
        <img src={umbrellaRain} alt="Mujer bajo la lluvia" />
        <h3>Pufi RAIN</h3>
        <hr />
        <h4>Descripción del producto</h4>
        <Link to='/'> <span><img src={mayorQ} alt="" /></span> VER MÁS</Link>
      </section>
    </div>
  )
}

export default Rain