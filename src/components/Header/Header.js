import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { classesActions } from '../../redux/Classes/ClassesSlice';
import './Header.css';

function Header() {
  const { classSelected } = useSelector((store) => store.classes);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleReturnHome = () => {
    dispatch(classesActions.removeClassSelected());
    navigator('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="header bg-primary-blue-dark"
    >
      <div className="header-content container">
        <button
          type="button"
          className="header-button"
          onClick={handleReturnHome}
        >
          <i className="fa-solid fa-chevron-left" />
          {classSelected ? 'Return' : 'RysthCraft'}
        </button>
        <p>Dungeons & Dragons</p>
        <div className="header-actions">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
