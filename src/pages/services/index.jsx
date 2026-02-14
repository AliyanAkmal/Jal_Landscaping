import React from "react";
import background from "../../assets/backgrounds/serviceBg.png";
import EstimateForm from "../../components/estimateForm";
import OurServicesSteps from "../../components/ourServicesSteps";
import Solutions from "../../components/solutions";
import WhyUs from "../../components/whyUs";
import whyUsData from "../../components/whyUs/data";
import image1 from "../../assets/backgrounds/Rectangle 99.png";
import ProcessSection from "../../components/processSection";
import Reviews from "../../components/reviews";
import AdRunner from "../../components/adRunner";
// import floBorder from "../../assets/borders/Untitled_design__6_-removebg-preview.png";

const Services = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="pt-10 pb-48 sm:pt-32 mb-16 sm:mb-32 flex flex-col items-center justify-center bg-bottom bg-cover relative -z-50"
      >
        <div className="max-w-3xl flex flex-col items-center text-center gap-4 sm:gap-8 px-6">
          <div className="text-white text-[36px] sm:text-title font-[800] sm:font-title leading-tight">
            {" "}
            <span className="text-[#568F3A]">
              JAL Landscaping & Outdoor Design
            </span>{" "}
            Built for Lasting Beauty
          </div>
          <div className="text-[18px] sm:text-[24px] font-secondaryTitle text-white">
            Custom outdoor landscapes designed to enhance curb appeal,
            functionality, and long-term value.
          </div>
          <div className="text-white text-md">
            At JAL Landscaping and More, we create outdoor environments that
            feel natural, balanced, and easy to maintain. From artificial turf
            and decorative rock to complete landscape solutions, our team
            delivers thoughtful designs and precise installations tailored to
            your property.
          </div>
        </div>
        {/* <div className="relative xs:rotate-2 md:rotate-1 xs:-bottom-5 sm:-bottom-3 md:-bottom-4  l:-bottom-6 lg:-bottom-32 left-0 w-full z-20 overflow-x-hidden">
          <img src={floBorder} alt="" className="w-full object-cover" />
        </div> */}
      </div>
      {/* absolute left-0 right-0 -bottom-16  */}
      <div className="absolute right-0  -bottom-96 xs:-bottom-60 sm:-bottom-96 md:-bottom-96 l:-bottom-96 z-50 flex justify-end w-full pl-4 sm:px-0">
        <EstimateForm />
      </div>
      <div className="py-24">
        <Solutions />
      </div>

      <OurServicesSteps />
      <AdRunner />
      <WhyUs data={whyUsData} image={image1} />
      <ProcessSection />
      <Reviews />
    </>
  );
};

export default Services;
