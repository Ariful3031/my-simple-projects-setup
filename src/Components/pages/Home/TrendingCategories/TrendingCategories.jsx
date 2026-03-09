import React from 'react'
import { motion } from "framer-motion";
import { FaUserGraduate } from 'react-icons/fa6';
import { Link } from 'react-router';
import Loading from '../../Loading/Loading';
import { useGetAllCategoriesListQuery } from '../../../../redux/api/categoriesApi';
export const TrendingCategories = () => {

    const { data: categoriesData, isLoading: categoriesLoading, error } = useGetAllCategoriesListQuery();




    if (categoriesLoading) return <Loading></Loading>;
    if (error) return <p>Error loading courses</p>;
    return (
        <div className='px-2'>

            <h1 className='section_title'>Trending Categories</h1>
            <h3 className='section_subtitle'>Our Growing Community</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-2  ">
                {
                    categoriesData?.map((category) =>
                        <Link to={`/course_single_category/${category?.category_title}`} key={category?.id} className="border text-primary-600 border-gray-300 dark:border-black_primary-600 hover:border-primary-600 dark:hover:border-gray-300 flex items-center justify-center gap-3 py-1 px-3 shadow-lg hover:shadow-2xl duration-300 rounded-xl ">
                            <div className="text-4xl  p-5 lg:p-2 bg-primary-100 flex justify-center items-center rounded-xl border-2">
                                <FaUserGraduate />
                            </div>
                            <div className="">
                                <h2 className='text-black mb-1 dark:text-[#D1D5DB] text-xl font-semibold'>{category?.category_title}</h2>
                                <h3 className='text-[#4B5563] dark:text-gray-400'>{category?.category_description}</h3>
                            </div>

                        </Link>
                    )
                }
            </div>

        </div>
    )
}
