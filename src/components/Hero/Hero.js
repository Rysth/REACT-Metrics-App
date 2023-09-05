import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Logo from '../../assets/PNG/logo.png';
import './Hero.css';

function Hero({ count }) {
  return (
    <motion.div
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="hero"
    >
      <div className="hero-content container">
        <img className="hero-image" src={Logo} alt="Brand logo" />
        <span className="hero-information">
          <h3 className="hero-title">Classes</h3>
          <p className="hero-actions">
            <span>{count}</span>
            Classes
          </p>
        </span>
      </div>
    </motion.div>
  );
}

Hero.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Hero;
