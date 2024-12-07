import React from 'react';

const Landing = () => {
  return (
    <div className=" custom-font flex flex-col items-center justify-center w-[90vw] md:w-[80vw] text-center md:text-left leading-tight">
      <p className="text-[10vw] md:text-[5.5vw] lg:text-[4vw] uppercase">Timothy Itayi</p>
      <p className="self-center md:self-end text-[8vw] md:text-[4.5vw] lg:text-[3.5vw] uppercase">
        Front End Developer
      </p>
      <p className="text-[8vw] md:text-[4.5vw] lg:text-[3.5vw] uppercase">Based in Melbourne</p>
      <p className="self-center md:self-end text-[8vw] md:text-[4.5vw] lg:text-[3.5vw] uppercase">
        Portfolio@2024
      </p>
    </div>
  );
};

export default Landing;
