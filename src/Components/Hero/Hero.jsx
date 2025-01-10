import React from "react";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('./images/hero.webp')` }}
      id="home"
      className="lg:bg-fixed bg-cover  h-[60vh] md:h-full lg:h-[100vh] px-4 pt-36 lg:pt-44 lg:px-40 justify-center items-center font-code"
    >
      <h2 className=" text-center text-3xl  lg:text-9xl text-white font-bold">
        Arcon
      </h2>
      <h2 className=" text-center text-2xl  lg:text-6xl text-white font-bold">
        Associates
      </h2>
      <p className="text-center text-sm lg:text-md text-white font-semibold pt-10 ">
        Crafting the Future with Precision and Passion
      </p>
    </div>
  );
};

export default Hero;
