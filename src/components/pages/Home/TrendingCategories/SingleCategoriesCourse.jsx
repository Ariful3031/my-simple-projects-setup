import React from 'react'
import { useGetCourseListQuery } from '../../../../redux/api/couresApi'
import { useParams } from 'react-router';
import CourseCard from '../../CoursesPage/CourseCard';
import Loading from '../../Loading/Loading';

const SingleCategoriesCourse = () => {
    const params = useParams();
    const { data, isLoading, error } = useGetCourseListQuery({ status: "publish" });
    const categoryName = params?.id;

    const filterCategory = data?.filter((course) =>
        course?.category?.category_title === categoryName);


    if (isLoading) return <Loading></Loading>;
    if (error) return <p>Error loading courses</p>;
    return (
        <div>
            <h1 className='dark:text-white text-3xl font-bold text-center my-10 underline'>{categoryName}</h1>
            {
                filterCategory.length === 0 ?
                    (
                        <p className='text-red-400 text-center text-2xl font-bold min-h-[50vh] flex justify-center items-center'>No Course Found</p>
                    ) :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">


                            {
                                filterCategory?.map((course, index) => (

                                    <CourseCard course={course} key={index}></CourseCard>

                                ))
                            }

                        </div>
                    )
            }

        </div>
    )
}

export default SingleCategoriesCourse