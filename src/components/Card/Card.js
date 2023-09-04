import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchClassBySlug } from '../../redux/Classes/ClassesSlice';
import './Card.css';

function Card(
  /* prettier-ignore */
  {
    slug,
    title,
    count,
    imageSource,
  },
) {
  const dispatch = useDispatch();

  const handleClassSelected = () => {
    dispatch(fetchClassBySlug(slug));
  };

  return (
    <Link
      to="/home"
      className="card text-white bg-primary-blue"
      onClick={handleClassSelected}
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
