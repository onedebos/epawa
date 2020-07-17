import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ children, handlePrev, handleNext }) => (
  <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    {children}
    <div className="flex justify-center m-auto space-x-4">
      <button
        type="button"
        onClick={handlePrev}
        className="text-xl font-bold hover:font-2xl outline-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="text-xl font-bold outline-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600"
      >
        Next
      </button>
    </div>
  </div>
);

Pagination.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Pagination;
