import React from 'react'
import { useGetCourseListQuery } from '../../../redux/api/couresApi'
import CourseCard from './CourseCard';
import Loading from '../Loading/Loading';


const CoursesPage = () => {
  const { data, isLoading, error } = useGetCourseListQuery();
  console.log(data)

  const allCoursesData = data;


  if (isLoading) {
    return <Loading></Loading>
  }
  if (error) return <p>Error loading courses</p>;

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className='section_title text-2xl font-bold'>Explore All Our Courses</h1>
      <h3 className='section_subtitle text-gray-500 mb-8'>
        Find the perfect course to power your career.
      </h3>

      {/* ✅ FIXED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {
          allCoursesData?.map((course) => (


            <CourseCard key={course.id} course={course} ></CourseCard>

          ))
        }

      </div>
    </div>
  )
}

export default CoursesPage
