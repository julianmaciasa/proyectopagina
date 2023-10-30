import React from 'react';
//import temis2 from './../../imagenes/temis2.jpg';
//import temis from './../../imagenes/temis.jpg';
//import imagenbogota from './../../imagenes/imagenbogota.jpg';
import imagenbogota from './../../assets/image/imagenbogota.jpg'
import temis2 from './../../assets/image/temis2.jpg'
import temis from './../../assets/image/temis.jpg'


export const Slideshow = () => {
  return (
    <main>
      <div>
        <a href='http://localhost:5173/servicios'>
          <img src={temis2} alt='imagen servicios' />
        </a>
        <a href='http://localhost:5173/tarifas'>
          <img src={imagenbogota} alt='imagen ciudad' />
        </a>
        <a href='http://localhost:5173/contactenos'>
          <img src={temis} alt='imagen temis2' />
        </a>

      </div>

      {/* <div><Logoreact/></div> */}

      {/* <div> 
        <button>
          <Leftarrow/>
        </button>        
      </div> */}



    </main>
  )
}

export default Slideshow
