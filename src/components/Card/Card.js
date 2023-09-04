import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(
  /* prettier-ignore */
  {
    className,
    count,
    imageSource,
  },
) {
  return (
    <div className="card bg-primary-blue text-white">
      <img className="card-image" src={imageSource} alt="" />
      <div className="card-actions">
        <button type="button" className="card-button">
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </div>
      <div className="card-data">
        <h3 className="card-title">{className}</h3>
        <p className="cart-count">{count}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Card;
