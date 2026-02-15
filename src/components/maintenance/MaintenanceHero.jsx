import React from "react";
import background from "../../assets/backgrounds/serviceBg.png";

const MaintenanceHero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="pt-10 pb-48 sm:pt-32 mb-16 sm:mb-32 flex flex-col items-center justify-center bg-bottom bg-cover relative -z-50"
        >
            <div className="max-w-3xl flex flex-col items-center text-center gap-4 sm:gap-8 px-6">
                <div className="text-white text-[36px] sm:text-title font-[800] sm:font-title leading-tight tracking-tight">
                    {" "}
                    <span className="text-[#568F3A] block sm:inline">
                        Full-Service
                    </span>{" "}
                    Property Maintenance
                </div>
                <div className="text-[18px] sm:text-[24px] font-secondaryTitle text-white/90 max-w-2xl">
                    Preserving the beauty and health of your Fresno landscape year-round.
                </div>
                <div className="text-white/70 text-md max-w-xl leading-relaxed font-body">
                    From precision lawn care and irrigation management to seasonal cleanups, we provide the consistent, professional attention your property deserves.
                </div>
            </div>

        </div>
    );
};

export default MaintenanceHero;
