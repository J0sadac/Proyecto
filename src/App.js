import React from 'react';

//import NavBar from './components/NavBar'
import ContenedorDePlatillos from './components/ContenedorDePlatillos'

import './styles/styles.scss';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <h1 className='titulo'>Menu</h1>
      
      <div className='menu'>
        <ContenedorDePlatillos />
      </div>

    </div>
  );
}

export default App;
