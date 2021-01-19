import React from 'react';
import { ChevronDoubleLeft, ChevronDoubleRight } from 'react-bootstrap-icons';

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className='mx-auto'>
      {/* this method is another way in which you can perform an IF gate in React: put the variable you want to check in front and then render everything after the ampersands. The second section will never be run if the first section results false */}
      {
        goToPrevPage && 
        <button
          className='badge badge-pill badge-danger'
          type='button'
          onClick={goToPrevPage}
          style={{
            marginBottom: '20px',
            padding: '10px'
          }}
        >
          <ChevronDoubleLeft />
        </button>
      }
      <span>
        &nbsp;&nbsp;&nbsp;
      </span>
      {
        goToNextPage && 
        <button
          className='badge badge-pill badge-danger'
          type='button'
          onClick={goToNextPage}
          style={{
            marginBottom: '20px',
            padding: '10px'
          }}
        >
          <ChevronDoubleRight />
        </button>
      }
    </div>
  )
}

export default Pagination