import React from 'react';

function Header() {
  return (
    <header className="text-sm bg-primary-blue-dark">
      <div className="md:container flex justify-between items-center px-4 py-3 text-white">
        <p className="font-bold flex gap-1 items-center">
          <i className="fa-solid fa-chevron-left" />
          RysthCraft
        </p>
        <p>Hearthstone</p>
        <div className="flex gap-4">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </header>
  );
}

export default Header;
