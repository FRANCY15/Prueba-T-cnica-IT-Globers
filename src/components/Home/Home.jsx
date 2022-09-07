import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from '../Home/Home.module.css'
//imagenes
import playa1 from '../../assets/img/carouselImg1.png';
import playa2 from '../../assets/img/carouselImg2.png';
import playa3 from '../../assets/img/carouselImg3.png';

const Home = () => {
  return (
    <>
    <Navbar />
    <div id='Home' className={style.Container} >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={playa1} className="d-block w-100" alt="Playa y sandalias" />
          </div>
          <div className="carousel-item">
            <img src={playa2} className="d-block w-100" alt="playa y flores" />
          </div>
          <div className="carousel-item">
            <img src={playa3} className="d-block w-100" alt="playa y asoleadoras" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={style.sectionButton}>
        <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL</h2>
        <button>Shop</button>
      </div>
    </div>
    </>
  )
}

export default Home