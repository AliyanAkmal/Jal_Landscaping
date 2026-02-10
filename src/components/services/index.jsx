import React from "react";
// import grass from "../../assets/borders/a20.png";
import gard from "../../assets/backgrounds/Background Image (1).png";
import back from "../../assets/backgrounds/abcs.png";

const Services = () => {
  return (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="xs:pt-[30rem] sm:pt-96 md:pt-80 l:pt-52 pb-10 mt-10 bg-[center_25%] bg-cover h-2/3"
    >
      <div className="flex flex-col l:flex-row items-center justify-between gap-8">
        <div className="max-w-sm l:w-[45%] self-start">
          <img src={gard} alt="" width="100%" />
        </div>
        <div className="flex flex-col items-center space-y-4  px-2 sm:px-8 max-w-4xl">
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
