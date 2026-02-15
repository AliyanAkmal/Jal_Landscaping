import React from "react";
import Wrapper from "../wrapper";
import { FaRecycle, FaBug, FaMagic } from "react-icons/fa";

const MaintenanceBenefits = () => {
    const benefits = [
        {
            title: "Ecological Intelligence",
            desc: "Utilizing precision water management and eco-conscious botanical treatments that respect the local biosphere.",
            icon: <FaRecycle className="text-4xl text-[#345C39]" />,
            image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Proactive Bioshield",
            desc: "Our preventative pest and drought defense systems identify threats weeks before they manifest on your property.",
            icon: <FaBug className="text-4xl text-[#345C39]" />,
            image: "https://croptivate.com/wp-content/uploads/2020/07/spraying.jpg"
        },
        {
            title: "Artistic Edge Mastery",
            desc: "Transcending basic maintenance with sculptural pruning and detail-oriented aesthetic refinement.",
            icon: <FaMagic className="text-4xl text-[#345C39]" />,
            image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2091&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#568F3A]/5 rounded-full blur-[120px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#345C39]/5 rounded-full blur-[100px] -ml-24 -mb-24" />

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="group bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(52,92,57,0.15)] transition-all duration-700 hover:-translate-y-3 border border-white/40">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl transform group-hover:rotate-12 transition-all duration-500">
                                    {benefit.icon}
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-title text-gray-900 mb-4 group-hover:text-[#345C39] transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-secondaryTitle italic opacity-80">
                                    {benefit.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default MaintenanceBenefits;
