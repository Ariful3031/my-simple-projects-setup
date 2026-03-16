import React from 'react'
import { motion } from "framer-motion";
import { useGetCourseListQuery } from '../../../../redux/api/couresApi';
import CourseCard from '../../CoursesPage/CourseCard';
export const TopCourses = () => {

  const { data, isLoading, error } = useGetCourseListQuery({ status: "publish" });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;

  return (
    <div className='px-2'>

      <div className="px-4 md:px-10 py-10">
        <h1 className='section_title text-2xl font-bold'>Top Courses</h1>
        <h3 className='section_subtitle text-gray-500 mb-8'>
          Crafted by industry pros, loved by thousands.
        </h3>

        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {
            data?.map((course, index) => (

              <CourseCard course={course} key={index}></CourseCard>

            ))
          }

        </div>
      </div>

    </div>
  )
}
