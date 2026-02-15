import React from "react";
import Wrapper from "../wrapper";

const HardscapeStats = () => {
    return (
        <section className="relative -mt-20 md:-mt-24 z-20 pb-12 md:pb-16">
            <Wrapper>
                <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[30px] md:rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-6 md:p-12 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12 border-b-4 border-b-[#568F3A]">
                    {[
                        { label: "Precision Builds", value: "500+", sub: "Central Valley Projects" },
                        { label: "Structural Warranty", value: "Lifetime", sub: "On All Masonry Work" },
                        { label: "Family Heritage", value: "2nd Gen", sub: "Hardscape Specialists" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center space-y-1 md:space-y-2 group">
                            <p className="text-[#345C39] font-bold text-[10px] md:text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                                {stat.label}
                            </p>
                            <h3 className="text-[28px] md:text-[44px] font-title text-gray-900 group-hover:text-[#568F3A] transition-colors leading-tight">
                                {stat.value}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500 font-secondaryTitle italic">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default HardscapeStats;
