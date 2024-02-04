import React from 'react'

function blog() {
  return (
    <>
    <div className='max-w-7xl mx-auto mt-20 flex flex-wrap justify-between text-center sm:text-left'>
    <div>
      <h1 className="text-6xl font-bold mb-8 text-center sm:text-left">Blogs</h1>
    </div>
    
    <div className='flex flex-wrap'>
    <div className='flex'>
    <button className='rounded-3xl border w-24 h-10 border-slate-950 mt-auto mb-auto'>All Blogs</button>
    <p className=' mt-auto mb-auto ml-5'>Trends</p>
    </div>

    <div className='flex'>
        <p className=' mt-auto mb-auto ml-5'>Research</p>
        <p className=' mt-auto mb-auto ml-5'>Research</p>
        <p className=' mt-auto mb-auto ml-5'>In-house Knowledge</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default blog
