import React from "react";
import HeroSection from "../../components/heroSection";
import OutdoorSolutions from "../../components/OutdoorSolutions";
import Services from "../../components/services";

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
    </>
  );
};

export default Home;
