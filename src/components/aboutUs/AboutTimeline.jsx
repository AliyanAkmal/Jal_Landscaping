import React from "react";
import Wrapper from "../wrapper";

const AboutTimeline = () => {
    const timeline = [
        {
            year: "2014",
            title: "Founded in Fresno",
            description: "Started as a family-owned operation serving residential and commercial clients throughout Fresno County."
        },
        {
            year: "2017",
            title: "Service Expansion",
            description: "Added hardscaping, irrigation systems, and commercial property maintenance to meet growing client demand."
        },
        {
            year: "2020",
            title: "Sustainable Solutions",
            description: "Introduced water-efficient landscaping and artificial turf installation to help California property owners conserve resources."
        },
        {
            year: "2026",
            title: "Trusted Local Leader",
            description: "Serving hundreds of satisfied clients across Fresno with a reputation built on quality work and honest service."
        }
    ];

    return (
        <div className="bg-[#e6f2df] py-20">
            <Wrapper>
                <div className="text-center mb-16">
                    <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">OUR JOURNEY</p>
                    <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title text-gray-900 leading-tight">
                        Over a Decade of Quality Service
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="text-[#345C39] text-3xl md:text-4xl font-title font-bold mb-3">{item.year}</div>
                                <h3 className="text-lg md:text-xl font-title text-gray-900 mb-2 font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                            </div>
                            {index < timeline.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-[#345C39]" />
                            )}
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutTimeline;
