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
        <div className="mt-8 m-3">
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
        </div>
      </div>
    </>
  );
}

export default Hero;
