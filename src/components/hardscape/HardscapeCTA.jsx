import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";

const HardscapeCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden px-4 md:px-0">
            <Wrapper>
                <div className="relative bg-[#345C39] rounded-[30px] md:rounded-[50px] p-10 md:p-24 overflow-hidden shadow-3xl group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#568F3A]/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-[100px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-[32px] md:text-[56px] font-title text-white leading-[1.1] mb-4 md:mb-6">
                                Let’s Build Something <br className="hidden md:block" />
                                <span className="text-[#e2f4d6]">Permanent</span>
                            </h2>
                            <p className="text-[#e2f4d6]/70 text-base md:text-xl font-secondaryTitle italic">
                                Serving Fresno and the Central Valley with construction expertise.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-auto">
                            <button
                                onClick={() => navigate("/contact")}
                                className="w-full lg:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-[#568F3A] text-white rounded-[16px] md:rounded-[20px] font-bold text-lg md:text-xl shadow-[0_20px_40px_-10px_rgba(86,143,58,0.5)] hover:shadow-none hover:translate-y-1 transition-all duration-300"
                            >
                                Request Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default HardscapeCTA;
