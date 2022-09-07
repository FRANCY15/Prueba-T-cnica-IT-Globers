import React from 'react'
import '../Footer/Footer.css'
//imagenes
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/gorjeo.png'
import instagram from '../../assets/img/instagram.png'
import safetyBuy from '../../assets/img/proteger.png'

const Footer = () => {
  return (
    <>
    <hr className='hrShadow' />
    <footer id="footer" className="pb-4 pt-4 footer">
      <div className='footerItem'>
        <a href='#Home'><img  className="logo" src={logo} alt="Logo" /></a>
      </div>
      <div className='footerItem'>
        <a href="#Rain">RAIN</a>
        <a href="#Puff">PUFF</a>
        <a href="#Cart">CART</a>
        <a href="#Nap">NAP</a>
      </div>
      <div className='footerItem'>
        <a href="/">CONTACTO</a>
        <a href="/">AYUDA</a>
        <a href="/">CÓMO COMPRAR</a>
        <a href="/">TÉRMINOS Y CONDICIONES</a>
      </div>
      <div className='footerItem'>
        <a href="/">COMPRA 100% SEGURA</a>
        <img src={safetyBuy} alt="Compra segura Icono" />
        <h4>COMPRÁ CON LA GARANTÍA DE PUFI</h4>
      </div>
      <div className='footerSocialNetwork'>
        <p>SEGUINOS EN :</p>
        <a href="https://es-la.facebook.com/"><img src={facebook} alt="Icono Facebook" /></a>
        <a href="https://twitter.com/?lang=es"><img src={twitter} alt="Icono Twitter" /></a>
        <a href="https://www.instagram.com/"><img src={instagram} alt="Icono Instagram" /></a>
      </div>
    </footer>
    <hr className='hrShadow'/>
    <p>PUFI Copyright 2022 - Todos los derechos reservados</p>
    </>
  )
}

export default Footer