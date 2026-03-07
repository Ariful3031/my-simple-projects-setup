import React, { useState } from 'react'
import HeroSubBanner from '../../Shared/HeroSubBanner/HeroSubBanner'
import InstructorFilterBar from './InstructorFilterBar/InstructorFilterBar'
import InstructorGrid from '../Home/Instructors/InstructorGrid'
// import { teacherData } from '../Home/Instructors/Instructors'
import Loading from '../Loading/Loading'
import { useGetAllUsersAdminQuery } from '../../../redux/api/authApi'



const InstructorsPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("")

  const { data, isLoading } = useGetAllUsersAdminQuery({ role: 'teacher', searchText: searchTerm, categoryRole: categoryTerm });
  const teacherData = data;


  const subBannerData = {
    title: 'Our Expert Instructors',
    description: "Learn from the best professionals in the industry",
    subBannerImage: "",
  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <HeroSubBanner subBannerData={subBannerData}></HeroSubBanner>
      <InstructorFilterBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        categoryTerm={categoryTerm}
        setCategoryTerm={setCategoryTerm}
      ></InstructorFilterBar>
      <InstructorGrid teacherData={teacherData}></InstructorGrid>
    </div>
  )
}

export default InstructorsPage