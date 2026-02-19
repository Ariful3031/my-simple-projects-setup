import React from 'react'

import { useGetCourseListQuery } from '../../../redux/api/couresApi'
import CourseCard from './CourseCard';

const CoursesPage = () => {
  const { data, isLoading, error } = useGetCourseListQuery();
  console.log(data)

  const demoCourses = [
    { id: "1", title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮" },
    { id: "2", title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮" },
    { id: "3", title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮" },
    { id: "4", title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮" },
    { id: "5", title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮" },
  ]

  if (isLoading) return <p>Loading...</p>;
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
          demoCourses.map((course, index) => (

            <CourseCard course={course} key={index}></CourseCard>

          ))
        }

      </div>
    </div>
  )
}

export default CoursesPage
