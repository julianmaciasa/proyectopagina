//import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavbarAlt from './../maincomponents/NavbarAlt.jsx'
import Inicio from "../pages/Inicio.jsx";
import Tarifas from "../pages/Tarifas.jsx";
import Servicios from "../pages/Servicios.jsx";
import ContactUstwo from "../pages/Contactenos";
import './../../Stylesheets/App.css'
//"boolbase": "^1.0.0"
// "node_modules/boolbase": {
//   "version": "1.0.0",
//   "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
//   "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="
// },

export function App() {
  return <div className="App">
     
      <Router>
        <NavbarAlt/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contactenos' element={<ContactUstwo/>}/>
          <Route path='/tarifas' element={<Tarifas/>}/> 
        </Routes>
      </Router>

    </div>
  ;
}



