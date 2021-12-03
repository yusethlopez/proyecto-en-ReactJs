import React from 'react'
import persona from "../assets/Ellipse 1.png";
import plantita from "../assets/Rectangle 1.1.png";
import Descripcion from "./Descripcion";
import Name from './Name';
import "./style/Card.css"
function Card() {
    return (
        <div className="card">
            <img className="plantita" src={plantita} alt="se muestran hojas de plantas" />
            <img className="persona" src={persona} alt="se muestra una persona" />
            <Name />
            <Descripcion/>
        </div>
    )
}

export default Card
