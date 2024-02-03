// Summary.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  const selectedShow = location.state?.show;

  return (
    <>
      <h1>Summary Page</h1>
      {selectedShow && (
        <div>
          <h2>{selectedShow.show.name}</h2>
          <p>{selectedShow.show.summary}</p>
          {/* Display other information about the selected show */}
        </div>
      )}
    </>
  );
};

export default Summary;
