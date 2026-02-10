import React from "react";
import image1 from "../../assets/backgrounds/Rectangle 99.png";
const WhyUs = () => {
  return (
    <div className="flex py-16 items-center">
      <div className="flex flex-col gap-8 px-20 max-w-4xl">
        <div className="text-[57px] font-title leading-tight">
          Why Homeowners Trust JAL Landscaping and More
        </div>
        <div className="text-[21px]">
          As a family-owned business with over 11 years of hands-on experience,
          JAL Landscaping and More is committed to delivering dependable outdoor
          solutions built on trust, quality workmanship, and clear communication
          from start to finish.
        </div>
        <div className="grid grid-cols-2 gap-4 justify-start">
          <div className="bg-[#345C39] text-white px-10 py-6 max-w-90 rounded-[40px]">
            <div className="text-[25px] leading-tight">
              Family-owned and operated
            </div>
            <div>
              A local business that treats every property with care and respect.
            </div>
          </div>
          <div className="bg-[#345C39] text-white px-10 py-6 max-w-90 rounded-[40px]">
            <div className="text-[25px] leading-tight">
              Family-owned and operated
            </div>
            <div>
              A local business that treats every property with care and respect.
            </div>
          </div>
          <div className="bg-[#345C39] text-white px-10 py-6 max-w-90 rounded-[40px]">
            <div className="text-[25px] leading-tight">
              Family-owned and operated
            </div>
            <div>
              A local business that treats every property with care and respect.
            </div>
          </div>
          <div className="bg-[#345C39] text-white px-10 py-6 max-w-90 rounded-[40px]">
            <div className="text-[25px] leading-tight">
              Family-owned and operated
            </div>
            <div>
              A local business that treats every property with care and respect.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={image1} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default WhyUs;
