
import React from "react";

import MissionVission from "./MissionVission";
import StatsSection from "./StatsSection/StatsSection";
import MeetTeam from "./MeetTeam/MeetTeam";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import OurStory from "./OurStory/OurStory";
import AboutUsHero from "./AboutUsHero/AboutUsHero";

const AboutUsPage = () => {






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
      <div className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Learning Community Today
          </h2>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition">
            Browse Courses
          </button>
        </div>
      </div>
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