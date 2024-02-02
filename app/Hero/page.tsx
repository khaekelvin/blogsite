import React from "react";
import macbook from "../images/MacBook.png";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left text-slate-950  ">
          <h1 className="sm:w-1/2 font-bold text-6xl">
            Atlas Premier <br /> Knowledge Blogs:
          </h1>
          <div className="sm:w-[450px] lg:ml-36">
            <p className="mt-3 text-2xl">
              "Immerse yourself in the latest knowledge and research from our
              team of software engineers and design professionals."
            </p>
          </div>
        </div>

        <div className="bg-white p-3  rounded-xl mt-8 text-center font-helvetica ml-2 mr-2">
          <a
            href="#"
            className="flex flex-col card md:w-full md:h-96 bg-white rounded-lg md:flex-row "
          >
            <img
              className=" h-full object-cover rounded"
              src={macbook.src}
              alt="MacBook"
            />
            <div className="flex flex-col leading-normal sm:text-center">
              <div className="lg:pl-20 mt-auto mb-auto lg:text-left">
                <p className="free text-lg mt-10 mb-5">FREELANCING 101 • Joseph Patrick</p>
                <h1 className="text-4xl font-medium sm:break-words mb-10 lg:w-96">                  
                  07 Ways to get Consistent Clients from Social
                  Media
                </h1>
                <p className="min font-medium text-lg mb-10">15 Min Read • 23-05-2023</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
