import React from "react";

const WhyUs = ({ data, image }) => {
  return (
    <div className="flex-col gap-8 lg:gap-10 flex l:flex-row py-16 items-center l:justify-start min-h-full">
      <div className="flex flex-col gap-8 px-6 sm:px-20 l:max-w-3xl lg:max-w-4xl text-center l:text-start">
        <div className="text-[34px] l:text-[40px] font-title leading-tight">
          {data.title}
        </div>

        <div className="l:text-[20px]">{data.description}</div>

        <div className="grid grid-cols-2 gap-4 justify-start">
          {data.cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#345C39] text-white text-start px-4 l:px-4 py-8 max-w-90 rounded-2xl lg:rounded-[40px]"
            >
              <div className="text-[22px] leading-tight font-secondaryTitle">
                {item.title}
              </div>
              <div className="text-sm md:text-base">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={image}
        alt=""
        className="max-w-md xs:max-w-sm sm:max-w-xl l:max-w-md xl:max-w-lg xxl:max-w-xl h-full object-cover self-end l:ml-auto"
      />
    </div>
  );
};

export default WhyUs;
