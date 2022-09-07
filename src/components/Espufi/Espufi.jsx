import React from 'react'
import style from '../Espufi/Espufi.module.css'
//imagenes
import collage from '../../assets/img/collage.png'
import Subscribe from '../Subscribe/Subscribe'

const Espufi = () => {
  return (
    <div className={style.Container}>
        <h5>INSTAGRAM</h5>
        <h4>#ESPUFI</h4>
        <img className={style.collage} src={collage} alt="collage products" />
        <h5>NEWSLETTER</h5>
        <h4>SUSCRIBITE</h4>
        <h6>Y enterate de todas las novedades</h6>
      <div>
        <Subscribe />
      </div>
    </div>
  )
}

export default Espufi