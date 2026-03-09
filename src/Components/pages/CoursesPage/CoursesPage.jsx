import React, { useState } from 'react'
import { useGetCourseListQuery } from '../../../redux/api/couresApi'
import CourseCard from './CourseCard';
import Loading from '../Loading/Loading';
import { FaSearch } from 'react-icons/fa';
import { useGetAllCategoriesListQuery } from '../../../redux/api/categoriesApi';


const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const { data, isLoading, error } = useGetCourseListQuery({ searchText: searchTerm, category: categoryTerm, status: "publish" });
  const { data: categorysData } = useGetAllCategoriesListQuery();
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

      <div className="py-8">
        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {/* Search */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className='text-xl font-bold'>Course Title:</label>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full mt-1 px-10 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              />

              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

          </div>

          {/* Order By */}
          <div className="">
            <label className='text-xl font-bold'>Category:</label>

            <select
              value={categoryTerm}
              onChange={(e) => setCategoryTerm(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">All</option>
              {
                categorysData?.map((category, index) => (
                  <option key={index} value={category?.category_title}>{category?.category_title} </option>
                ))
              }
            </select>
          </div>

        </div>
      </div>

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
