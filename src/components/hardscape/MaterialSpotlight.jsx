import React from "react";
import Wrapper from "../wrapper";
import imgAdv1 from "../../assets/backgrounds/Rectangle 94.png";
import imgAdv2 from "../../assets/backgrounds/Rectangle 95.png";
import imgAdv3 from "../../assets/backgrounds/Rectangle 96.png";
import imgTexture from "../../assets/Rectangle 17.png";

const MaterialSpotlight = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0a1a0f] relative overflow-hidden">
            <Wrapper>
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/3 text-white space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-[30px] sm:text-[38px] l:text-title font-title leading-tight">
                            Material <br className="hidden md:block" />
                            <span className="text-[#568F3A]">Spotlight</span>
                        </h2>
                        <p className="text-sm md:text-gray-400 font-secondaryTitle leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We select materials that don't just look good on Day 1—they are chosen for
                            their unique weathering properties and structural density.
                        </p>
                        <div className="pt-4 flex gap-3 md:gap-4 justify-center lg:justify-start">
                            <div className="w-10 md:w-12 h-1 bg-[#568F3A]" />
                            <div className="w-3 md:w-4 h-1 bg-[#568F3A]/30" />
                            <div className="w-3 md:w-4 h-1 bg-[#568F3A]/30" />
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {[
                            { img: imgAdv1, title: "Belgard Pavers", desc: "Engineered for maximum thermal resistance during Fresno summers." },
                            { img: imgAdv2, title: "Natural Ledgestone", desc: "Hand-selected for color consistency and structural durability." },
                            { img: imgAdv3, title: "Basalt Edging", desc: "Industrial-grade containment for sharp, clean landscape lines." },
                            { img: imgTexture, title: "Custom Mortar", desc: "Proprietary mix designed to resist Central Valley soil shifting." }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative h-[250px] md:h-[300px] rounded-[24px] md:rounded-[30px] overflow-hidden border border-white/10 hover:border-[#568F3A]/50 transition-all duration-500">
                                <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 backdrop-blur-md bg-white/5 border-t border-white/10 group-hover:bg-[#568F3A]/10 transition-colors">
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-secondaryTitle opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default MaterialSpotlight;
