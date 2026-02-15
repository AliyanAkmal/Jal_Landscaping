import React from "react";
import AboutHero from "../../components/aboutUs/AboutHero";
import AboutStory from "../../components/aboutUs/AboutStory";
import AboutTimeline from "../../components/aboutUs/AboutTimeline";
import AboutAchievements from "../../components/aboutUs/AboutAchievements";
import AboutGallery from "../../components/aboutUs/AboutGallery";
import AboutWhyUs from "../../components/aboutUs/AboutWhyUs";
import AboutCTA from "../../components/aboutUs/AboutCTA";

const AboutUs = () => {
  return (
    <div className=" md:mb-44">
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutAchievements />
      <AboutGallery />
      <AboutWhyUs />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;
