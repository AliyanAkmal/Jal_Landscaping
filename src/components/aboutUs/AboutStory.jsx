import React from "react";
import Wrapper from "../wrapper";
import teamImg from "../../assets/image 1 (1).png";

const AboutStory = () => {
    return (
        <Wrapper>
            <div className="pt-20 pb-0">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/2 lg:pb-32">
                        <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">OUR STORY</p>
                        <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title text-gray-900 leading-tight mb-6">
                            Fresno's Trusted <span className="text-[#345C39]">Landscaping Company</span>
                        </h2>
                        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-secondaryTitle">
                            <p>
                                JAL Landscaping and More has been serving Fresno and surrounding areas since 2014. What started as a small family business has grown into one of the area's most reliable landscaping companies, with over 500 completed projects and counting.
                            </p>
                            <p>
                                We specialize in residential and commercial landscaping, from artificial turf installation and tree planting to complete outdoor renovations. Every project gets the same attention to detail, whether it's a small yard upgrade or a full property transformation.
                            </p>
                            <p>
                                As a family-owned business, we take pride in building long-term relationships with our clients. Our team shows up on time, communicates clearly, and delivers results that last. That's how we've earned our reputation in Fresno.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:h-[600px] self-end">
                        <img
                            src={teamImg}
                            alt="JAL Landscaping Team in Fresno"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutStory;
