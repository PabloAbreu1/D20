import React, { useState } from 'react';

function Dropdawn() {
  const [resultadoDado, setResultadoDado] = useState(null);

  const tirarDado = (lados) => {
    const resultado = Math.floor(Math.random() * lados) + 1;
    setResultadoDado(resultado);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </button>
      <ul className="dropdown-menu">
            {/* Agregar opciones para diferentes tipos de dados */}
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(4)}>Tirar 1d4</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(6)}>Tirar 1d6</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(8)}>Tirar 1d8</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(10)}>Tirar 1d10</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(12)}>Tirar 1d12</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(20)}>Tirar 1d20</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => tirarDado(100)}>Tirar 1d100</a></li>
          </ul>
      {resultadoDado && <p>Resultado del dado: {resultadoDado}</p>}
    </div>
  );
}

export default Dropdawn;
