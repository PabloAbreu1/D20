import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/home';
import Paginajuego from './Views/paginajuego';
import InicioDeSesion from './Views/inicio-de-sesion';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Utiliza el atributo "element" para especificar el componente a renderizar */}
        <Route path="/partida" element={<Paginajuego />} /> {/* Utiliza el atributo "element" para especificar el componente a renderizar */}
        <Route path="/Inicio-De-Sesion" element={<InicioDeSesion />} /> {/* Utiliza el atributo "element" para especificar el componente a renderizar */}
      </Routes>
    </Router>
  );
}

export default App;

