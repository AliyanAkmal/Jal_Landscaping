import React from "react";
import Wrapper from "../wrapper";
import constructionImg from "../../assets/Rectangle 17.png";
import imgTexture from "../../assets/Rectangle 17.png";

const EngineeringXRay = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative order-2 lg:order-1 px-4 md:px-0">
                        {/* Asymmetric Image Layout */}
                        <div className="relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]">
                            <img src={constructionImg} alt="Engineering" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-2/3 aspect-square rounded-[30px] md:rounded-[40px] overflow-hidden border-[10px] md:border-[15px] border-white shadow-2xl z-20 hidden md:block">
                            <img src={imgTexture} alt="Texture" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative skewed element */}
                        <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-32 md:h-32 bg-[#568F3A] rounded-full -z-10 mix-blend-multiply opacity-20 animate-blob" />
                    </div>

                    <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
                        <div className="space-y-3 md:space-y-4">
                            <h3 className="text-[#345C39] font-bold text-base md:text-lg tracking-widest uppercase">The Science of Hardscape</h3>
                            <h2 className="text-[30px] sm:text-[38px] l:text-title font-title leading-tight text-gray-900 italic">
                                Durability by <br className="hidden md:block" />
                                <span className="text-[#568F3A] underline decoration-4 underline-offset-8 not-italic">Design</span>
                            </h2>
                        </div>

                        <div className="space-y-6 md:space-y-8 py-4 border-l-2 border-[#568F3A]/30 pl-6 md:pl-8 ml-1 md:ml-2">
                            <div className="space-y-1 md:space-y-2">
                                <h4 className="text-lg md:text-xl font-bold text-gray-900 group flex items-center gap-2 md:gap-3">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#568F3A] rounded-full" />
                                    Compaction Standards
                                </h4>
                                <p className="text-sm md:text-gray-600 leading-relaxed font-secondaryTitle">
                                    We utilize multi-lift compaction techniques to ensure zero settling.
                                    In Fresno's expansive soils, the base is the most critical component.
                                </p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <h4 className="text-lg md:text-xl font-bold text-gray-900 group flex items-center gap-2 md:gap-3">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#568F3A] rounded-full" />
                                    Moisture Management
                                </h4>
                                <p className="text-sm md:text-gray-600 leading-relaxed font-secondaryTitle">
                                    Integrated drainage pipes and permeable barriers prevent hydrostatic
                                    pressure from compromising your retaining walls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default EngineeringXRay;
