import React from 'react'
import Image from '../../../assets/screencapture-online-learning-platfom-netlify-app-2026-02-03-11_59_59.png'
import { useGetCourseListQuery } from '../../../redux/api/couresApi'

const CoursesPage = () => {
  const { data, isLoading, error } = useGetCourseListQuery();
  const course = data;
  console.log(course);
  return (
    <div>
      <h1>This is our Courses page</h1>
      <div className="w-[200px] h-[200px] overflow-hidden group border rounded-lg">
        <img
          src={Image}
          alt="Full Page"
          className="w-full transition-transform duration-[1000ms] ease-linear group-hover:translate-y-[-49%]
    "
        />
      </div>
    </div>
  )
}

export default CoursesPage