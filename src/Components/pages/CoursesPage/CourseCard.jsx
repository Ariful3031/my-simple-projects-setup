
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  console.log(course)
  return (
    <div className=" dark:bg-slate-700  rounded-xl shadow-md overflow-hidden border dark:border-gray-500">

      {/* Top Banner */}
      <Link
        to={`/course/${course?.id}`}
      >
        {
          course?.thumbnail ? (
            <img className="w-full h-52 object-cover" src={course?.thumbnail} alt="Banner Image" />
          ) :
            (
              <div className="relative bg-[#0B3C3C] text-white text-center h-52 p-4">
                <h2 className="text-2xl font-extrabold mt-10 text-yellow-400">
                  {course?.examTitle}
                </h2>

                <div className="inline-block mt-2 px-3 py-1 bg-red-500 rounded-full text-sm font-semibold">
                  {course?.batchLabel}
                </div>

                <p className="mt-2 text-2xl font-bold">{course?.subject}</p>
                <p className="text-xl font-medium mt-1">{course?.status}</p>

                {/* Decorative Glow */}
                <div className="absolute bottom-2 left-2 w-16 h-16 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>

                {/* Discount Badge */}
                {course?.discount?.percentage > 0 && (
                  <div className="absolute right-3 bottom-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {course.discount.percentage}% ছাড়
                  </div>
                )}
              </div>
            )

        }
      </Link>



      {/* Content */}
      <div className="p-4">
        <Link
          to={`/course/${course?.id}`}
        >
          <h3 className="text-gray-800 dark:text-white font-bold text-xl leading-5">
            {course?.title}
          </h3>
        </Link>


        {/* Rating */}
        <div className="flex items-center justify-between mt-2 text-yellow-400 text-xl font-medium">
          {"★".repeat(Math.floor(course?.rating?.average || 0))}
          {"☆".repeat(5 - Math.floor(course?.rating?.average || 0))}

          <Link
            to={`/course/${course?.id}`}
            className="ml-2 text-blue-600 dark:text-blue-400 text-xl font-medium cursor-pointer"
          >
            View Details
          </Link>
        </div>

        <div className="grid grid-cols-2 items-center mt-2">
          {/* Price */}
          {course?.pricing?.discountedPrice ? (
            <div className="mt-3">
              <p className="font-semibold ml-2 text-gray-400 line-through">
                ৳ {course?.pricing?.originalPrice}
              </p>
              <p className="text-xl font-semibold text-black dark:text-white ml-2">
                ৳ {course?.pricing?.discountedPrice}
              </p>
            </div>
          ) : (
            <div className="mt-3">
              <p className="text-xl font-semibold text-black dark:text-white ml-2">
                ৳ {course?.pricing?.originalPrice}
              </p>
            </div>
          )}

          {/* Button (Flip Effect) */}
          <Link to={`/course-checkout/${course?.id}`}>
            <div className="group w-32 mx-auto">
              <div className="relative h-10 [perspective:1200px]">
                <div className="absolute inset-0 transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  {/* Front (Default) */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-md bg-red-700 dark:bg-red-800 text-white font-semibold shadow-md [backface-visibility:hidden]">
                    কোর্সটি কিনুন
                  </div>
                  {/* Back (Flip Side) */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-md bg-red-800 dark:bg-red-900 text-white font-semibold shadow-md [backface-visibility:hidden] [transform:rotateX(-180deg)]">
                    ক্লিক করুন!
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
