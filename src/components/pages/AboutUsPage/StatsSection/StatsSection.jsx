import React from 'react'
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaStar } from "react-icons/fa";

const StatsSection = () => {
    const stats = [
        { id: 1, icon: <FaUsers />, number: "10K+", label: "Students" },
        { id: 2, icon: <FaChalkboardTeacher />, number: "200+", label: "Instructors" },
        { id: 3, icon: <FaBookOpen />, number: "500+", label: "Courses" },
        { id: 4, icon: <FaStar />, number: "4.8", label: "Average Rating" },
    ];
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((item) => (
                    <div key={item.id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
                        <div className="text-3xl text-indigo-500 mb-3 flex justify-center">
                            {item.icon}
                        </div>
                        <h4 className="text-2xl font-bold">{item.number}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatsSection