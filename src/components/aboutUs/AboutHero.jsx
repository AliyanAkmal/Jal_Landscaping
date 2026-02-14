import React from "react";
import Wrapper from "../wrapper";
import heroImg from "../../assets/backgrounds/WhatsApp Image 2026-01-21 at 3.20.18 PM 1.png";

const AboutHero = () => {
    return (
        <div
            className="relative bg-center bg-no-repeat min-h-[400px] md:min-h-[500px] border-none lg:min-h-[600px] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: window.innerWidth < 768 ? 'auto' : 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45" />
            <Wrapper>
                <div className="relative z-10 text-center text-white py-32 px-4">
                    <div className="mb-4">
                        <span className="inline-block bg-[#345C39]/20 backdrop-blur-sm border border-[#345C39]/50 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider">
                            FAMILY-OWNED SINCE 2014
                        </span>
                    </div>
                    <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-title leading-tight mb-6 drop-shadow-2xl">
                        About <span className="text-[#345C39]">JAL Landscaping</span>
                    </h1>
                    <p className="text-[20px] md:text-[24px] font-secondaryTitle max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                        Professional Landscaping Services in Fresno, CA Since 2014
                    </p>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutHero;
