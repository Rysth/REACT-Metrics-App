import React from 'react';
import PropTypes from 'prop-types';

function Separator({ text }) {
  return (
    <div className="bg-primary-blue-dark">
      <div className="md:container px-4 py-1">
        <h2 className="text-white uppercase text-xs ">{text}</h2>
      </div>
    </div>
  );
}
Separator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Separator;
