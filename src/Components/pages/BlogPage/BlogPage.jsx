import React from 'react'

const BlogPage = () => {

  const courses = [
    {
      id: 1,
      title: "Complete Web Development",
      description: "Learn HTML, CSS, JavaScript, React, and Next.js from scratch.",
      price: "Free",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Frontend Mastery",
      description: "Master modern frontend technologies and UI design.",
      price: "$49",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Next.js & Fullstack",
      description: "Build scalable web apps with Next.js and backend integration.",
      price: "$99",
      level: "Advanced",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Design modern and user-friendly interfaces.",
      price: "$39",
      level: "Beginner",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Online Learning Platform
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Start learning with high quality courses and build your skills.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {course.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="font-semibold text-green-600">
                  {course.price}
                </span>
              </div>

              <button className="w-full mt-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BlogPage