import React from 'react';
import PropTypes from 'prop-types';

function DetailCard({ text, isDark, count }) {
  return (
    <div className={isDark ? 'bg-primary-blue-dark' : 'bg-primary-blue'}>
      <div className="detail-card container">
        <h4 className="detail-card title">{text}</h4>
        <div className="detail-card actions">
          <p className="detail-card info">
            <span>{count}</span>
            views
          </p>
          <button type="button" className="detail-card button">
            <i className="fa-solid fa-circle-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  text: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

export default DetailCard;
