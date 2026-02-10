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
const Services = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="pt-52 pb-60 mb-32 flex flex-col items-center justify-center bg-bottom bg-cover relative -z-50"
      >
        <div className="max-w-3xl flex flex-col items-center text-center gap-8 px-6">
          <div className="text-white text-title font-title leading-tight">
            {" "}
            <span className="text-[#568F3A] text-title">
              JAL Landscaping & Outdoor Design
            </span>{" "}
            Built for Lasting Beauty
          </div>
          <div className="text-[24px] font-secondaryTitle text-white">
            Custom outdoor landscapes designed to enhance curb appeal,
            functionality, and long-term value.
          </div>
          <div className="text-white">
            At JAL Landscaping and More, we create outdoor environments that
            feel natural, balanced, and easy to maintain. From artificial turf
            and decorative rock to complete landscape solutions, our team
            delivers thoughtful designs and precise installations tailored to
            your property.
          </div>
        </div>
      </div>
      {/* absolute left-0 right-0 -bottom-16  */}
      <div className="absolute right-0 -bottom-96">
        <EstimateForm />
      </div>
      <div className="py-24">
        <Solutions />
      </div>

      <OurServicesSteps />
      <div className="bg-[#568F3A] py-3 flex justify-start">
        <p className="text-center text-white pb-16 w-full text-[40px] font-secondaryTitle overflow-hidden h-10">
          ffds Proudly Serving Fresno, CA & Nearby Communities • Serving Fresno
          and Surrounding Areas • Local Outdoor Services You Can Trust
        </p>
      </div>
      <WhyUs data={whyUsData} image={image1} />
      <ProcessSection />
      <Reviews />
    </>
  );
};

export default Services;
