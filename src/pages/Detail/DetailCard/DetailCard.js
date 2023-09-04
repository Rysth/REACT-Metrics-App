import React from 'react';
import PropTypes from 'prop-types';

function DetailCard({ text, isDark }) {
  return (
    <div
      className={
        isDark
          ? 'detail-card bg-primary-blue-dark'
          : 'detail-card bg-primary-blue'
      }
    >
      <h4 className="detail-card title">{text}</h4>
      <div className="detail-card actions">
        <p className="detail-card info">300 views</p>
        <button type="button" className="detail-card button">
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  text: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default DetailCard;
