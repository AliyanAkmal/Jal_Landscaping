import React from "react";
import Wrapper from "../wrapper";
import landscapeImg1 from "../../assets/backgrounds/Rectangle 94.png";
import landscapeImg2 from "../../assets/backgrounds/Rectangle 95.png";
import landscapeImg3 from "../../assets/backgrounds/Rectangle 96.png";

const AboutGallery = () => {
    return (
        <Wrapper>
            <div className="py-20">
                <div className="text-center mb-12">
                    <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">OUR WORK</p>
                    <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title text-gray-900 leading-tight">
                        See What We've Built in Fresno
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                        <img
                            src={landscapeImg1}
                            alt="Residential Landscaping Project in Fresno"
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <p className="text-white font-secondaryTitle text-lg md:text-xl font-semibold">Landscape Design</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                        <img
                            src={landscapeImg2}
                            alt="Commercial Hardscaping in Fresno CA"
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <p className="text-white font-secondaryTitle text-lg md:text-xl font-semibold">Hardscaping</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                        <img
                            src={landscapeImg3}
                            alt="Outdoor Living Space Installation Fresno"
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <p className="text-white font-secondaryTitle text-lg md:text-xl font-semibold">Outdoor Living</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutGallery;
