import React from "react";
import { Link } from "react-router";

const CourseCard = ({course}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border">
      
      {/* Top Banner */}
      <div className="relative bg-[#0B3C3C] text-white p-4">
        <h2 className="text-lg font-bold text-yellow-400">
          ১৯তম শিক্ষক নিবন্ধন
        </h2>

        <div className="inline-block mt-2 px-3 py-1 bg-red-500 rounded-full text-xs font-semibold">
          (বিসিএসডিসি) লাইভ ব্যাচ-৮
        </div>

        <p className="mt-2 text-sm">বিষয়: গণিত</p>
        <p className="text-sm font-semibold">ভর্তি চলছে...</p>

        {/* Decorative Circle Glow */}
        <div className="absolute bottom-2 left-2 w-16 h-16 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>

        {/* Badge */}
        <div className="absolute right-3 bottom-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
          ৫০% ছাড়
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-sm leading-5">
          গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2 text-yellow-400 text-sm">
          ★ ★ ★ ★ ☆
          <Link to={`/course/${course?.id}`} className="ml-2 text-gray-500 text-xs cursor-pointer">
            View Details
          </Link>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="text-gray-400 line-through text-sm">৳ 3800</span>
          <span className="text-xl font-bold text-black ml-2">৳ 1710</span>
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-semibold transition">
          কোর্সটি কিনুন
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
