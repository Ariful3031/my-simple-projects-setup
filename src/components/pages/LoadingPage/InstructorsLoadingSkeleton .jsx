import React from "react";

const InstructorCardSkeleton = () => {
    return (
        <div className="bg-white dark:bg-gray-800 border rounded-2xl overflow-hidden shadow animate-pulse">

            {/* Image */}
            <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-700"></div>

            {/* Content */}
            <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

                <div className="flex justify-between mt-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
                </div>

                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
            </div>
        </div>
    );
};

const InstructorsLoadingSkeleton = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">

            {/* Hero Banner */}
            <div className="w-full h-[220px] bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Filter Skeleton */}
                <div className="py-8 animate-pulse">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">

                        <div className="sm:col-span-2 lg:col-span-3 space-y-2">
                            <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                        <div className="space-y-2">
                            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                    </div>
                </div>

                {/* Instructor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <InstructorCardSkeleton key={index} />
                        ))}
                </div>

            </div>
        </div>
    );
};

export default InstructorsLoadingSkeleton;