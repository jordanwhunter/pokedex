import React from 'react';

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div>
      {/* this method is another way in which you can perform an IF gate in React: put the variable you want to check in front and then render everything after the ampersands. The second section will never be run if the first section results false */}
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}

export default Pagination