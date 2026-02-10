import React from "react";
import grass from "../../assets/borders/a20.png";
import gard from "../../assets/backgrounds/Background Image (1).png";

const Services = () => {
  return (
    <div className="bg-[#345C39] py-32">
      <div className="relative">
        <img
          src={grass}
          alt="Grass border"
          className="absolute -bottom-7 left-0 w-full z-50"
        />
      </div>

      <div className="flex items-center justify-between gap-8">
        <div className="w-[40%]">
          <img src={gard} alt="" width="100%" />
        </div>
        <div className="flex flex-col items-center space-y-10  px-2">
          <p className="text-secondaryTitle font-secondaryTitle text-white">
            Our Services
          </p>
          <p className="text-title max-w-4xl leading-tight text-center font-title text-white">
            <span className="text-secondary">Complete Outdoor Solutions</span>{" "}
            for Residential & Commercial Properties
          </p>
          <p className="max-w-2xl text-white">
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
