import React from "react";
import Wrapper from "../wrapper";

const AboutWhyUs = () => {
    return (
        <div className="bg-white pb-20 md:py-20">
            <Wrapper>
                <div className="text-center mb-16">
                    <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">WHY CHOOSE US</p>
                    <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-title text-gray-900 leading-tight mb-4">
                        What Makes <span className="text-[#345C39]">JAL Landscaping</span> Different
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-secondaryTitle">
                        We're a local Fresno company that shows up, does the work right, and stands behind every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345C39]/90 to-[#345C39] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-8">
                            <div className="w-16 h-16 bg-[#345C39]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#345C39] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-title font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                Family-Owned Business
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                You work directly with the owners. No subcontractors, no runaround—just honest communication from start to finish.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345C39]/90 to-[#345C39] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-8">
                            <div className="w-16 h-16 bg-[#345C39]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#345C39] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-title font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                11+ Years in Fresno
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                We know Fresno's climate, soil conditions, and what plants thrive here. That local knowledge makes a difference.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345C39]/90 to-[#345C39] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-8">
                            <div className="w-16 h-16 bg-[#345C39]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#345C39] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-title font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                Licensed & Insured
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                Fully licensed, bonded, and insured for your protection. We handle permits and follow all local regulations.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345C39]/90 to-[#345C39] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-8">
                            <div className="w-16 h-16 bg-[#345C39]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#345C39] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-title font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                Fair, Transparent Pricing
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                Detailed written estimates with no hidden fees. You'll know exactly what you're paying for before we start.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutWhyUs;
