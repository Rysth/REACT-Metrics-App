import React from 'react';

function DetailCard() {
  return (
    <div className="detail-card p-4 py-6">
      <h4 className="detail-card title">Hello World!</h4>
      <div className="detail-card actions">
        <p className="detail-card info">500 views</p>
        <button type="button" className="detail-card button">
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default DetailCard;
