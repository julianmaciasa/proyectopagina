import React from 'react'
import { Link } from 'react-router-dom'
import './../../Stylesheets/Servicios.css'

const Servicios = () => {
  return (
    <div>
      <h1 className='mainservicebox'> 
        Servicios dirigidos a empleados públicos de carrera administrativa
      </h1>
      <p>
      Asesoría, acompañamiento y representación en casos de acoso laboral (Ley 1010 de 2006).
      <Link to="/tarifas">Tarifas</Link>  
      </p>
      <p>
      Asesoría, acompañamiento y representación en procesos disciplinarios (Ley 734 de 2002 y Ley 1952 de 2019).
      <Link to="/tarifas">Tarifas</Link> 
      </p>
      <p>
      Asesoría y elaboración de reclamaciones en procesos de encargos -aplica para funcionarios públicos que tienen calificación definitiva sobresaliente de periodo de prueba-.
      <Link to="/tarifas">Tarifas</Link> 
      </p>
      <p>

      </p>
    </div>


  )
}



export default Servicios