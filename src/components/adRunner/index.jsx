import React from "react";

const AdRunner = () => {
  const text =
    "Proudly Serving Fresno, CA & Nearby Communities • Serving Fresno and Surrounding Areas • Local Outdoor Services You Can Trust • ";

  return (
    <div className="bg-[#568F3A] overflow-hidden relative py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat text multiple times with a gap */}
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="text-white xs:text-[20px] l:text-[30px] lg:text-[36px] font-secondaryTitle mr-20"
          >
            {text}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AdRunner;
