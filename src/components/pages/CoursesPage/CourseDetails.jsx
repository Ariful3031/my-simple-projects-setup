import { useParams } from "react-router";
import { useGetCourseListQuery } from "../../../redux/api/couresApi";
import { useState } from "react";
import CourseDetailsLoadingSkeleton from "../LoadingPage/CourseDetailsLoadingSkeleton";

const CourseDetails = () => {

  const { data, isLoading, error } = useGetCourseListQuery();
  const { id } = useParams();

  const coursesData = data;
  const course = coursesData?.find((c) => c?.id === id);

  const [activeTab, setActiveTab] = useState("overview");

  // ✅ FIRST check loading
  if (isLoading) {
    return <CourseDetailsLoadingSkeleton />;
  }

  // ✅ Optional error handling
  if (error) {
    return <div className="text-center py-10 text-red-500">Something went wrong</div>;
  }

  // ✅ After loading finished
  if (!course) {
    return <div className="text-center py-10">Course Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          <h1 className="text-2xl font-bold mb-2">
            {course?.title}
          </h1>

          <p className="text-red-500 text-sm mb-4">
            🔥 {course?.admissionStatus}
          </p>

          {/* Top Banner */}
          <img src={course?.thumbnail || null} alt="Banner Image" />
          {/* {
            course?.thumbnail ? (
              <img src={course?.thumbnail} alt="Banner Image" />
            ) :
              (
                <div className="relative bg-[#0B3C3C] text-white p-4">
                  <h2 className="text-lg font-bold text-yellow-400">
                    {course?.examTitle}
                  </h2>

                

          
                  <p className="text-sm font-semibold">{course?.status}</p>

                 
                  <div className="absolute bottom-2 left-2 w-16 h-16 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>

    
                  {course?.discount?.percentage > 0 && (
                    <div className="absolute right-3 bottom-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                      {course.discount.percentage}% ছাড়
                    </div>
                  )}
                </div>
              )

          } */}

          {/* Tabs */}
          <div className="flex gap-5 mt-6 border-b pb-2 text-sm font-medium">
            {["overview", "instructor", "routine", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-1 ${activeTab === tab
                  ? "border-b-2 border-red-600 text-black"
                  : "text-gray-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-6 text-sm text-gray-700 space-y-4">

            {/* Overview */}
            {activeTab === "overview" && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="whitespace-pre-line">{course.overview || "No description available."}</p>
              </div>
            )}


            {/* Instructor */}
            {activeTab === "instructor" && course?.instructors?.length ? (
              course.instructors.map((ins, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Link to={`/instructor/details/${ins?._id}`}>
                    <img
                      src={ins?.photoURL}   // ins.thumbnail ব্যবহার করুন
                      alt={``}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </Link>

                  <div>
                    <h4 className="font-semibold text-base">
                      {ins?.displayName}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {ins?.jobTitle || "No bio available"}
                    </p>
                  </div>
                </div>
              ))
            ) : activeTab === "instructor" ? (
              <p>No instructor information available.</p>
            ) : null}

            {/* Routine */}
            {activeTab === "routine" && course.routine?.length ? (
              <div className="space-y-3">
                {course.routine.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border p-3 rounded-md"
                  >
                    <span>{item.day}</span>
                    <span>{item.topic}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            ) : activeTab === "routine" && (
              <p>No routine available.</p>
            )}

            {/* Reviews */}
            {activeTab === "reviews" && course.reviews?.length ? (
              <div className="space-y-4">
                {course.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-md"
                  >
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-yellow-500">
                      {"★".repeat(review.rating)}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : activeTab === "reviews" && (
              <p>No reviews yet.</p>
            )}

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white shadow-md rounded-xl p-5 border h-fit">


          {/* Price */}
          {course?.discountedPrice ? (
            <div className="mt-3 flex gap-5 mb-2">
              <p className="text-xl font-semibold text-black dark:text-white ml-2">
                ৳ {course?.discountedPrice}
              </p>

              <p className="font-semibold ml-2 text-gray-400 line-through">
                ৳ {course?.regularPrice}
              </p>

            </div>
          ) : (
            <div className="mt-3">
              <p className="text-xl font-semibold text-black dark:text-white ml-2">
                ৳ {course?.regularPrice}
              </p>
            </div>
          )}

          {/* Button */}
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-semibold">
            Course Buy Now
          </button>

          {/* Info */}
          <div className="mt-6 space-y-3 text-sm text-gray-700">

            <div className="flex justify-between">
              <span>Course Duration</span>
              <span>{course.duration || "3 Month"}</span>
            </div>

            <div className="flex justify-between">
              <span>Total Lecture</span>
              <span>{course.totalLecture || "25"}</span>
            </div>

            <div className="flex justify-between">
              <span>Enrolled</span>
              <span>{course.enrolled || "1200+"}</span>
            </div>

            <div className="flex justify-between">
              <span>Language</span>
              <span>{course.language || "বাংলা"}</span>
            </div>

          </div>

          {/* Includes */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm">
              This Course Includes:
            </h4>

            <ul className="text-sm text-gray-600 space-y-2">
              {(course.includes || [
                "Full lifetime access",
                "Mobile & Computer access",
                "PDF Materials",
                "Certificate"
              ]).map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">Need help?</p>
            <p className="text-red-600 font-semibold">
              📞 {course.contact || "01884445333"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};


export default CourseDetails;

