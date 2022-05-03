import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../NavBar';

import Platillos from '../ContenedorDePlatillos';
import Bebidas from '../ContenedorDeBebidas';

const Router = () => {

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<>
                                                    <Platillos />
                                                    <Bebidas />       
                                                </>} />
                <Route exact path='/platillos' element={<Platillos />} />
                <Route exact path='/bebidas' element={<Bebidas />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;