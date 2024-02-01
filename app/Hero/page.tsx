import React from "react";
import macbook from "../images/MacBook.png";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left text-slate-950 text-4xl ">
          <div className="sm:w-1/2 font-bold">
            Atlas Premier <br /> Knowledge Blogs:
          </div>
          <div className="sm:w-1/2">
            <p className="mt-3 text-base">
              "Immerse yourself in the latest knowledge and research from our
              team of software engineers and design professionals."
            </p>
          </div>
        </div>
       


<a href="#" className="flex flex-col md:w-full md:h-72 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 ">
  <img className=" h-full object-cover" src={macbook.src} alt="MacBook" />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>
</a>

      </div>


    </>
  );
}

export default Hero;
