// Summary.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

const Summary = () => {
  const { showId } = useParams();
  const [shows] = useContext(UserContext);

  // Find the selected show based on showId
  const selectedShow = shows.find((show) => show.show.id === parseInt(showId, 10));

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
