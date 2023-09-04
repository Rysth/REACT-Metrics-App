import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classesActions } from '../../redux/Classes/ClassesSlice';

function Header() {
  const { classSelected } = useSelector((store) => store.classes);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleReturnHome = () => {
    dispatch(classesActions.removeClassSelected());
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
          {classSelected ? 'Return' : 'RysthCraft'}
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
