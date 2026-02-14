import React from "react";
import Wrapper from "../wrapper";
import iconImg from "../../assets/icons/Vector.png";

const AboutCTA = () => {
    return (
        <div className="bg-[#345C39] py-24">
            <Wrapper>
                <div>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block mb-4">
                            <span className="bg-white/20 backdrop-blur-sm border border-white/50 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider">
                                GET STARTED TODAY
                            </span>
                        </div>
                        <h2 className="text-[42px] md:text-[52px] font-title text-white leading-tight mb-6">
                            Ready to Upgrade Your
                            <span className="block text-white">Outdoor Space?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                            Get a free estimate from Fresno's trusted landscaping company.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-4 mb-10 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                                Free On-Site Estimates
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                                Written Quotes
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                                Licensed & Insured
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="flex gap-3 items-center bg-white text-[#345C39] h-14 px-8 font-secondaryTitle text-base rounded-xl justify-center hover:bg-[#345C39] hover:text-white hover:border-2 hover:border-white transition-all duration-300">
                                <img src={iconImg} alt="" className="h-7 w-7" />
                                <span>Get Your Free Estimate</span>
                            </button>
                            <button className="flex gap-3 items-center bg-transparent h-14 px-8 font-secondaryTitle text-base rounded-xl justify-center border-2 border-white text-white hover:bg-white hover:text-[#345C39] transition-all duration-300">
                                <img src={iconImg} alt="" className="h-6 w-6" />
                                Call (559) XXX-XXXX
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutCTA;
