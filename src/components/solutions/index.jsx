import React from "react";
import sideImage from "../../assets/backgrounds/Background Image (5).png";

const Solutions = () => {
  return (
    <div className="flex flex-col l:flex-row justify-between items-start l:items-center gap-6 l:gap-8 px-0">
      <div className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[420px] l:w-4/12 l:max-w-none flex-shrink-0 rounded-[10px] overflow-hidden">
        <img
          src={sideImage}
          alt="sideImage"
          className="w-full h-56 xs:h-64 sm:h-80 l:h-auto object-cover"
        />
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 l:px-10 text-center l:text-left">
        <div className="text-[30px] sm:text-[38px] l:text-title font-title leading-tight">
          Complete Landscaping Solutions for Any Property
        </div>

        <div className="text-[17px] sm:text-[19px] l:text-paragraph font-paragraph">
          We combine design expertise with quality materials to build outdoor
          spaces that look great and perform well year-round. Whether you’re
          upgrading a small yard or transforming an entire property, we focus on
          clean execution and durable results.
        </div>
      </div>
    </div>
  );
};

export default Solutions;
