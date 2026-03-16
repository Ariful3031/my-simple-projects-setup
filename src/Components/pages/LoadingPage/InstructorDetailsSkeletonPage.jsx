// InstructorSkeletonPage.jsx
import React from "react";

const HeroInstructorSkeleton = () => (
  <div className="h-[350px] relative bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
      {/* Skeleton for name */}
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
      {/* Skeleton for designation */}
      <div className="h-5 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  </div>
);

const ProfileCardSkeleton = () => (
  <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-2 flex my-11 flex-col md:flex-row gap-8 animate-pulse">
    {/* Avatar */}
    <div className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-600"></div>

    {/* Text area */}
    <div className="flex-1 flex flex-col gap-4">
      {/* Name */}
      <div className="h-7 w-48 bg-gray-300 dark:bg-gray-600 rounded"></div>
      {/* Institute */}
      <div className="h-5 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
      {/* Stats */}
      <div className="mt-6 flex flex-wrap gap-6">
        <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="h-5 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  </div>
);

const placeholderSkills = Array(4).fill(0);

const SkillsSkeleton = () => (
  <div className="w-full my-11 border-2 border-gray-200 rounded-xl shadow-xl p-4 animate-pulse">
    {/* Title */}
    <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-6"></div>

    {/* Skills */}
    {placeholderSkills.map((_, index) => (
      <div key={index} className="mb-5">
        {/* Skill name + percentage */}
        <div className="flex justify-between mb-2">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);
// Placeholder for 8 course cards
const placeholderCourses = Array(8).fill(0)

const InstructorCoursesSkeleton = () => (
  <div className="py-16 px-2 md:px-0 bg-gray-50 dark:bg-gray-900 animate-pulse">
    {/* Title */}
    <div className="h-10 w-64 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-10"></div>

    {/* Course grid */}
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {placeholderCourses.map((_, index) => (
        <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md h-60 w-full">
          {/* Image placeholder */}
          <div className="h-36 w-full bg-gray-300 dark:bg-gray-600 rounded-t-xl"></div>
          {/* Text placeholders */}
          <div className="p-4 flex flex-col gap-2">
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const placeholderCards = Array(8).fill(0); // 8 skeleton feedbacks

const StudentFeedbacksSkeleton = () => (
  <div className="py-16 px-2 md:px-0 animate-pulse">
    {/* Title */}
    <div className="h-10 w-64 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-10"></div>

    {/* Feedback grid */}
    <div className="w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
      {placeholderCards.map((_, index) => (
        <div
          key={index}
          className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg p-6 border border-gray-300 dark:border-gray-600"
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-6 bg-gray-300 dark:bg-gray-600 w-10 h-10 rounded-full"></div>

          {/* Profile + Name */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-lg mt-4">
            {Array(5).fill(0).map((_, idx) => (
              <div key={idx} className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            ))}
          </div>

          {/* Comment */}
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InstructorCTASkeleton = () => (
  <div className="py-20 bg-blue-600 text-center animate-pulse">
    {/* Heading */}
    <div className="h-10 md:h-12 w-64 md:w-80 bg-gray-300 dark:bg-gray-600 mx-auto rounded mb-6"></div>

    {/* Button */}
    <div className="h-10 w-36 bg-gray-300 dark:bg-gray-600 mx-auto rounded"></div>
  </div>
);

const InstructorDetailsSkeletonPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 p-5">
      <HeroInstructorSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ProfileCardSkeleton />
        <SkillsSkeleton />
      </div>
      <InstructorCoursesSkeleton />
      <StudentFeedbacksSkeleton />
      <InstructorCTASkeleton />
    </div>
  );
};

export default InstructorDetailsSkeletonPage;