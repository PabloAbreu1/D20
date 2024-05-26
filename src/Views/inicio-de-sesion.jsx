import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InicioORegistro from '../components/iniciooregistro';

const InicioDeSesion = () => {
  return (
    <div className="App">
      <Navbar />
      <InicioORegistro />
      <Footer />
    </div>
  );
}
export default InicioDeSesion;