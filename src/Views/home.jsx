import React from 'react';
import Navbar from '../components/navbar';
import Miajuega from '../components/miajuega';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <h1 className='' style={{marginLeft: '600px', marginTop: '20px', marginBottom: '20px'}}>Mis Partidas</h1>
        <div>
        <Miajuega />
        </div>
      </div>
    </div>
  );
}
export default Home;