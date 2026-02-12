import React from "react";
import house from "../../assets/Background Image (3).png";
// import background from "../../assets/borders/a20.png";
import data from "./data";
import Wrapper from "../wrapper";

const OurServicesSteps = () => {
  return (
    <div className="bg-[#345C39] py-24 relative mt-20">
      {/* <img
        src={background}
        alt=""
        className="w-full object-cover absolute -top-[22rem] 1rotate-2"
      /> */}

      <Wrapper>
        <div className="flex justify-between items-center l:items-start flex-col l:flex-row gap-8 py-6">
          <div className=" sm:w-6/12 l:w-6/12 flex-shrink-0 rounded-[10px] overflow-hidden">
            <img src={house} alt="" className="w-full h-full object-cover" />
          </div>

          <div className=" max-w-3xl flex flex-col gap-6">
            {data.map((item) => (
              <div key={item.title}>
                <h3 className="text-[30px] font-title text-white">
                  {item.title}
                </h3>
                <p className="text-[18px] text-white">{item.description}</p>
                <hr className="bg-yellow-400 border-yellow-400 my-3 py-0.3" />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurServicesSteps;
