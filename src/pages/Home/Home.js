import React from 'react';
import Logo from '../../assets/PNG/logo.png';

function Home() {
  return (
    <div className="home bg-primary-blue">
      <div className="md:container mx-auto px-4 py-3 text-white">
        <header className="flex justify-between items-center text-sm">
          <p className="font-bold flex gap-1 items-center">
            <i className="fa-solid fa-chevron-left" />
            RysthCraft
          </p>
          <p>Hearthstone</p>
          <div className="flex gap-4">
            <i className="fa-solid fa-microphone" />
            <i className="fa-solid fa-gear" />
          </div>
        </header>
        <div className="py-5 grid grid-cols-2">
          <span>
            <img className="" src={Logo} alt="" />
          </span>
          <span className="flex flex-col justify-center">
            <h2 className="text-2xl uppercase">Games</h2>
            <p className="text-sm">2,438 Views</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
