import React from "react";

function Footer() {
    return (
        <>
            <div className="max-w-7xl mx-auto my-10">
                <div className="foot lg:flex rounded-xl h-auto md:h-[300px] mx-2 md:mx-0">
                    <div className="lg:flex lg:max-w-5xl lg:mx-auto lg:justify-center">
                        <div className="lg:w-[500px] lg:mx-0 mx-auto">
                            <p className="text-white lg:text-6xl text-5xl lg:pt-0 pt-10 lg:mb-0 mb-5 leading-[60px] lg:my-auto">
                                Transforming your <b>Ideas into reality</b>
                            </p>
                            <p className="text-white text-xl">
                                Let's build something extraordinary together to captivate your
                                audience.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <p className="relative text-2xl w-60 h-60 rounded-full flex justify-center items-center text-center p-5 border-2 border-white text-white lg:my-0 my-14 lg:ml-20">
                                Let’s Work <br /> Together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
