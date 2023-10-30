import React from 'react'
import { Slideshow } from "./../pages/Slideshow.jsx";
import './../../Stylesheets/Inicio.css'
import { Galeria } from './galeria.jsx';

const Inicio = () => {
  return (
  <main>
    <div>
      <div className='boxsigla'>
        <h1>COPRASER</h1>
        <h4>Colectivo jurídico para la protección y garantía de los derechos de los servidores públicos</h4>
      </div>
      <div>{<Slideshow />}</div>
    </div>
    <div>
      {<Galeria />}
    </div>
  </main>)
}


export default Inicio


