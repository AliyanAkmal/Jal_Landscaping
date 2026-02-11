// src/components/EstimateForm.jsx
import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaPen } from "react-icons/fa";

const EstimateForm = () => {
  return (
    <div className="bg-green-100 px-4 md:px-8 py-4 rounded-lg max-w-lg sm:max-w-xl md:max-w-2xl l:max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-4xl">
      {/* Heading */}
      <h2 className=" sm:text-3xl md:text-[30px] font-secondaryTitle text-left mb-2 sm:mb-6">
        Get Your <span className="text-primary">Free Estimate</span>
      </h2>

      {/* Form */}
      <form className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 gap-y-0 sm:gap-y-2">
        {/* Name Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-2 sm:pl-4 pr-2 sm:pr-6 text-xs sm:text-base">
          <input
            type="text"
            placeholder="Name"
            className="w-full outline-none bg-transparent"
          />
          <FaUser className="text-green-600 ml-2" />
        </div>

        {/* Number Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-2 sm:pl-4 pr-2 sm:pr-6 text-xs sm:text-base">
          <input
            type="tel"
            placeholder="Number"
            className="w-full outline-none bg-transparent"
          />
          <FaPhone className="text-green-600 ml-2" />
        </div>

        {/* Email Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-2 sm:pl-4 pr-2 sm:pr-6 text-xs sm:text-base">
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none bg-transparent"
          />
          <FaEnvelope className="text-green-600 ml-2" />
        </div>

        {/* Message Input */}
        <div className="flex col-span-2 sm:col-span-2 md:col-span-2 items-center border border-green-300 rounded-md py-2 pl-2 sm:pl-4 pr-6 mt-4 sm:mt-0 text-xs sm:text-base">
          <input
            type="text"
            placeholder="How can we help"
            className="w-full outline-none bg-transparent"
          />
          <FaPen className="text-green-600 ml-2" />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 mt-4 sm:mt-0">
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold  py-2 rounded-md transition text-sm sm:text-base"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;
