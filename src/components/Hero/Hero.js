import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/PNG/logo.png';
import './Hero.css';

function Hero({ count }) {
  return (
    <div className="hero">
      <div className="hero-content container">
        <img className="hero-image" src={Logo} alt="Brand logo" />
        <span className="hero-information">
          <h3 className="hero-title">Classes</h3>
          <p className="hero-actions">
            <span>{count}</span>
            Views
          </p>
        </span>
      </div>
    </div>
  );
}

Hero.propTypes = {
  count: PropTypes.string.isRequired,
};

export default Hero;
