import React from 'react'
import { Link } from 'react-router'

const InstructorCard = ({ teacher }) => {


    return (
        <div className="group relative bg-green-100 dark:bg-black_primary-800 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Image Section */}
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-[300px] 2xl:h-[350px] object-cover group-hover:scale-110 transition-all duration-700 rounded-b-[27px]"
                    src={teacher?.photoURL}
                    alt={teacher?.displayName}
                />

                {/* Experience Badge */}
                <span className="absolute top-4 left-4 bg-green-300  text-sm px-3 py-1 rounded-full shadow-lg">
                    {teacher?.experience}+ Years
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 dark:text-[#E2E8F0] mb-1">
                    {teacher?.displayName}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {teacher?.jobTitle}
                </p>

                {/* Rating + Students */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span>⭐ {teacher?.rating}</span>
                    <span>{teacher?.totalStudents}+ Students</span>
                </div>

                {/* Button */}
                <Link
                    to={`/instructor/details/${teacher?._id}`}
                    className="btn-gradient">
                    View Profile
                </Link>
            </div>
        </div>
    )
}

export default InstructorCard