




import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useGetCourseListQuery, useUpdateSingleCourseMutation } from "../../../../redux/api/couresApi";
import { useGetAllUsersAdminQuery } from "../../../../redux/api/authApi";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { useGetAllCategoriesListQuery } from "../../../../redux/api/categoriesApi";

const UpdateCourse = () => {
  const id = useParams()
  const courseId = id?.id;
  const navigate = useNavigate()


  const [updateSingleCourse, { isLoading: updateLoading }] = useUpdateSingleCourseMutation()
  const { data: teacherData, isLoading: teacherLoading } = useGetAllUsersAdminQuery({ role: 'teacher' });
  const { data: categoryData, isLoading: categoryLoading } = useGetAllCategoriesListQuery();
  const { data, isLoading } = useGetCourseListQuery({ id: courseId });
  const singleCourse = data?.[0];

  console.log(data)
  console.log(singleCourse)

  const uniqueCategoriesMap = new Map();

  categoryData?.forEach((item) => {
    const title = item?.category?.category_title;
    if (title && !uniqueCategoriesMap.has(title)) {
      uniqueCategoriesMap.set(title, item);
    }
  });

  const matchedCategories = Array.from(uniqueCategoriesMap.values());



  const { register, handleSubmit, control, reset, setValue, formState: { errors },
  } = useForm({
    defaultValues: {
      includes: [],
      routine: [],
      reviews: [],
    },
  });

  // ⭐ ADD (API data আসলে form fill করার জন্য)
  useEffect(() => {
    if (data && data.length > 0) {
      const course = data[0];

      reset({
        title: course?.title,
        duration: course?.duration,
        totalLecture: course?.totalLecture,
        language: course?.language,
        overview: course?.overview,
        contact: course?.contact,
        admissionStatus: course?.admissionStatus,
        status: course?.status,
        regularPrice: course?.regularPrice,
        discountedPrice: course?.discountedPrice,
        includes: course?.includes || [],
        category: course?.category || {},
        routine: course?.routine || [],
        reviews: course?.reviews || [],
      });

      // Explicitly set multiple select value
      setValue(
        "instructorIds",
        course?.instructors?.map((i) => i?._id) || []
      );

      setPreview(course?.thumbnail);
    }
  }, [data, reset, setValue]);

  const { fields, append, remove } = useFieldArray({ control, name: "includes", });

  // ➕ NEW Routine
  const {
    fields: routineFields,
    append: addRoutine,
    remove: removeRoutine,
  } = useFieldArray({
    control,
    name: "routine",
  });

  // ➕ NEW Reviews
  const {
    fields: reviewFields,
    append: addReview,
    remove: removeReview,
  } = useFieldArray({
    control,
    name: "reviews",
  });

  const [preview, setPreview] = useState(null);
  const inputStyle =
    "w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition";

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      if (data.thumbnail?.[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      formData.append(
        "data",
        JSON.stringify({
          title: data?.title,
          duration: data?.duration,
          totalLecture: data?.totalLecture,
          language: data?.language,
          overview: data?.overview,
          contact: data?.contact,
          admissionStatus: data?.admissionStatus,
          status: data?.status,
          regularPrice: data?.regularPrice,
          discountedPrice: data?.discountedPrice,
          includes: data?.includes,
          instructorIds: data?.instructorIds,
          category: data?.category,
          routine: data?.routine,
          reviews: data?.reviews,

          rating: {
            average: singleCourse?.rating?.average || 0,
            totalReviews: singleCourse?.rating?.totalReviews || 0,
          },

          updateAt: new Date().toISOString(),
          enrolled: singleCourse?.enrolled || "0",
        })
      );

      const res = await updateSingleCourse({ id: courseId, formData }).unwrap();


      // Swal.fire({
      //   icon: "success",
      //   title: "Course Created",
      //   text: res?.message || "Success",
      // });

      if (res.message === "success") {
        Swal.fire({
          icon: "success",
          title: "Course Update",
          text: res?.message || "Success",
        });

      }
      navigate("/dashboard/course-list")

    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Header */}

        {/* <div className="shadow p-4 rounded-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h2 className="text-xl font-semibold text-primary-500">
            Update Course
          </h2>
          <Link
            to={"/dashboard/course-list"}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="font-bold">Dashboard</span> / Course List
          </Link>
        </div> */}


        <div className="mb-6 flex flex-col md:flex-row justify-between gap-3 bg-gray-50 dark:bg-gray-700/40 p-4 rounded-xl">
          <h2 className="text-xl font-semibold text-green-500">
            Update Course
          </h2>
          <Link to="/dashboard/course-list" className="text-sm text-gray-500 dark:text-gray-300">
            Dashboard / Course List
          </Link>
        </div>

        {/* update form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="font-semibold dark:text-white">Course Title</label>
            <input
              type="text"
              {...register("title", { required: "Title required" })}
              className={inputStyle}
            />
          </div>

          {/* THUMBNAIL */}
          <div>
            <label className="font-semibold dark:text-white">Course Thumbnail</label>

            <input
              type="file"
              accept="image/*"
              {...register("thumbnail")}
              onChange={handleImagePreview}
              className={inputStyle}
            />

            {preview && (

              <img
                src={preview}
                alt="preview"
                className="mt-3 w-40 rounded-lg border dark:border-gray-600"
              />
              // <img
              //   src={preview}
              //   alt="preview"
              //   className="mt-3 w-40 h-24 object-cover rounded-lg"
              // />
            )}
          </div>

          {/* PRICING */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold dark:text-white">
                Regular Price
              </label>
              <input
                type="number"
                {...register("regularPrice")}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Discount Price
              </label>
              <input
                type="number"
                {...register("discountedPrice")}
                className={inputStyle}
              />
            </div>

          </div>

          {/* DURATION */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold dark:text-white">Duration</label>
              <input
                type="text"
                {...register("duration")}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Total Lecture
              </label>
              <input
                type="number"
                {...register("totalLecture")}
                className={inputStyle}
              />
            </div>

          </div>

          {/* LANGUAGE */}
          <div>
            <label className="font-semibold dark:text-white">Language</label>
            <select
              {...register("language")}
              className={inputStyle}
            >
              <option value="বাংলা">বাংলা</option>
              <option value="English">English</option>
            </select>
          </div>

          {/* INCLUDES */}
          <div>
            <label className="font-semibold dark:text-white">
              Course Includes
            </label>

            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 mt-2">

                <input
                  {...register(`includes.${index}`)}
                  className={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-3 rounded py-2"
                >
                  Remove
                </button>

              </div>
            ))}

            <button
              type="button"
              onClick={() => append("")}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Include
            </button>
          </div>

          {/* ➕ INSTRUCTOR */}

          <div>
            <label className="font-semibold dark:text-white">
              Select Instructor
            </label>

            <select
              multiple
              {...register("instructorIds")}
              className="w-full mt-2 p-3 border text-black rounded-lg"
            >
              {teacherData?.map((teacher, index) => (
                <option key={index} value={teacher?._id}>
                  {teacher?.displayName}
                </option>
              ))}
            </select>

            <p className="text-sm text-gray-500 mt-1">
              Ctrl press করে multiple instructor select করা যাবে
            </p>
          </div>

          {/* ➕ CATEGORY */}
          <div>
            <label className="font-semibold dark:text-white">
              Select Category Title
            </label>

            <select
              {...register("category.category_title")}
              className="w-full mt-2 p-3 border rounded-lg"

              onChange={(e) => {
                const selectedTitle = e.target.value;

                const found = matchedCategories?.find(
                  (cat) => cat?.category?.category_title === selectedTitle
                );

                if (found) {
                  setValue(
                    "category.category_description",
                    found?.category?.category_description
                  );
                }
              }}
            >
              {matchedCategories?.map((category, index) => (
                <option
                  key={index}
                  value={category?.category?.category_title}
                >
                  {category?.category?.category_title}
                </option>
              ))}
            </select>
          </div>

          {/* ➕ ROUTINE */}
          <div>

            <label className="font-semibold dark:text-white">
              Course Routine
            </label>

            {routineFields.map((item, index) => (
              <div key={item.id} className="grid grid-cols-3 gap-2 mt-2">

                <input
                  placeholder="Day"
                  {...register(`routine.${index}.day`)}
                  className={inputStyle}
                />

                <input
                  placeholder="Topic"
                  {...register(`routine.${index}.topic`)}
                  className={inputStyle}
                />

                <input
                  placeholder="Time"
                  {...register(`routine.${index}.time`)}
                  className={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => removeRoutine(index)}
                  className="bg-red-500 text-white px-3 rounded"
                >
                  Remove
                </button>

              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                addRoutine({ day: "", topic: "", time: "" })
              }
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Routine
            </button>

          </div>

          {/* ➕ REVIEWS */}
          <div>

            <label className="font-semibold dark:text-white">
              Course Reviews
            </label>

            {reviewFields.map((item, index) => (
              <div key={item.id} className="grid grid-cols-3 gap-2 mt-2">

                <input
                  placeholder="Student Name"
                  {...register(`reviews.${index}.name`)}
                  className={inputStyle}
                />

                <input
                  type="number"
                  placeholder="Rating"
                  {...register(`reviews.${index}.rating`)}
                  className={inputStyle}
                />

                <input
                  placeholder="Comment"
                  {...register(`reviews.${index}.comment`)}
                  className={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => removeReview(index)}
                  className="bg-red-500 text-white px-3 rounded"
                >
                  Remove
                </button>

              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                addReview({ name: "", rating: "", comment: "" })
              }
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Review
            </button>

          </div>

          {/* CONTACT */}
          <div>
            <label className="font-semibold dark:text-white">Contact</label>
            <input
              type="text"
              {...register("contact")}
              className={inputStyle}
            />
          </div>

          {/* OVERVIEW */}
          <div>
            <label className="font-semibold dark:text-white">
              Course Overview
            </label>
            <textarea
              rows="4"
              {...register("overview")}
              className={inputStyle}
            />
          </div>

          {/* ADMISSION */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold dark:text-white">
                Admission Status
              </label>
              <input
                type="text"
                {...register("admissionStatus")}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">Status</label>
              <select
                {...register("status")}
                className={inputStyle}
              >
                <option value="publish">Publish</option>
                <option value="draft">Draft</option>
              </select>
            </div>

          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
          >
            {
              updateLoading ? "Updating Course" : "Update Course"
            }
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;



















