import React from "react";
// import grass from "../../assets/borders/a20.png";
import gard from "../../assets/backgrounds/Background Image (1).png";
import back from "../../assets/backgrounds/abcs.png";

const Services = () => {
  return (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="relative mt-10 overflow-hidden bg-top bg-cover bg-no-repeat pt-[30rem] xs:pt-[30rem] sm:pt-[28rem] md:pt-[20rem] l:pt-[24rem] lg:pt-[28rem] pb-10"
    >
      <div className="flex w-full flex-col items-start justify-between gap-8 l:flex-row">
        <div className="w-full max-w-sm l:w-[45%] shrink-0 overflow-hidden">
          <img src={gard} alt="" className="block h-auto w-full object-cover" />
        </div>
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 px-4 sm:px-8">
          <p className="text-secondaryTitle font-secondaryTitle text-white">
            Our Services
          </p>
          <p className="text-title max-w-4xl leading-tight text-center font-title text-white">
            <span className="text-secondary">Complete Outdoor Solutions</span>{" "}
            for Residential & Commercial Properties
          </p>
          <p className="max-w-2xl text-white text-center">
            JAL Landscaping and More offers a full range of outdoor services
            designed to enhance, protect, and maintain your property. From
            landscape design to hardscape construction and ongoing maintenance,
            we deliver dependable results backed by experience and hard work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
