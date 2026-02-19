import React from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const {id} =useParams()
  console.log(id)
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          <h1 className="text-xl md:text-2xl font-bold mb-2">
            গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-{id}
          </h1>

          <p className="text-red-500 text-sm mb-4">🔥 ভর্তি চলছে...</p>

          {/* Banner */}
          <div className="bg-[#0B3C3C] rounded-xl p-6 text-white relative overflow-hidden">
            <h2 className="text-2xl font-bold text-yellow-400">
              ১৯তম শিক্ষক নিবন্ধন
            </h2>

            <div className="inline-block mt-3 px-4 py-1 bg-red-500 rounded-full text-sm">
              (বিষয়ভিত্তিক) লাইভ ব্যাচ-৮
            </div>

            <p className="mt-4 text-lg">বিষয়: গণিত</p>
            <p className="text-sm">ভর্তি চলছে...</p>

            <div className="absolute right-4 bottom-4 bg-red-600 px-3 py-1 rounded-full text-xs">
              ৫০% ছাড়
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mt-6 border-b pb-2 text-sm">
            <button className="font-semibold border-b-2 border-red-600 pb-1">
              Overview
            </button>
            <button className="text-gray-500">Instructor</button>
            <button className="text-gray-500">Reviews</button>
          </div>

          {/* Description */}
          <div className="mt-6 text-sm text-gray-700 space-y-4 leading-relaxed">

            <h3 className="font-semibold text-base">Description :</h3>

            <p>
              ১৯তম শিক্ষক নিবন্ধন পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতির একটি বিশেষ কোর্স।
              এখানে লাইভ ক্লাস, রেকর্ডেড ভিডিও এবং প্রয়োজনীয় ম্যাটেরিয়াল দেওয়া হবে।
            </p>

            <p>
              এই কোর্সটি এমনভাবে সাজানো হয়েছে যাতে একজন শিক্ষার্থী শুরু থেকে শেষ পর্যন্ত
              সম্পূর্ণ প্রস্তুতি নিতে পারে।
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>লাইভ + রেকর্ডেড ক্লাস</li>
              <li>ডেইলি প্র্যাকটিস</li>
              <li>এক্সাম প্রস্তুতি</li>
              <li>সাপোর্ট সিস্টেম</li>
            </ul>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white shadow-md rounded-xl p-5 border h-fit">

          {/* Price */}
          <div className="mb-4">
            <span className="text-xl font-bold text-red-600">৳ 1710</span>
            <span className="text-sm text-gray-400 line-through ml-2">৳ 3800</span>
          </div>

          {/* Button */}
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-semibold">
            Course Buy Now
          </button>

          {/* Info */}
          <div className="mt-6 space-y-3 text-sm text-gray-700">

            <div className="flex justify-between">
              <span>Course Duration</span>
              <span>3 Month</span>
            </div>

            <div className="flex justify-between">
              <span>Total Lecture</span>
              <span>25</span>
            </div>

            <div className="flex justify-between">
              <span>Enrolled</span>
              <span>1200+</span>
            </div>

            <div className="flex justify-between">
              <span>Language</span>
              <span>বাংলা</span>
            </div>

          </div>

          {/* Includes */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm">
              This Course Includes:
            </h4>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔️ Full lifetime access</li>
              <li>✔️ Mobile & Computer access</li>
              <li>✔️ PDF Materials</li>
              <li>✔️ Certificate</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">Need help?</p>
            <p className="text-red-600 font-semibold">📞 01884445333</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetails;
