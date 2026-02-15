import React from "react";
import Wrapper from "../wrapper";
import { FaSearch, FaClipboardList, FaTools, FaCheckDouble } from "react-icons/fa";

const MaintenanceProcess = () => {
    const steps = [
        {
            title: "Property Health Audit",
            desc: "We perform a forensic analysis of your landscape's soil, hydration, and plant vitality to establish a scientific baseline.",
            icon: <FaSearch className="text-white text-2xl" />,
            color: "bg-[#345C39]"
        },
        {
            title: "Adaptive Care Strategy",
            desc: "Engineering a customized plan that morphs with Central Valley seasons, ensuring peak health through every thermal shift.",
            icon: <FaClipboardList className="text-white text-2xl" />,
            color: "bg-[#568F3A]"
        },
        {
            title: "Precision Execution",
            desc: "Expert crews deployed for surgical-grade maintenance, from artistic pruning to climate-smart irrigation adjustments.",
            icon: <FaTools className="text-white text-2xl" />,
            color: "bg-[#F6B01D]"
        },
        {
            title: "Quality Performance Audit",
            desc: "Transparent reporting and forensic quality checks to guarantee every square inch meets the JAL standard.",
            icon: <FaCheckDouble className="text-white text-2xl" />,
            color: "bg-[#142629]"
        }
    ];

    return (
        <section className=" bg-white overflow-hidden">
            <Wrapper>
                <div className="text-center mb-20">
                    <h2 className="text-[36px] md:text-title font-title text-gray-900 leading-tight italic">
                        The JAL <span className="text-[#568F3A] not-italic">Performance Loop</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-secondaryTitle italic">
                        Our scientific approach to property preservation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Progress Line - Desktop Only */}
                    <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center group">
                            <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                                {step.icon}
                                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-gray-900 border shadow-sm">
                                    0{idx + 1}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed text-center font-secondaryTitle italic opacity-80">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default MaintenanceProcess;
