import React from 'react';

function Pagination({page, goBack, goNext}) {

  return (
    <>
        <div className='w-full flex justify-center mb-5'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl'
            onClick={goBack} >
            Previous</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-100'>{page}</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl'
            onClick={goNext}>Next</button>
        </div>
    </>
  )
}

export default Pagination