import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <>
      <div className="foot w-full h-[600px] justify-items-center relative ">
        <div>
          <div className="absolute inset-0 max-w-7xl bg-white rounded-xl h-[500px] lg:mx-auto my-auto mx-2">
            <p className="font-bold hel text-xl flex justify-center mt-4">Say Hello!</p>
            <p className="flex justify-center text-lg">Atlaspremier@gmail.com</p>
            <div className="flex justify-center">
              <FaInstagram/>
              <FaFacebook/>
              <FaTwitter/>
              <FaLinkedin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
