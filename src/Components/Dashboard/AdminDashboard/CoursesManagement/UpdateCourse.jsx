

// const UpdateCourse = () => {
// const id = useParams()
// console.log(id?.id)


import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useCreateCourseMutation, useGetCourseListQuery } from "../../../../redux/api/couresApi";
import { useGetAllUsersAdminQuery } from "../../../../redux/api/authApi";

const UpdateCourse  = () => {

  // const [createCourse, { isLoading, error }] = useCreateCourseMutation();
  const { data: teacherData, isLoading: teacherLoading } = useGetAllUsersAdminQuery({ role: 'teacher' });
  const { data: categoryData, isLoading: categoryLoading } = useGetCourseListQuery();


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
            average: 0,
            totalReviews: 0,
          },

          createdAt: new Date().toISOString(),
          enrolled: "0",
        })
      );

      // const res = await createCourse(formData).unwrap();


      Swal.fire({
        icon: "success",
        title: "Course Created",
        text: res?.message || "Success",
      });

      // if (res.message === "success") {
      //   Swal.fire({
      //     icon: "success",
      //     title: "Course Created",
      //     text: res?.message || "Success",
      //   });
      // }

    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Update Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="font-semibold dark:text-white">Course Title</label>
            <input
              type="text"
              {...register("title", { required: "Title required" })}
              className="w-full mt-2 p-3 rounded-lg border"
            />
          </div>

          {/* THUMBNAIL */}
          <div>
            <label className="font-semibold dark:text-white">Course Thumbnail</label>

            <input
              type="file"
              accept="image/*"
              {...register("thumbnail", { required: "Thumbnail required" })}
              onChange={handleImagePreview}
              className="w-full mt-2 p-2 border rounded-lg"
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 w-40 h-24 object-cover rounded-lg"
              />
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
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Discount Price
              </label>
              <input
                type="number"
                {...register("discountedPrice")}
                className="w-full mt-2 p-3 border rounded-lg"
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
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Total Lecture
              </label>
              <input
                type="number"
                {...register("totalLecture")}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

          </div>

          {/* LANGUAGE */}
          <div>
            <label className="font-semibold dark:text-white">Language</label>
            <select
              {...register("language")}
              className="w-full mt-2 p-3 border rounded-lg"
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
              <div key={item.id} className="flex gap-2 mt-2">

                <input
                  {...register(`includes.${index}`)}
                  className="flex-1 p-3 border rounded-lg"
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-3 rounded"
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
              className="w-full mt-2 p-3 border rounded-lg"
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
                  className="p-3 border rounded-lg"
                />

                <input
                  placeholder="Topic"
                  {...register(`routine.${index}.topic`)}
                  className="p-3 border rounded-lg"
                />

                <input
                  placeholder="Time"
                  {...register(`routine.${index}.time`)}
                  className="p-3 border rounded-lg"
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
                  className="p-3 border rounded-lg"
                />

                <input
                  type="number"
                  placeholder="Rating"
                  {...register(`reviews.${index}.rating`)}
                  className="p-3 border rounded-lg"
                />

                <input
                  placeholder="Comment"
                  {...register(`reviews.${index}.comment`)}
                  className="p-3 border rounded-lg"
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
              className="w-full mt-2 p-3 border rounded-lg"
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
              className="w-full mt-2 p-3 border rounded-lg"
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
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">Status</label>
              <select
                {...register("status")}
                className="w-full mt-2 p-3 border rounded-lg"
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
            Create Course
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;



















