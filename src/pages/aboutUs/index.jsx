import React from "react";
import Wrapper from "../../components/wrapper";
import heroImg from "../../assets/backgrounds/WhatsApp Image 2026-01-21 at 3.20.18 PM 1.png";
import teamImg from "../../assets/image 1 (1).png";
import landscapeImg1 from "../../assets/backgrounds/Rectangle 94.png";
import landscapeImg2 from "../../assets/backgrounds/Rectangle 95.png";
import landscapeImg3 from "../../assets/backgrounds/Rectangle 96.png";
import projectImg from "../../assets/Rectangle 108.png";
import iconImg from "../../assets/icons/Vector.png";
import floBorder from "../../assets/borders/Untitled_design__6_-removebg-preview.png";

const AboutUs = () => {
  const achievements = [
    { number: "11+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Founded in Fresno",
      description: "Started as a family-owned operation serving residential and commercial clients throughout Fresno County."
    },
    {
      year: "2017",
      title: "Service Expansion",
      description: "Added hardscaping, irrigation systems, and commercial property maintenance to meet growing client demand."
    },
    {
      year: "2020",
      title: "Sustainable Solutions",
      description: "Introduced water-efficient landscaping and artificial turf installation to help California property owners conserve resources."
    },
    {
      year: "2026",
      title: "Trusted Local Leader",
      description: "Serving hundreds of satisfied clients across Fresno with a reputation built on quality work and honest service."
    }
  ];

  return (
    <div className="bg-white md:mb-44 ">
      {/* Hero Section */}
      <div
        className="relative bg-center bg-no-repeat min-h-[400px] md:min-h-[500px] border-none    lg:min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
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

      {/* Our Story Section */}
      <Wrapper>
        <div className="pt-20 pb-0">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 lg:pb-32">
              <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">OUR STORY</p>
              <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title text-gray-900 leading-tight mb-6">
                Fresno's Trusted <span className="text-[#345C39]">Landscaping Company</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-secondaryTitle">
                <p>
                  JAL Landscaping and More has been serving Fresno and surrounding areas since 2014. What started as a small family business has grown into one of the area's most reliable landscaping companies, with over 500 completed projects and counting.
                </p>
                <p>
                  We specialize in residential and commercial landscaping, from artificial turf installation and tree planting to complete outdoor renovations. Every project gets the same attention to detail, whether it's a small yard upgrade or a full property transformation.
                </p>
                <p>
                  As a family-owned business, we take pride in building long-term relationships with our clients. Our team shows up on time, communicates clearly, and delivers results that last. That's how we've earned our reputation in Fresno.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:h-[600px] self-end">
              <img
                src={teamImg}
                alt="JAL Landscaping Team in Fresno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Timeline Section */}
      <div className="bg-[#e6f2df] py-20">
        <Wrapper>
          <div className="text-center mb-16">
            <p className="text-[#345C39] font-semibold text-base md:text-lg mb-3 tracking-wider">OUR JOURNEY</p>
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title text-gray-900 leading-tight">
              Over a Decade of Quality Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-[#345C39] text-3xl md:text-4xl font-title font-bold mb-3">{item.year}</div>
                  <h3 className="text-lg md:text-xl font-title text-gray-900 mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-[#345C39]" />
                )}
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      {/* Achievements Section */}
      <div className="bg-[#345C39] text-white py-20">
        <Wrapper>
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title leading-tight mb-4">
              Proven Results You Can Trust
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-secondaryTitle">
              Real numbers from over a decade of service in Fresno
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-title text-white mb-2 font-bold">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg font-secondaryTitle text-gray-300">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      {/* Gallery Section */}
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

      {/* Why Choose Us - Modernized */}
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

          {/* Image Showcase Below Cards */}

        </Wrapper>
      </div>

      {/* Call to Action - Creative Design */}
      <div className="bg-[#345C39] py-24">
        <Wrapper>
          <div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm border border-white/50 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider">
                  GET STARTED TODAY
                </span>
              </div>
              <h2 className="text-[42px] md:text-[52px] font-title text-white leading-tight mb-6">
                Ready to Upgrade Your
                <span className="block text-white">Outdoor Space?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                Get a free estimate from Fresno's trusted landscaping company.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mb-10 justify-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                  Free On-Site Estimates
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                  Written Quotes
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-base font-semibold">
                  Licensed & Insured
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex gap-3 items-center bg-white text-[#345C39] h-14 px-8 font-secondaryTitle text-base rounded-xl justify-center hover:bg-[#345C39] hover:text-white hover:border-2 hover:border-white transition-all duration-300">
                  <img src={iconImg} alt="" className="h-7 w-7" />
                  <span>Get Your Free Estimate</span>
                </button>
                <button className="flex gap-3 items-center bg-transparent h-14 px-8 font-secondaryTitle text-base rounded-xl justify-center border-2 border-white text-white hover:bg-white hover:text-[#345C39] transition-all duration-300">
                  <img src={iconImg} alt="" className="h-6 w-6" />
                  Call (559) XXX-XXXX
                </button>
              </div>
            </div>

            {/* Bottom Stats Bar */}

          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default AboutUs;
