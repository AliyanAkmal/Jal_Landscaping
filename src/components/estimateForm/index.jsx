// src/components/EstimateForm.jsx
import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaPen } from "react-icons/fa";

const EstimateForm = () => {
  return (
    <div className="bg-green-100 p-4 md:px-8 py-4 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-[50px] font-secondaryTitle ">
        Get Your <span className="text-primary ">Free Estimate</span>
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {/* Name Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-4 pr-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full  outline-none bg-transparent"
          />
          <FaUser className=" text-green-600" />
        </div>

        {/* Number Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-4 pr-6">
          <input
            type="tel"
            placeholder="Number"
            className="w-full  outline-none bg-transparent"
          />
          <FaPhone className=" text-green-600" />
        </div>

        {/* Email Input */}
        <div className="flex items-center border border-green-300 rounded-md py-2 pl-4 pr-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full  outline-none bg-transparent"
          />
          <FaEnvelope className=" text-green-600" />
        </div>

        {/* Message Input */}
        <div className="flex col-span-2 items-center border border-green-300 rounded-md py-2 pl-4 pr-6">
          <input
            type="text"
            placeholder="How can we help"
            className="w-full  outline-none bg-transparent"
          />
          <FaPen className=" text-green-600" />
        </div>

        {/* Submit Button */}
        <div className="col-span-1">
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-md transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;
