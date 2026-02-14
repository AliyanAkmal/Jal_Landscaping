import React from "react";
import background from "../../assets/backgrounds/serviceBg.png";

const HardscapeHero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="pt-10 pb-48 sm:pt-32 mb-16 sm:mb-32 flex flex-col items-center justify-center bg-bottom bg-cover relative -z-50"
        >
            <div className="max-w-3xl flex flex-col items-center text-center gap-4 sm:gap-8 px-6">
                <div className="text-white text-[36px] sm:text-title font-[800] sm:font-title leading-tight tracking-tight">
                    {" "}
                    <span className="text-[#568F3A] block sm:inline">
                        JAL Hardscaping
                    </span>{" "}
                    Built to Last
                </div>
                <div className="text-[18px] sm:text-[24px] font-secondaryTitle text-white/90 max-w-2xl">
                    Where structural engineering meets outdoor artistry.
                </div>
                <div className="text-white/70 text-md max-w-xl leading-relaxed font-body">
                    We don't just lay stone; we build foundations. From structural
                    retaining walls to custom paver systems, our work is engineered
                    for the Central Valley climate.
                </div>
            </div>

            {/* Dynamic Wave Overlay */}
        </div>
    );
};

export default HardscapeHero;
