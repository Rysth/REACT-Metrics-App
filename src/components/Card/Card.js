import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';
import { darkCards } from '../../redux/Classes/Data/Images';

function Card(
  /* prettier-ignore */
  {
    slug,
    title,
    count,
    imageSource,
  },
) {
  const isDark = darkCards.includes(slug);

  return (
    <Link
      to={`/class/${slug}`}
      className={isDark ? 'card bg-primary-blue-dark' : 'card bg-primary-blue'}
    >
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
    </Link>
  );
}

Card.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Card;
