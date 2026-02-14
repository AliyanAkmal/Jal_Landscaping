"use client";

import React from "react";
import Wrapper from "../wrapper";
import iconVector from "../../assets/icons/Vector.png";

const TransformationJourney = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] font-bold text-gray-50 pointer-events-none whitespace-nowrap -z-10 select-none">
                CRAFTED BY JAL
            </div>

            <Wrapper>
                <div className="text-center mb-12 md:mb-24 px-4">
                    <h2 className="text-[30px] sm:text-[38px] l:text-title font-title text-gray-900 leading-tight">
                        Transformation Journey
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-[#568F3A] mx-auto mt-3 md:mt-4" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 md:px-0">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

                    <div className="space-y-16 md:space-y-32">
                        {[
                            {
                                title: "Conceptual Artistry",
                                step: "01",
                                desc: "Detailed 3D rendering and site analysis to ensure aesthetic harmony, functionality, and seamless integration with the surrounding environment.",
                            },
                            {
                                title: "Structural Core",
                                step: "02",
                                desc: "Heavy compaction and drainage installation—the invisible strength that guarantees durability, stability, and long-term performance.",
                            },
                            {
                                title: "Precision Finish",
                                step: "03",
                                desc: "Laser-leveled laying and professional joint stabilization for flawless alignment, smooth surfaces, and lasting beauty.",
                            },
                        ]
                            .map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div
                                        className={`w-full md:w-1/2 text-center ${idx % 2 === 1 ? "md:text-left" : "md:text-right"
                                            } px-0 md:px-8`}
                                    >
                                        <span className="text-4xl md:text-6xl font-[900] text-[#568F3A]/20 block mb-1 md:mb-2">
                                            {item.step}
                                        </span>

                                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-gray-500 font-secondaryTitle leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="hidden md:flex relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] md:border-4 border-[#568F3A] items-center justify-center shadow-xl">
                                        <img
                                            src={iconVector}
                                            alt=""
                                            className={`w-5 h-5 md:w-6 md:h-6 transform-gpu transition-transform duration-300 ${idx % 2 === 0 ? "-rotate-90" : "rotate-90"
                                                }`}
                                        />
                                    </div>

                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default TransformationJourney;
