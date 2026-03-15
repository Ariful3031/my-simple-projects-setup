import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useGetCourseListQuery } from "../../../redux/api/couresApi";

const CourseCheckoutPage = () => {
  const { id } = useParams();
  const { register, handleSubmit, watch, formState: { errors }, } = useForm()
  const { data, isLoading, error } = useGetCourseListQuery({ status: "publish" });

  // Dynamic course find by ID
  const course = data?.find((c) => c.id === id);

  if (!course) {
    return <div className="text-center py-10">Course Not Found</div>;
  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5  gap-5 xl:gap-20">

        {/* Course Details Section */}
        <div className="bg-white lg:col-span-3 md:w-5/6 mx-auto dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {course?.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-2">
            {course?.overview}
          </p>

          <div className="mt-4">
            {course?.pricing?.discountedPrice ? (
              <div className="mt-3 flex items-center gap-1">
                <p className="text-xl font-semibold">Course Price:</p>
                <p className=" text-red-600 text-3xl font-bold">
                  ৳<span className="font-bold text-xl line-through">{course?.pricing?.discountedPrice}</span>
                </p>
                <p className="text-green-600 dark:text-white0 text-3xl font-bold">
                  ৳<span className="font-bold text-xl line-through">{course?.pricing?.originalPrice}</span>
                </p>
              </div>
            ) : (
              <div className="">
                <p className="text-xl font-semibold text-green-600 dark:text-white">
                  ৳{course?.pricing?.originalPrice}
                </p>
              </div>
            )}
          </div>

          <div className="mt-3 inline-block bg-red-700 text-white text-xs px-3 py-1 rounded">
            Duration 2 days remaining
          </div>

          {/* Image */}
          <div className="mt-6">
            {
              course?.thumbnail ? (
                <img className=" w-full h-[300px]  xl:h-[520px] rounded-xl" src={course?.thumbnail} alt="Banner Image" />
              ) :
                (
                  <div className="relative bg-[#0B3C3C] text-white h-[400px] text-center p-4">
                    <h2 className="text-5xl font-extrabold mt-10 my-5 text-yellow-400">
                      {course?.examTitle}
                    </h2>

                    <div className="inline-block mt-2 px-3 py-1 bg-red-500 rounded-full text-xl font-semibold">
                      {course?.batchLabel}
                    </div>

                    <p className="mt-2 text-4xl my-3 font-bold">{course?.subject}</p>
                    <p className="text-2xl font-medium mb-10">{course?.status}</p>

                    {/* Decorative Glow */}
                    <div className="absolute bottom-2 left-2 w-20 h-20  bg-yellow-400 opacity-20 rounded-full blur-xl"></div>

                    {/* Discount Badge */}
                    {course?.discount?.percentage > 0 && (
                      <div className="absolute right-3 bottom-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {course.discount.percentage}% ছাড়
                      </div>
                    )}
                  </div>
                )

            }
          </div>
        </div>

        {/* Checkout Summary Section */}
        <div className="bg-white w-full lg:col-span-2 mx-auto dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Check Out Summary
          </h2>

          {/* Input Field */}

          {/* Name input field  */}
          <div className="mb-2">
            <label className="label text-black dark:text-white font-semibold"> Full Name</label>
            <input type="text"
              {...register("name", { required: true })}
              name='name' className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#02A53B] dark:bg-gray-700 dark:text-white  focus:border-none" placeholder="Enter your name" />

            {errors.name && <p className='text-red-700'>Name is required</p>}
            <span className="text-xs text-red-500 mt-1 block">
              আপনার এই নাম কোর্সে সার্টিফিকেটে ব্যবহার হবে
            </span>
          </div>

          {/* Mobile number */}
          <div className="mb-2">
            <label className="label text-black dark:text-white font-semibold">Mobile No.</label>
            <input type="number"
              {...register("mobile_number", { required: true })}
              name='mobile_number' className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#02A53B] dark:bg-gray-700 dark:text-white  focus:border-none" placeholder="Mobile number" />
            {errors.mobile_number && <p className='text-red-700'>Mobile number is required</p>}
            <span className="text-xs text-red-500 mt-1 block">
              আপনার এই নম্বরে কোর্সটি রেজিস্টার করা হবে
            </span>
          </div>
          {/* Confirm Mobile */}
          <div className="mb-4">
            <label className="label text-black dark:text-white font-semibold">Confirm Mobile No.</label>
            <input type="number"
              {...register("confirm_number", { required: true })}
              name='confirm_number' className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#02A53B] dark:bg-gray-700 dark:text-white  focus:border-none" placeholder="Confirm number" />
            {errors.confirm_number && <p className='text-red-700'>Confirm number is required</p>}
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <label className="text-black dark:text-white font-semibold">
              Payment Method:
            </label>

            <div className="mt-2">
              <label className="flex items-center justify-between mb-5 gap-2 border border-gray-300 dark:border-gray-600 rounded-lg p-3 flex-1">
                <input className="w-5 h-5 rounded-full" type="radio" name="payment" />
                <span className="font-medium text-gray-800 dark:text-white">
                  bKash
                </span>
                <img className="w-24 sm:w-52 h-12 sm:h-20" src="https://icon2.cleanpng.com/lnd/20241225/uw/77508cc5e260af30c8590c31cb25ef.webp" alt="" />
              </label>

              <label className="flex items-center justify-between text-xl gap-2 mb-5 border border-gray-300 dark:border-gray-600 rounded-lg p-3 flex-1">
                <input className="w-5 h-5 rounded-full" type="radio" name="payment" />
                <span className="font-medium text-gray-800 dark:text-white">
                  SSL
                </span>
                <img className="w-24 sm:w-52 h-12 sm:h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYoMBVy3USUj3YkfnmCqH91lH0_7H-J-vOg&s" alt="" />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full my-5 bg-red-800 text-white py-2 rounded-lg font-semibold hover:bg-red-900 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCheckoutPage;