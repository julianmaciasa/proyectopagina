import React, { useState } from "react";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavbarAlt from "../maincomponents/NavbarAlt";
import Inicio from "../pages/Inicio.jsx";
import Tarifas from "../pages/Tarifas.jsx";
import Contactenos from "../pages/Contactenos.jsx";
import Servicios from "../pages/Servicios.jsx";


export function App() {
  return (
    <div className="App">
     
      <Router>
        <NavbarAlt/>
        <Routes>
          <Route path='./inicio' exact component={Inicio}/>
          <Route path='./servicios' component={Servicios}/>
          <Route path='./servicios' component={Contactenos}/>
          <Route path='./servicios' component={Tarifas}/>
        </Routes>
      </Router>

      
    </div>
  );
}



