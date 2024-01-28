import React from 'react'
import macbook from '../images/MacBook.png';

function Hero() {
  return (
    <>
    <div>
        <div className='text-center text-slate-950 text-4xl'>
        Atlas Premier <br/> Knowledge Blogs:
        </div>
        <p className='text-center mt-3'>"Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.</p>
    </div>

<div>
  <div className='w-11/12 h-96 bg-slate-800 rounded mx-auto mt-3'>
    <div className='w-10/12 h-80 bg-black rounded mx-auto mt-3'>
    <img className=' h-full object-contain' src={macbook.src} alt="Macbook" />
    </div>
</div>
</div>

</>
  )
}

export default Hero