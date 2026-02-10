import React from "react";
import sideImage from "../../assets/backgrounds/Background Image (5).png";
const Solutions = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="w-4/12 flex-shrink-0 rounded-[10px] overflow-hidden">
        <img src={sideImage} alt="sideImage" />
      </div>
      <div className=" max-w-4xl flex flex-col gap-6 px-10">
        <div className="text-title font-title">
          Complete Landscaping Solutions for Any Property
        </div>
        <div className="text-paragraph font-paragraph">
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
