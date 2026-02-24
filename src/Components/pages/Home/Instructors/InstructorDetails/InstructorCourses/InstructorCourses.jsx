import React from 'react'
import { allCoursesData } from '../../../../CoursesPage/CoursesPage';
import CourseCard from '../../../../CoursesPage/CourseCard';

const InstructorCourses = ({ teacher }) => {

    // console.log(teacher?.courses)
    const teacherCourseIds = teacher?.courses.map((course) => course?.courseId)
    console.log(teacherCourseIds)


    const instructorCoursesData = allCoursesData.filter((course) => teacherCourseIds.includes(course.id));

    if (instructorCoursesData.length < 1) {
        return (

            <div className="py-4 px-6 bg-gray-50 dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Courses by Instructor
                </h2>
                <div className="text-center py-10 text-red-500">
                   No Instructor Course Found
                </div>
            </div>

        );
    }

    return (
        <div className="py-16 px-2 md:px-0 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                Courses by Instructor
            </h2>

            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                {instructorCoursesData?.map((course) => (
                    <CourseCard key={course?.id} course={course}></CourseCard>
                ))}
            </div>
        </div>
    )
}

export default InstructorCourses

