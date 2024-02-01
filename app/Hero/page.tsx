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

        <div className="bg-white p-3 rounded-xl m-4 mt-8 text-center font-helvetica">
          <a
            href="#"
            className="flex flex-col card md:w-full md:h-96 bg-white rounded-lg md:flex-row "
          >
            <img
              className=" h-full object-cover rounded"
              src={macbook.src}
              alt="MacBook"
            />
            <div className="flex flex-col leading-normal">
              <div className="lg:pl-9 mt-auto mb-auto">
                <p className="">FREELANCING 101 * Joseph Patrick</p>
                <h2 className="">
                  07 Ways to get <br /> Consistent Clients from <br /> Social
                  Media
                </h2>
                <p>15 Min Read * 23-05-2023</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
