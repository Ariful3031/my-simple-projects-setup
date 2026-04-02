
import React from "react";

import MissionVission from "./MissionVission";
import StatsSection from "./StatsSection/StatsSection";
import MeetTeam from "./MeetTeam/MeetTeam";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import OurStory from "./OurStory/OurStory";
// import AboutUsHero from "./AboutUsHero/AboutUsHero";
import FooterSubBannerCta from "../../Shared/FooterSubBannerCta/FooterSubBannerCta";
import HeroSubBanner from "../../Shared/HeroSubBanner/HeroSubBanner";
// import bannerImage from "../../../assets/about-us-subbaner-image.jpg"

const AboutUsPage = () => {

  const footerSubBannerCtaInfo = {
    title: "Join Our Learning Community Today",
    buttonName: "Browse Courses",
    buttonLink: "/courses",
  }

  const subBannerData = {
    title: 'About Our Platform',
    description: "We are dedicated to providing quality online education for everyone.",
    subBannerImage: 'https://www.shutterstock.com/image-vector/about-us-header-image-icon-600nw-2665862721.jpg',
    // subBannerImage: bannerImage,
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* about us HERO */}
      {/* <AboutUsHero></AboutUsHero> */}
      <HeroSubBanner subBannerData={subBannerData} ></HeroSubBanner>

      {/* STORY  */}
      <OurStory></OurStory>

      {/*  MISSION & VISION */}
      <MissionVission></MissionVission>

      {/*  STATS  */}
      <StatsSection></StatsSection>

      {/*  TEAM */}

      <MeetTeam></MeetTeam>
      {/*  WHY CHOOSE US  */}

      <WhyChooseUs></WhyChooseUs>
      {/*  CTA  */}
      <FooterSubBannerCta footerSubBannerCtaInfo={footerSubBannerCtaInfo}></FooterSubBannerCta>
    </div>
  );
};

export default AboutUsPage;

