

import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMyEnrollCoursesQuery } from '../../../../redux/api/EnrolledCourseApi';
import useCurrentUser from '../../../hooks/useCurrentUser';
import Loading from '../../../pages/Loading/Loading';

const MyCourses = () => {

  const user = useCurrentUser();
  const { data, isLoading } = useGetMyEnrollCoursesQuery(user?.email);

  const myAllCourses = data;

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-center underline underline-offset-8 my-5">আমার কোর্স সমূহ</h1>
      <div className="grid grid-cols-4 gap-5 mt-10 px-5">
        {myAllCourses?.map((course) => (
          <Link
            key={course.id}
            to={`/students-dashboard/course-contents/${course.id}`}
            className="border border-gray-300 rounded-md transition-transform duration-300 hover:-translate-y-2"
          >
            <img src={course.thumbnail} className="rounded-t-md" alt={course.title} />
            <p className="font-bold px-1">{course.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;