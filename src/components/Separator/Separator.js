import React from 'react';
import PropTypes from 'prop-types';
import './Separator.css';

function Separator({ text }) {
  return (
    <div className="separator">
      <div className="separator-content container">
        <h2 className="separator-title">{text}</h2>
      </div>
    </div>
  );
}
Separator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Separator;
