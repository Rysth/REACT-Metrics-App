import React from 'react';

function Home() {
  return (
    <div className="home bg-primary-blue">
      <div className="md:container mx-auto px-4 py-3 text-white">
        <header className="home-header flex justify-between items-center text-sm">
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
      </div>
    </div>
  );
}

export default Home;
