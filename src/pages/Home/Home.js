import React from 'react';
import Logo from '../../assets/PNG/logo.png';
import Header from '../../components/Header/Header';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="bg-primary-blue text-white">
        <div className="md:container py-2 grid grid-cols-2 ">
          <span>
            <img src={Logo} alt="" />
          </span>
          <span className="flex flex-col justify-center">
            <h3 className="text-2xl uppercase font-bold">Games</h3>
            <p className="text-xs">2,438 Views</p>
          </span>
        </div>
      </div>
      <div className="bg-primary-blue-dark">
        <div className="md:container px-4 py-1">
          <h2 className="text-white uppercase text-xs ">Stats by Class</h2>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="card bg-primary-blue text-white">
          <img className="card-image" src={Logo} alt="" />
          <div className="card-actions">
            <button type="button" className="card-button">
              <i className="fa-solid fa-circle-arrow-right" />
            </button>
          </div>
          <div className="card-data">
            <h3 className="card-title">Druid</h3>
            <p className="cart-count">48</p>
          </div>
        </div>
        <div className="card bg-primary-blue-dark text-white">
          <img className="card-image" src={Logo} alt="" />
          <div className="card-actions">
            <button type="button" className="card-button">
              <i className="fa-solid fa-circle-arrow-right" />
            </button>
          </div>
          <div className="card-data">
            <h3 className="card-title">Druid</h3>
            <p className="cart-count">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
