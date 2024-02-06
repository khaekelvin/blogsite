import React from 'react'

function blog() {
  return (
    <>
    <div className='max-w-7xl mx-auto mt-20 justify-between sm:flex'>
    <div>
      <h1 className="text-6xl font-bold mb-8 text-center sm:text-left">Blogs</h1>
    </div>
    
    <div className='sm:flex'>
    <div className='flex sm:justify-start justify-center'>
    <button className='rounded-3xl w-24 h-10 my-auto border-2 cc font-bold'>All Blogs</button>
    <button className='my-auto ml-5 btn rounded px-2 h-10'>Trends</button>
    </div>

    <div className='flex sm:justify-start justify-center sm:mt-0 mt-5'>
        <button className='my-auto ml-5 btn px-1.5 h-10'>Research</button>
        <button className='my-auto ml-5 btn px-1.5 sm:hidden h-10'>Research</button>
        <button className='my-auto ml-5 btn px-1.5 h-10'>In-house Knowledge</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default blog

// flex