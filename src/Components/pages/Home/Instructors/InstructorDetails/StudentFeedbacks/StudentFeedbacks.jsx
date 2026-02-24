import React from 'react'

const StudentFeedbacks = ({ teacher }) => {
   
    const studentFeedbacks = teacher?.reviews;

    if (studentFeedbacks.length < 1) {
        return (

            <div className="py-4 px-6 bg-gray-50 dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Student Feedback
                </h2>
                <div className="text-center py-10 text-red-500">
                    No Student Feedback Found!
                </div>
            </div>

        );
    }

    return (
        <div className="py-16 px-2 md:px-0">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                Student Feedback
            </h2>

            <div className="w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 mt-10">
                {studentFeedbacks.map((feedback) => (
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 group">

                        {/* Quote Icon */}
                        <div className="absolute -top-4 left-6 bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                            ❝
                        </div>

                        {/* Profile + Name Row */}
                        <div className="flex items-center gap-4 mt-4">
                            <img
                                src={feedback?.image || "https://i.pravatar.cc/150"}
                                alt={feedback?.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                            />

                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {feedback?.name}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Student
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mt-4">
                            <div className="flex items-center gap-1 text-yellow-400 text-lg">
                                {[...Array(5)].map((_, index) => {
                                    const rating = feedback?.rating || 0;

                                    return (
                                        <span key={index}>
                                            {rating >= index + 1
                                                ? "★"
                                                : "☆"}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Comment */}
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                            {feedback?.comment}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentFeedbacks