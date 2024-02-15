import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <>
      <div className="foot w-full h-[600px] justify-items-center relative ">
        <div>
          <div className="absolute inset-0 max-w-7xl bg-white rounded-xl h-[500px] lg:mx-auto my-auto mx-2">
            <div className="max-w-80 mx-auto">
              <p className="font-bold hel text-xl flex justify-center mt-4">
                Say Hello!
              </p>
              <p className="flex justify-center text-lg">
                Atlaspremier@gmail.com
              </p>
              <div className="flex justify-between my-5">
                <FaInstagram size={25} color="#294F74" />
                <FaTwitter size={25} color="#294F74" />
                <FaLinkedin size={25} color="#294F74" />
                <FaFacebook size={25} color="#294F74" />
              </div>
            </div>

            <div className="max-w-80 mx-auto text-xl">
              <div className="flex justify-between text-left">
                <p className="mb-3">Home</p>
                <p className="mb-3">Services</p>
              </div>

              <div className="flex justify-between text-left">
                <p className="mb-3">About us</p>
                <p className="mb-3">Contact us</p>
              </div>
              <p>Work</p>
            </div>

            <div className="text-xl">
              <p className="text-center my-5">NewYork, US</p>
              <p className="text-center">AtlasPremier. All Rights Reserved</p>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
