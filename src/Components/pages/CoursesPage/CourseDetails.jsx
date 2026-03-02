import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseListQuery } from "../../../redux/api/couresApi";
import Loading from "../Loading/Loading";


const CourseDetails = () => {

  const { data, isLoading, error } = useGetCourseListQuery();
  const { id } = useParams();


  // Dynamic course find by ID
  const coursesData = data;
  // console.log(id);
  // console.log(coursesData)

  const course = coursesData?.find((c) => c?.id === id);

  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    return <div className="text-center py-10">Course Not Found</div>;
  }
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          <h1 className="text-2xl font-bold mb-2">
            {course.title}
          </h1>

          <p className="text-red-500 text-sm mb-4">
            🔥 {course.status}
          </p>

          {/* Top Banner */}
          {
            course?.thumbnail ? (
              <img src={course?.thumbnail} alt="Banner Image" />
            ) :
              (
                <div className="relative bg-[#0B3C3C] text-white p-4">
                  <h2 className="text-lg font-bold text-yellow-400">
                    {course?.examTitle}
                  </h2>

                  <div className="inline-block mt-2 px-3 py-1 bg-red-500 rounded-full text-xs font-semibold">
                    {course?.batchLabel}
                  </div>

                  <p className="mt-2 text-sm">{course?.subject}</p>
                  <p className="text-sm font-semibold">{course?.status}</p>

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
            {activeTab === "instructor" && course.instructor ? (
              <div className="flex items-start gap-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-base">
                    {course.instructor.name}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            ) : activeTab === "instructor" && (
              <p>No instructor information available.</p>
            )}

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
          <div className="mb-4">
            <span className="text-xl font-bold text-red-600">
              ৳ {course.pricing?.discountedPrice}
            </span>
            <span className="text-sm text-gray-400 line-through ml-2">
              ৳ {course.pricing?.originalPrice}
            </span>
          </div>

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

