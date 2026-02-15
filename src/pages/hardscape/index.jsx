import React from "react";
import HardscapeHero from "../../components/hardscape/HardscapeHero";
import HardscapeStats from "../../components/hardscape/HardscapeStats";
import EngineeringXRay from "../../components/hardscape/EngineeringXRay";
import MaterialSpotlight from "../../components/hardscape/MaterialSpotlight";
import TransformationJourney from "../../components/hardscape/TransformationJourney";
import HardscapeCTA from "../../components/hardscape/HardscapeCTA";

const Hardscape = () => {
  return (
    <>
      <HardscapeHero />
      <HardscapeStats />
      <EngineeringXRay />
      <MaterialSpotlight />
      <TransformationJourney />
      <HardscapeCTA />
    </>
  );
};

export default Hardscape;
