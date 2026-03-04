import React from 'react'
import { useGetCourseListQuery } from '../../../../redux/api/couresApi'
import { useParams } from 'react-router';
import CourseCard from '../../CoursesPage/CourseCard';
import Loading from '../../Loading/Loading';

const SingleCategoriesCourse = () => {
    const params = useParams();
    const { data, isLoading, error } = useGetCourseListQuery();
    const categoryName = params?.id;
    // console.log(categoryName)
    const filterCategory = data?.filter((course) =>
        course?.category?.category_title === categoryName);
    // console.log(filterCategory)

    if (isLoading) return <Loading></Loading>;
    if (error) return <p>Error loading courses</p>;
    return (
        <div>
            <h1 className='dark:text-white text-3xl font-bold text-center my-10'>{categoryName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {
                    filterCategory?.map((course, index) => (

                        <CourseCard course={course} key={index}></CourseCard>

                    ))
                }

            </div>
        </div>
    )
}

export default SingleCategoriesCourse