import React from "react";
import HeroSection from "../../components/heroSection";
import OutdoorSolutions from "../../components/OutdoorSolutions";
import Services from "../../components/services";
import OverlayCardSection from "../../components/overlayCard";
import bg1 from "../../assets/backgrounds/Rectangle 94.png";
import bg2 from "../../assets/backgrounds/Rectangle 95.png";
import bg3 from "../../assets/backgrounds/Rectangle 96.png";
import WhyUs from "../../components/whyUs";
import Reviews from "../../components/reviews";
import ProcessSection from "../../components/processSection";
import whyUsData from "../../components/whyUs/data";
import image1 from "../../assets/backgrounds/Rectangle 99.png";
import AdRunner from "../../components/adRunner";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        {" "}
        <OutdoorSolutions />
      </div>{" "}
      <Services />
      <AdRunner />
      <OverlayCardSection
        bgImage={bg1}
        align="right"
        title="Landscaping & Outdoor Design"
        description="We design and install outdoor landscapes that combine beauty, functionality, and low maintenance—tailored to your space and lifestyle."
        tags={[
          "Artificial Turf Installation",
          "Tree Planting",
          "Mulch Installation",
          "Rock & River Rock",
          "Water Features & Decorative Rock Rivers",
          "Complete Landscaping Solutions",
        ]}
      />
      <OverlayCardSection
        bgImage={bg2}
        align="left"
        title="Landscaping & Outdoor Design"
        description="We design and install outdoor landscapes that combine beauty, functionality, and low maintenance—tailored to your space and lifestyle."
        tags={[
          "Artificial Turf Installation",
          "Tree Planting",
          "Mulch Installation",
          "Rock & River Rock",
          "Water Features & Decorative Rock Rivers",
          "Complete Landscaping Solutions",
        ]}
      />
      <OverlayCardSection
        bgImage={bg3}
        align="right"
        title="Landscaping & Outdoor Design"
        description="We design and install outdoor landscapes that combine beauty, functionality, and low maintenance—tailored to your space and lifestyle."
        tags={[
          "Artificial Turf Installation",
          "Tree Planting",
          "Mulch Installation",
          "Rock & River Rock",
          "Water Features & Decorative Rock Rivers",
          "Complete Landscaping Solutions",
        ]}
      />
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

export default Home;
