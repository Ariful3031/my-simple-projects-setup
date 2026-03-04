
import { useState, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import { IoRemoveCircle } from "react-icons/io5";


const CreateCourse = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      learningPoints: [""],
      requirements: [],
      faqs: [{ question: "", answer: "" }],
      tags: [],
    },
  });

  const courseType = watch("type");
  const tags = watch("tags");
  const learningPoints = watch("learningPoints");
  const requirements = watch("requirements");

  const {
    fields: faqFields,
    append: addFaq,
    remove: removeFaq,
  } = useFieldArray({ control, name: "faqs" });

  // Tags




  // Requirements


  // Learning Points


  // Submit
  // const onSubmit = async (data) => {
  //   setIsSubmitted(true);
  //   try {
  //     const formData = new FormData();
  //     if (data.thumbnail?.[0]) formData.append("thumbnail", data.thumbnail[0]);
  //     if (data.cover_photo?.[0])
  //       formData.append("cover_photo", data.cover_photo[0]);
  //     if (data.demoImage?.[0]) formData.append("demoImage", data.demoImage[0]);

  //     formData.append(
  //       "data",
  //       JSON.stringify({
  //         title: data.title,
  //         type: data.type,
  //         instructor_id: data.instructor_id,
  //         category_id: parseInt(data.category_id),
  //         description: data.description,
  //         price: courseType !== "free" ? data.price : 0,
  //         starting_date: data.startingDate,
  //         duration: data.duration,
  //         lecture: data.sessions,
  //         mode: data.mode,
  //         status: data.status,
  //         course_learning_points: data.learningPoints,
  //         course_requirements: data.requirements,
  //         course_faqs: data.faqs,
  //         course_tags: data.tags,
  //       }),
  //     );

  //     const res = await createCourse(formData).unwrap();

  //     if (res?.status) {
  //       Swal.fire({
  //         title: "🎉 Success!",
  //         text: "Course created successfully",
  //         icon: "success",
  //       });
  //       reset();
  //     } else {
  //       toast.error("Failed to create course!");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     if (err?.data?.errors) {
  //       const errorMessages = Object.values(err.data.errors).flat().join("\n");

  //       toast.error(errorMessages);
  //     } else {
  //       toast.error(err?.data?.message || "Something went wrong!");
  //     }
  //   }
  // };


  return (
    <div className="bg-white m-6 dark:bg-gray-800 p-6 rounded shadow-md relative">
      <h1 className="text-2xl font-bold mb-6 text-primary-500">
        Create Course
      </h1>

      <form className="space-y-6">
        {/* File Uploads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <label
              htmlFor="thumbnail"
              className="block font-semibold mb-1 cursor-pointer"
            >
              Thumbnail <span className="text-red-500">*</span>
            </label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              {...register("thumbnail", {
                required: "Thumbnail is required",
                validate: {
                  fileSize: (files) => {
                    if (files[0]) {
                      const fileSize = files[0].size;
                      const maxSize = 5 * 1024 * 1024;
                      return (
                        fileSize <= maxSize ||
                        "File size should be less than 5MB"
                      );
                    }
                    return true;
                  },
                  fileType: (files) => {
                    if (files[0]) {
                      const acceptedTypes = [
                        "image/jpeg",
                        "image/png",
                        "image/jpg",
                        "image/webp",
                      ];
                      return (
                        acceptedTypes.includes(files[0].type) ||
                        "Only JPEG, PNG, JPG, and WebP images are allowed"
                      );
                    }
                    return true;
                  },
                },
              })}
              className={`w-full p-1 border rounded dark:bg-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100  ${(errors.image ? "border-red-500" : "",
                errors.thumbnail ? "border-red-500" : "")
                }`}
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.thumbnail.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="cover_photo"
              className="block font-semibold mb-1 cursor-pointer"
            >
              Cover Photo <span className="text-red-500">*</span>
            </label>
            <input
              id="cover_photo"
              type="file"
              accept="image/*"
              {...register("cover_photo", {
                required: "Cover Photo is required",
                validate: {
                  fileSize: (files) => {
                    if (files[0]) {
                      const fileSize = files[0].size;
                      const maxSize = 5 * 1024 * 1024;
                      return (
                        fileSize <= maxSize ||
                        "File size should be less than 5MB"
                      );
                    }
                    return true;
                  },
                  fileType: (files) => {
                    if (files[0]) {
                      const acceptedTypes = [
                        "image/jpeg",
                        "image/png",
                        "image/jpg",
                        "image/webp",
                      ];
                      return (
                        acceptedTypes.includes(files[0].type) ||
                        "Only JPEG, PNG, JPG, and WebP images are allowed"
                      );
                    }
                    return true;
                  },
                },
              })}
              className={`w-full p-1 border rounded dark:bg-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${(errors.image ? "border-red-500" : "",
                errors.cover_photo ? "border-red-500" : "")
                }`}
            />
            {errors.cover_photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cover_photo.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">
              Course Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter course title"
              {...register("title", { required: "Course title is required" })}
              className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.title ? "border-red-500" : ""}`}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          {/* category id */}
          <div>
            <label className="block font-semibold mb-1">
              Category <span className="text-red-500">*</span>
            </label>

            <select
              {...register("category_id", {
                required: "Category is required",
              })}
              className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.category_id ? "border-red-500" : ""}`}
            >
              <option value="">Select Category</option>
              {/* {categoryData?.data?.map((category) => (
                <option key={category?.id} value={category?.id}>
                  {category?.name}
                </option>
              ))} */}
            </select>

            {errors?.category_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Instructor */}
          <div>
            <label className="block font-semibold mb-1">
              Instructor <span className="text-red-500">*</span>
            </label>
            {/* <select
              {...register("instructor_id", {
                required: "Instructor is required",
              })}
              className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
            >
              <option value="">Select Instructor</option>
              {instructors.map((inst) => (
                <option key={inst.id} value={inst.id}>
                  {inst.name}
                </option>
              ))}
            </select> */}
            {/* {role === "admin" ? (
              <select
                {...register("instructor_id", {
                  required: "Instructor is required",
                })}
                className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
              >
                <option value="">Select Instructor</option>
                {instructors.map((inst) => (
                  <option key={inst.id} value={inst.id}>
                    {inst.name}
                  </option>
                ))}
              </select>
            ) : (
              <select
                {...register("instructor_id", {
                  required: "Instructor is required",
                })}
                className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
              >
                <option value={user?.id}>{user?.name}</option>
              </select>
            )}

            {errors?.instructor_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instructor_id.message}
              </p>
            )} */}
          </div>

          {/* Course Type */}
          <div>
            <label className="block font-semibold mb-1">
              Course Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("type", {
                required: "Course type is required",
              })}
              className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.type ? "border-red-500" : ""}`}
            >
              <option value="">Select Course Type</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
            {errors?.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Price (hide if free) */}
          {courseType !== "free" && (
            <div>
              <label className="block font-semibold mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter course price"
                {...register("price", { required: "Price required" })}
                className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.price ? "border-red-500" : ""}`}
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
          )}
          {courseType !== "free" && (
            <div>
              <label className="block font-semibold mb-1">Discount Price</label>
              <input
                type="number"
                placeholder="Enter discounted price"
                {...register("discount_price")}
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Requirements */}
          {/* <div>
            <label className="block font-semibold mb-1">
              Requirements <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-2 p-3 border rounded-lg dark:bg-gray-800">
              {requirements.map((req, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-primary-100 dark:bg-primary-900/40 px-3 py-1 rounded-full"
                >
                  {req}
                  <button
                    type="button"
                    // onClick={() => handleRemoveRequirement(index)}
                    className="ml-2 text-red-600"
                  >
                    <IoRemoveCircle size={18} />
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Press Enter to add requirement"
                onKeyDown={handleAddRequirement}
                className="flex-grow min-w-[150px] bg-transparent border-none dark:text-white"
              />
            </div>
            {isSubmitted && requirements.length === 0 && (
              <p className="text-red-500 text-sm mt-1">
                At least one requirement is required
              </p>
            )}
          </div> */}

          {/* Tags */}
          <div>
            <label className="block font-semibold mb-1">
              Tags <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 p-3 border rounded-lg dark:bg-gray-800">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-primary-100 dark:bg-primary-900/40 px-3 py-1 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    // onClick={() => handleRemoveTag(index)}
                    className="ml-2 text-red-600"
                  >
                    <IoRemoveCircle size={18} />
                  </button>
                </span>
              ))}
              <input
                type="text"
                // ref={tagInput}
                // onKeyDown={handleAddTag}
                placeholder="Press Enter to add tag"
                className="flex-grow min-w-[150px] bg-transparent border-none dark:text-white"
              />
            </div>
            {isSubmitted && tags.length === 0 && (
              <p className="text-red-500 text-sm mt-1">
                At least one tag is required
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Dates & Sessions */}
          <div>
            <label className="block font-semibold mb-1 dark:text-white">
              Starting Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("startingDate", {
                required: "Starting date is required",
              })}
              className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.startingDate ? "border-red-500" : ""}`}
            />
            {errors?.startingDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.startingDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Duration (hours)</label>
            <input
              type="number"
              placeholder="Enter duration in hours"
              {...register("duration")}
              className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {/* Number of Lectures */}
          <div>
            <label className="block font-semibold mb-1">
              Number of Lectures
            </label>
            <input
              type="number"
              placeholder="Enter number of lectures"
              {...register("sessions")}
              className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            />
            {errors?.sessions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.sessions.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block font-semibold mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              {...register("status", {
                required: "Status is required",
              })}
              className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.status ? "border-red-500" : ""}`}
            >
              <option value="">Select Status</option>
              <option value="published">Published</option>
              <option value="unpublished">Draft</option>
            </select>
            {errors?.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>
        </div>
        {/* Course mode */}
        <div>
          <label className="block font-semibold mb-1">
            Course Mode <span className="text-red-500">*</span>
          </label>
          <select
            {...register("mode", {
              required: "Course mode is required",
            })}
            className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.type ? "border-red-500" : ""}`}
          >
            <option value="">Select Course Mode</option>
            <option value="live">Live</option>
            <option value="recorded">Recorded</option>
          </select>
          {errors?.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>
        {/* Learning Points */}
        {/* <div>
          <label className="block font-semibold mb-1">
            Learning Points <span className="text-red-500">*</span>
          </label>

          {learningPoints.map((lp, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={lp}
                placeholder="Enter learning point"
                // onChange={(e) =>  handleChangeLearningPoint(index, e.target.value)}
                className="flex-1 p-2 border rounded dark:bg-gray-800 dark:text-white"
              />
              {learningPoints.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveLearningPoint(index)}
                >
                  <IoRemoveCircle size={22} className="text-red-600" />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddLearningPoint}
            className="text-primary-600"
          >
            + Add Learning Point
          </button>

          {isSubmitted && learningPoints.length === 0 && (
            <p className="text-red-500 text-sm mt-1">
              At least one learning point is required
            </p>
          )}
        </div> */}

        {/*  FAQ  */}
        {/* <div>
          <label className="block font-semibold mb-2">
            FAQ <span className="text-red-500">*</span>
          </label>
          {faqFields.map((field, index) => (
            <div key={field.id} className="border rounded-lg p-3 mb-3">
              <input
                {...register(`faqs.${index}.question`, {
                  required: "Question is required",
                })}
                placeholder="Question"
                className={`w-full p-2 border dark:bg-gray-800 dark:text-white rounded mb-2 ${errors.faqs?.[index]?.question ? "border-red-500" : ""}`}
              />
              {errors?.faqs?.[index]?.question && (
                <p className="text-red-500 text-sm">
                  {errors.faqs[index].question.message}
                </p>
              )}

              <textarea
                {...register(`faqs.${index}.answer`, {
                  required: "Answer is required",
                })}
                placeholder="Answer"
                rows={3}
                className={`w-full p-2 border dark:bg-gray-800 dark:text-white rounded ${errors.faqs?.[index]?.answer ? "border-red-500" : ""}`}
              />
              {errors?.faqs?.[index]?.answer && (
                <p className="text-red-500 text-sm">
                  {errors.faqs[index].answer.message}
                </p>
              )}
              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addFaq({ question: "", answer: "" })}
            className="text-primary-600 text-sm"
          >
            + Add FAQ
          </button>
        </div> */}

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Enter course description"
            {...register("description", { required: "Description required" })}
            rows={4}
            className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          // disabled={isLoading}
          className=" bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;