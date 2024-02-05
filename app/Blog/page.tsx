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
    <button className='rounded-3xl w-24 h-10 mt-auto mb-auto border-2 cc font-bold'>All Blogs</button>
    <button className='mt-auto mb-auto ml-5 btn rounded'>Trends</button>
    </div>

    <div className='flex sm:justify-start justify-center sm:mt-0 mt-5'>
        <button className='mt-auto mb-auto ml-5 btn'>Research</button>
        <button className='mt-auto mb-auto ml-5 btn'>Research</button>
        <button className='mt-auto mb-auto ml-5 btn'>In-house Knowledge</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default blog

// flex