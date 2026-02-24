
import React from "react";

import MissionVission from "./MissionVission";
import StatsSection from "./StatsSection/StatsSection";
import MeetTeam from "./MeetTeam/MeetTeam";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import OurStory from "./OurStory/OurStory";
import AboutUsHero from "./AboutUsHero/AboutUsHero";
import FooterSubBannerCta from "../../Shared/FooterSubBannerCta/FooterSubBannerCta";

const AboutUsPage = () => {

  const footerSubBannerCtaInfo = {
    title: "Join Our Learning Community Today",
    buttonName: "Browse Courses",
    buttonLink: "/courses",
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* about us HERO */}
      <AboutUsHero></AboutUsHero>

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

// import React from 'react'
// import { Player } from '@lottiefiles/react-lottie-player';
// const AboutUsPage = () => {
//   return (
//     <div className=''>
//       <h1>this is our about-us page</h1>
//       <Player
//         autoplay
//         loop
//         src="Loading.json" // Replace with your animation URL
//         style={{ height: '300px', width: '300px' }}
//       />
//       <Player
//         autoplay
//         loop
//         src="Lottie.json" // Replace with your animation URL
//         style={{ height: '300px', width: '300px' }}
//       />
//       <Player
//         autoplay
//         loop
//         src="Lottie3.json" // Replace with your animation URL
//         style={{ height: '300px', width: '300px' }}
//       />
//     </div>
//   )
// }

// export default AboutUsPage