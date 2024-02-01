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
        {/* <div className="mt-8 m-3">
          <div className="bg-blue-950 rounded-2xl p-2 ">
           
            <div className="bg-black rounded-lg">
            <img src={macbook.src} alt="MacBook" />
            <div className="bg-green-900 pt-[200px]">
              <div>
              <p>FREELANCING 101 * Joseph Patrick</p>
              <h2>07 Ways to get Consistent Clients from Social Media</h2>
              <p>15 Min Read * 23 - 05 -2023</p>
              </div>
            </div>
          </div>
          </div>
          <img src={macbook.src} alt="MacBook" />
        </div> */}


<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={macbook.src} alt="MacBook" />
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
