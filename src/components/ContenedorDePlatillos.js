import React, {} from "react";

import Imagen from './herramientas/Imagen'
import Boton from './herramientas/Boton'

import Flautas from '../image/flautas.jpg'
import Mole from '../image/mole.jpg'
import Pozole from '../image/pozole.jpg'

const ContenedorPlatillo = () => {
    let platillo = [
        {
            id: 1,
            imagen: Flautas,
            nombre: "Flautas de pollo",
            precio: 40,
        },
        {
            id: 2,
            imagen: Mole,
            nombre: "Mole",
            precio: 90,
        },
        {
            id: 3,
            imagen: Pozole,
            nombre: "Pozole",
            precio: 80,
        }
    ]

    
    return(
        
        platillo.map((platillo) => {
            
            const agregar = () => {
                alert(`Se añadio ${platillo.nombre}`)
            }

            return(
                <div className="contenedor-platillo" key={platillo.id}>
                    <Imagen 
                        imagen={platillo.imagen}
                        styles={"platillo-img"}
                        alt='Comida'
                    />

                    <div className="datos">
                        <h2 className="nombre">{platillo.nombre}</h2>
                        <p className="precio">Precio: ${platillo.precio}</p>
                    
                        <Boton 
                            nombre='Agregar'
                            styles='platillo-boton'
                            funcion={agregar}
                        />
                    </div>

                </div>

            )
        })
    );
};

export default ContenedorPlatillo;