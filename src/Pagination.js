import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ children, handlePrev, handleNext }) => {
  return (
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      {children}
      <div className="flex justify-center m-auto space-x-4">
        <button
          type="button"
          onClick={handlePrev}
          className="text-xl font-bold hover:font-2xl transition transition-all ease-in-out"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="text-xl font-bold hover:font-2xl transition transition-all ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Pagination;
