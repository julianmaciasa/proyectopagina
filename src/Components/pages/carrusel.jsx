import React from 'react';
import './../../Stylesheets/carrusel.css';
import { Slide } from 'react-slideshow-image';
import temis2 from './../../imagenes/temis2.jpg';
import temis from './../../imagenes/temis.jpg';
import imagenbogota from './../../imagenes/imagenbogota.jpg';


export const Carrusel = () => {
    const images = [
        temis, temis2, imagenbogota
    ]
  return (
    <Slide>
        <div className='each-slide-effect'> 
            <div style={{ 'backgroundImage': `url(${images[0]})`}}>
                <span>temis</span>
            </div>
        </div>
        <div className='each-slide-effect'> 
            <div style={{ 'backgroundImage': `url(${images[1]})`}}>
                <span>temis2</span>
            </div>
        </div>
        <div className='each-slide-effect'> 
            <div style={{ 'backgroundImage': `url(${images[2]})`}}>
                <span>imagenbogota</span>
            </div>
        </div>
    </Slide>
  )
}
