import React from "react";

const WhyUs = ({ data, image }) => {
  return (
    <div className="flex py-16 items-center min-h-full">
      <div className="flex flex-col gap-8 px-20 max-w-4xl">
        <div className="text-[57px] font-title leading-tight">{data.title}</div>

        <div className="text-[21px]">{data.description}</div>

        <div className="grid grid-cols-2 gap-4 justify-start">
          {data.cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#345C39] text-white px-10 py-6 max-w-90 rounded-[40px]"
            >
              <div className="text-[25px] leading-tight">{item.title}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-full h-full">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default WhyUs;
