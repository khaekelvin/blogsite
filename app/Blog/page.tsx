import React from 'react'
import social from '../images/Frame 1249187079.png'

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
        <button className='my-auto ml-4 btn px-1 sm:px-2 h-10'>Research</button>
        <button className='my-auto ml-4 btn px-1 sm:px-2 sm:hidden h-10'>Research</button>
        <button className='my-auto ml-4 btn px-1 sm:px-2 h-10'>In-house Knowledge</button>
    </div>
    </div>
    </div>

    <div className="max-w-7xl mx-auto mb-10">

        <div className="bg-white p-3 rounded-xl mt-8 text-center font-helvetica sm:mx-0 mx-2">
          <a
            href="#"
            className="flex flex-col card md:w-full md:h-96 bg-white rounded-lg md:flex-row "
          >
            <img
              className=" h-full object-cover rounded"
              src={social.src}
              alt="social"
            />
            <div className="flex flex-col leading-normal sm:text-center">
              <div className="lg:pl-20 mt-auto mb-auto lg:text-left">
                <p className="free text-lg mt-10 mb-5">FREELANCING 101 • William George</p>
                <h1 className="text-4xl font-medium sm:break-words mb-10 lg:w-96">                  
                  07 Ways to get Consistent Clients from Social
                  Media
                </h1>
                <p className="min font-medium text-lg mb-10">15 Min Read • 23 - 05 -2023</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default blog

// flex