import React from "react";

const CourseDetailsLoadingSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">

                    {/* Title */}
                    <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

                    {/* Admission status */}
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-4"></div>

                    {/* Banner */}
                    <div className="w-full h-[250px] md:h-[320px] bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

                    {/* Tabs */}
                    <div className="flex gap-6 mt-6 border-b pb-3">
                        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 space-y-3">
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>

                </div>


                {/* RIGHT SIDE CARD */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 border h-fit space-y-4">

                    {/* Price */}
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>

                    {/* Button */}
                    <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>

                    {/* Info */}
                    <div className="mt-6 space-y-3">

                        <div className="flex justify-between">
                            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                        <div className="flex justify-between">
                            <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                        <div className="flex justify-between">
                            <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                        <div className="flex justify-between">
                            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>

                    </div>

                    {/* Includes */}
                    <div className="mt-6 space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-2"></div>

                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/5"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>

                    {/* Contact */}
                    <div className="mt-6 text-center space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mx-auto"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mx-auto"></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseDetailsLoadingSkeleton;