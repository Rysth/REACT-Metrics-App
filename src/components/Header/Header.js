import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigator = useNavigate();

  const handleReturnHome = () => {
    navigator('/');
  };

  return (
    <header className="text-sm bg-primary-blue-dark">
      <div className="md:container flex justify-between items-center px-4 py-3 text-white">
        <button
          type="button"
          className="font-bold flex gap-1 items-center"
          onClick={handleReturnHome}
        >
          <i className="fa-solid fa-chevron-left" />
          Return
        </button>
        <p>Dungeons & Dragons</p>
        <div className="flex gap-4">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </header>
  );
}

export default Header;
