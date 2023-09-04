import React from 'react';
import PropTypes from 'prop-types';
import './Separator.css';

function Separator({ text }) {
  return (
    <div className="separator">
      <div className="separator-content">
        <h2 className="text-white uppercase text-xs ">{text}</h2>
      </div>
    </div>
  );
}
Separator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Separator;
