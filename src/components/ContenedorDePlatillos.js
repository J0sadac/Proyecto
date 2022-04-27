import React from "react";

import comida from '../image/platillo.jpg'

const ContenedorPlatillo = () => {
    let platillo = {
        imagen: comida,
        nombre: "Tacos de pollo",
        precio: 100
    }

    return(
        <div className="contenedor-platillo">
            <img src={platillo.imagen} alt='comida' className="platillo-img" />
            <div className="datos">
                <h2 className="nombre">{platillo.nombre}</h2>
                <p className="precio">Precio: {platillo.precio}</p>
            </div>
        </div>
    );
};

export default ContenedorPlatillo;