import React from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ error }) => {
  return (
    <div className="flex justify-center items-center m-auto min-h-screen">
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <p className="font-bold text-5xl text-gray-600">Epower</p>
          <p className="text-center">Loading....</p>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;

LoadingScreen.propTypes = {
  error: PropTypes.string.isRequired,
};
