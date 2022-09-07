import React from "react";
import logo from '../../assets/img/logo.png';
import '../Navbar/Navbar.css';
//imagenes
import umbrella from '../../assets/img/umbrella.png';
import cart from '../../assets/img/carts.png';
import puff from '../../assets/img/bean-bag.png';
import nap from '../../assets/img/sleep.png';


const Navbar = () => {
  return (
    <nav className="Navbar navbar fixed-top bg-light">
      <div className="NavbarLogo">
        <a href="#Home"><img src={logo} alt="Logo empresa" />Go For It</a>
      </div>
      <div className="NavbarOptions">
        <a  href="#Puff"><img src={puff} alt="Puff" /> Puff </a>
        <a  href="#Rain"><img src={umbrella} alt="Umbrella" /> Rain </a>
        <a  href="#Cart"><img src={cart} alt="Cart" /> Cart </a>
        <a  href="#Nap"><img src={nap} alt="Nap" /> Nap</a>
      </div>
      <div className="account">
        <select name="miCuenta" id="cuenta">
          <option value="myAccount">Mi Cuenta</option>
        </select>
        <a href="/">Mi compra</a>
      </div>
    </nav>
  );
};

export default Navbar;
