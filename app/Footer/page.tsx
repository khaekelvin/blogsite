import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <>
      <div className="foot w-full h-[600px] justify-items-center relative ">
        <div>
          <div className="absolute inset-0 max-w-7xl bg-white rounded-3xl h-[500px] lg:mx-auto my-auto mx-2">
            <div className="lg:max-w-5xl lg:mx-auto lg:mt-14">
            <div className="lg:flex lg:justify-between">
            <div className="max-w-80 mx-auto lg:mx-0">
              <p className="font-bold hel text-xl flex justify-center mt-4 lg:justify-start lg:mt-0">
                Say Hello!
              </p>
              <p className="flex justify-center text-lg lg:justify-start">
                Atlaspremier@gmail.com
              </p>
              <div className="flex justify-between my-5">
                <FaInstagram size={25} color="#294F74" />
                <FaTwitter size={25} color="#294F74" />
                <FaLinkedin size={25} color="#294F74" />
                <FaFacebook size={25} color="#294F74" />
              </div>
            </div>

            <div className="max-w-80 mx-auto text-xl mt-10 lg:mx-0 lg:mt-0 lg:justify-between lg:max-w-96">
              <div className="flex justify-between text-left">
                <p className="mb-3">Home</p>
                <p className="mb-3">Services</p>
              </div>

              <div className="flex justify-between text-left">
                <p className="mb-3">About us</p>
                <p className="mb-3 lg:ml-10">Contact us</p>
              </div>
              <p>Work</p>
            </div>
            </div>
            <div className="text-xl lg:flex lg:justify-between lg:mt-10">
              <p className="text-center my-5 lg:my-0">NewYork, US</p>
              <p className="text-center">AtlasPremier. All Rights Reserved</p>
            </div>
            </div>

            <div className="text-5xl bottom-0 mt-10">
              <p className="text-center bottom-0 font-bold text absolute inset-x-0 lg:text-9xl">
                Atlas Premier
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
