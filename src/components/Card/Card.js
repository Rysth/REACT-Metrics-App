import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, count, imageSource }) {
  return (
    <div className="card bg-primary-blue text-white">
      <img className="card-image" src={imageSource} alt="" />
      <div className="card-actions">
        <button type="button" className="card-button">
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </div>
      <div className="card-data">
        <h3 className="card-title">{title}</h3>
        <p className="cart-count">{count}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Card;
