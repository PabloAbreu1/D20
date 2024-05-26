import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/home';
import Paginajuego from './Views/paginajuego';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Utiliza el atributo "element" para especificar el componente a renderizar */}
        <Route path="/about" element={<Paginajuego />} /> {/* Utiliza el atributo "element" para especificar el componente a renderizar */}
      </Routes>
    </Router>
  );
}

export default App;

