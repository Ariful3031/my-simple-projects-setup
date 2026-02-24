import React from 'react'
import HeroSubBanner from '../../Shared/HeroSubBanner/HeroSubBanner'
import InstructorFilterBar from './InstructorFilterBar/InstructorFilterBar'
import InstructorGrid from '../Home/Instructors/InstructorGrid'
import { teacherData } from '../Home/Instructors/Instructors'



const InstructorsPage = () => {
  const subBannerData = {
    title: 'Our Expert Instructors',
    description: "Learn from the best professionals in the industry",
  }
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <HeroSubBanner subBannerData={subBannerData}></HeroSubBanner>
      <InstructorFilterBar></InstructorFilterBar>
      <InstructorGrid teacherData={teacherData}></InstructorGrid>
    </div>
  )
}

export default InstructorsPage