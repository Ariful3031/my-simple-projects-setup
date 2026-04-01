// import React from 'react'
// import { useGetMyEnrollCoursesQuery } from '../../../../redux/api/EnrolledCourseApi';
// import useCurrentUser from '../../../hooks/useCurrentUser';
// import { Link } from 'react-router';

// const MyCourses = () => {
//   const user = useCurrentUser();
//   const { data, isLoading } = useGetMyEnrollCoursesQuery(user?.email);
//   console.log(user?.email);
//   console.log(data)

//   return (
//     <div>
//       <h1 className='text-xl font-semibold text-center underline underline-offset-8 my-5'>আমার কোর্স সমূহ</h1>
//       <div className="grid grid-cols-4 gap-5 mt-10 px-5">
//         {
//           data?.map((course, index) => (
//             <Link to={`/students-dashboard/course-contents/${course?.id}`} key={index} className="border border-gray-300 rounded-md transition-transform duration-300 hover:-translate-y-2">
//               <img src={course?.thumbnail} className='rounded-t-md' alt="" />
//               <p className=' font-bold px-1'>{course?.title}</p>
//               <p>{course?.id}</p>
//             </Link>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default MyCourses

import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMyEnrollCoursesQuery } from '../../../../redux/api/EnrolledCourseApi';
import useCurrentUser from '../../../hooks/useCurrentUser';
import Loading from '../../../pages/Loading/Loading';

const MyCourses = () => {

  const user = useCurrentUser();
  const { data, isLoading } = useGetMyEnrollCoursesQuery(user?.email);

  const myAllCourses = data;

  // const demoCourse = [
  //   {
  //     id: "c1", 
  //     title: "Web Development",
  //     thumbnail: "https://via.placeholder.com/300x150?text=Web+Dev"
  //   },
  //   {
  //     id: "c2",
  //     title: "Data Science",
  //     thumbnail: "https://via.placeholder.com/300x150?text=Data+Science"
  //   },
  //   {
  //     id: "c3",
  //     title: "Digital Marketing",
  //     thumbnail: "https://via.placeholder.com/300x150?text=Digital+Marketing"
  //   },
  //   {
  //     id: "c4",
  //     title: "Graphic Design",
  //     thumbnail: "https://via.placeholder.com/300x150?text=Graphic+Design"
  //   },
  // ];

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