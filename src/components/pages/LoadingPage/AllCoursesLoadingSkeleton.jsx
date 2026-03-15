import React from "react";

const SkeletonCard = () => {
    return (
        <div className="border rounded-lg p-4 bg-white dark:bg-gray-700 animate-pulse">
            <div className="h-40 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        </div>
    );
};

const AllCoursesLoadingSkeleton = () => {
    // Change the number to however many skeletons you want to show
    const skeletons = Array(8).fill(0);

    return (
        <div className="px-4 md:px-10 py-10">
            {/* Skeleton Header */}
            <div className="space-y-2 animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
                <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>

            {/* Filter Skeletons */}
            <div className="py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    <div className="sm:col-span-2 lg:col-span-3 space-y-2">
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
                        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                    </div>
                </div>
            </div>

            {/* Course Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {skeletons.map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default AllCoursesLoadingSkeleton;