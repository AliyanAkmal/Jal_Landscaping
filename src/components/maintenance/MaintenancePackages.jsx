import React from "react";
import Wrapper from "../wrapper";

const MaintenancePackages = () => {
    const packages = [
        {
            title: "Vital Care",
            price: "Monthly",
            features: ["Mowing & Edging", "Blowing", "Basic Pruning", "Irrigation Check"],
            accent: "opacity-40"
        },
        {
            title: "Premium Care",
            price: "Bi-Weekly",
            features: ["All Vital Features", "Fertilization", "Weed Control", "Shrub Shaping", "Seasonal Flower Care"],
            accent: "bg-[#568F3A]"
        },
        {
            title: "Estate Care",
            price: "Custom",
            features: ["Full Property Concierge", "Tree Trimming", "Mulch Refreshing", "Pest Management", "Priority Emergency Support"],
            accent: "opacity-40"
        }
    ];

    return (
        <section className="py-20 md:py-32  overflow-hidden">
            <Wrapper>
                <div className="text-center mb-16 md:mb-24 px-4">
                    <h2 className="text-[30px] sm:text-[38px] l:text-title font-title text-gray-900 leading-tight italic">
                        Maintenance <span className="text-[#568F3A] not-italic">Packages</span>
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-[#568F3A] mx-auto mt-3 md:mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 md:px-0">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`relative bg-white rounded-[32px] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${idx === 1 ? 'ring-2 ring-[#568F3A]' : ''}`}>
                            {idx === 1 && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#568F3A] text-white px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center space-y-4 mb-8">
                                <h4 className="text-2xl font-title font-bold text-gray-900 italic">{pkg.title}</h4>
                                <div className="text-[#568F3A] font-bold text-lg">{pkg.price}</div>
                                <div className={`h-1 w-12 mx-auto ${idx === 1 ? 'bg-[#568F3A]' : 'bg-gray-200'}`} />
                            </div>
                            <ul className="space-y-4 mb-10">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-gray-600 font-secondaryTitle text-sm md:text-base">
                                        <svg className="w-5 h-5 text-[#568F3A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default MaintenancePackages;
