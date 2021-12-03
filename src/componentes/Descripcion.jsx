import React from 'react'
import "./style/Descripcion.css"
import instagram from "../assets/Insta.png";
import Vec from "../assets/Vector.png";

function Descripcion() {
    return (
        <div className="fooder">
         <img className="icono" src={Vec} alt="icono de in" /> <a>Yanetas34 </a>
         <img className="insta" src={instagram} alt="icono de instagram" /> <a>Yanetas34 </a>
        </div>
    )
}

export default Descripcion
