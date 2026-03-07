import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useCreateCourseMutation } from "../../../../redux/api/couresApi";

const CreateCourse = () => {

  const [createCourse, { isLoading, error }] = useCreateCourseMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      includes: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "includes",
  });

  const [preview, setPreview] = useState(null);

  // Image Preview Handler
  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit Handler
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Image file
      if (data.thumbnail?.[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      // Other data
      formData.append(
        "data",
        JSON.stringify({
          title: data.title,
          duration: data.duration,
          totalLecture: data.totalLecture,
          language: data.language,
          overview: data.overview,
          contact: data.contact,
          admissionStatus: data.admissionStatus,
          status: data.status,
          regularPrice: data.regularPrice,
          discountedPrice: data.discountedPrice,
          includes: data.includes,
          createdAt: new Date().toISOString(),
          enrolled: "0",
        })
      );

      console.log([...formData.entries()]);

      const res = await createCourse(formData).unwrap();
      if (res.message === "success") {
        Swal.fire({
          icon: "success",
          title: "Course Created",
          text: res?.message || "Success",
        });
      }



      // reset();
      // setPreview(null);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Create New Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="font-semibold dark:text-white">Course Title</label>
            <input
              type="text"
              {...register("title", { required: "Title required" })}
              className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Thumbnail */}
          <div>
            <label className="font-semibold dark:text-white">
              Course Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              {...register("thumbnail", { required: "Thumbnail required" })}
              onChange={handleImagePreview}
              className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            />

            {errors.thumbnail && (
              <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>
            )}

            {/* Preview */}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 w-40 h-24 object-cover rounded-lg"
              />
            )}
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold dark:text-white">
                Regular Price
              </label>
              <input
                type="number"
                {...register("regularPrice", { required: true })}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Discount Price
              </label>
              <input
                type="number"
                {...register("discountedPrice")}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold dark:text-white">Duration</label>
              <input
                type="text"
                placeholder="3 Month"
                {...register("duration")}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">
                Total Lecture
              </label>
              <input
                type="number"
                {...register("totalLecture")}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="font-semibold dark:text-white">Language</label>
            <select
              {...register("language")}
              className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
            >
              <option value="বাংলা">বাংলা</option>
              <option value="English">English</option>
            </select>
          </div>

          {/* Includes Dynamic */}
          <div>
            <label className="font-semibold dark:text-white">
              Course Includes
            </label>

            {fields.map((item, index) => (
              <div key={item.id} className="flex gap-2 mt-2">
                <input
                  {...register(`includes.${index}`)}
                  className="flex-1 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
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

          {/* Admission */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold dark:text-white">
                Admission Status
              </label>
              <input
                type="text"
                {...register("admissionStatus")}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-semibold dark:text-white">Status</label>
              <select
                {...register("status")}
                className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
              >
                <option value="publish">Publish</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="font-semibold dark:text-white">Contact</label>
            <input
              type="text"
              {...register("contact")}
              className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Overview */}
          <div>
            <label className="font-semibold dark:text-white">
              Course Overview
            </label>
            <textarea
              rows="4"
              {...register("overview")}
              className="w-full mt-2 p-3 rounded-lg border dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Submit */}
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

export default CreateCourse;



// import { useState, useRef } from "react";
// import { useFieldArray, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";

// import { IoRemoveCircle } from "react-icons/io5";


// const CreateCourse = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);


//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       learningPoints: [""],
//       requirements: [],
//       faqs: [{ question: "", answer: "" }],
//       tags: [],
//     },
//   });

//   const courseType = watch("type");
//   const tags = watch("tags");
//   const learningPoints = watch("learningPoints");
//   const requirements = watch("requirements");

//   const {
//     fields: faqFields,
//     append: addFaq,
//     remove: removeFaq,
//   } = useFieldArray({ control, name: "faqs" });

//   // Tags




//   // Requirements


//   // Learning Points


//   // Submit
//   const onSubmit = async (data) => {
//     // setIsSubmitted(true);
//     try {

//       // FormData দেখার সঠিক উপায়
//       // for (let pair of formData.entries()) {
//       //   console.log(pair[0], pair[1]);
//       // }
//       const formData = new FormData();
//       // if (data.thumbnail?.[0]) formData.append("thumbnail", data.thumbnail[0]);
//       // if (data.cover_photo?.[0])
//       //   formData.append("cover_photo", data.cover_photo[0]);
//       // if (data.demoImage?.[0]) formData.append("demoImage", data.demoImage[0]);

//       formData.append(
//         "data",
//         JSON.stringify({
//           title: data.title,
//           type: data.type,
//           instructor_id: data.instructor_id,
//           category_id: parseInt(data.category_id),
//           description: data.description,
//           price: courseType !== "free" ? data.price : 0,
//           starting_date: data.startingDate,
//           duration: data.duration,
//           lecture: data.sessions,
//           mode: data.mode,
//           status: data.status,
//           // course_learning_points: data.learningPoints,
//           // course_requirements: data.requirements,
//           // course_faqs: data.faqs,
//           // course_tags: data.tags,
//         }),
//       );

//       // const res = await createCourse(formData).unwrap();
//       console.log([...formData.entries()]);

//       // if (res?.status) {
//       //   Swal.fire({
//       //     title: "🎉 Success!",
//       //     text: "Course created successfully",
//       //     icon: "success",
//       //   });
//       //   reset();
//       // } else {
//       //   toast.error("Failed to create course!");
//       // }
//     } catch (err) {
//       console.error(err);
//       if (err?.data?.errors) {
//         const errorMessages = Object.values(err.data.errors).flat().join("\n");

//         toast.error(errorMessages);
//       } else {
//         toast.error(err?.data?.message || "Something went wrong!");
//       }
//     }
//   };


//   return (
//     <div className="bg-white m-6 dark:bg-gray-800 p-6 rounded shadow-md relative">
//       <h1 className="text-2xl font-bold mb-6 text-primary-500">
//         Create Course
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* File Uploads */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           <div>
//             <label
//               htmlFor="thumbnail"
//               className="block font-semibold mb-1 cursor-pointer"
//             >
//               Thumbnail <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="thumbnail"
//               type="file"
//               accept="image/*"
//               {...register("thumbnail", {
//                 required: "Thumbnail is required",
//                 validate: {
//                   fileSize: (files) => {
//                     if (files[0]) {
//                       const fileSize = files[0].size;
//                       const maxSize = 5 * 1024 * 1024;
//                       return (
//                         fileSize <= maxSize ||
//                         "File size should be less than 5MB"
//                       );
//                     }
//                     return true;
//                   },
//                   fileType: (files) => {
//                     if (files[0]) {
//                       const acceptedTypes = [
//                         "image/jpeg",
//                         "image/png",
//                         "image/jpg",
//                         "image/webp",
//                       ];
//                       return (
//                         acceptedTypes.includes(files[0].type) ||
//                         "Only JPEG, PNG, JPG, and WebP images are allowed"
//                       );
//                     }
//                     return true;
//                   },
//                 },
//               })}
//               className={`w-full p-1 border rounded dark:bg-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100  ${(errors.image ? "border-red-500" : "",
//                 errors.thumbnail ? "border-red-500" : "")
//                 }`}
//             />
//             {errors.thumbnail && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.thumbnail.message}
//               </p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="cover_photo"
//               className="block font-semibold mb-1 cursor-pointer"
//             >
//               Cover Photo <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="cover_photo"
//               type="file"
//               accept="image/*"
//               {...register("cover_photo", {
//                 required: "Cover Photo is required",
//                 validate: {
//                   fileSize: (files) => {
//                     if (files[0]) {
//                       const fileSize = files[0].size;
//                       const maxSize = 5 * 1024 * 1024;
//                       return (
//                         fileSize <= maxSize ||
//                         "File size should be less than 5MB"
//                       );
//                     }
//                     return true;
//                   },
//                   fileType: (files) => {
//                     if (files[0]) {
//                       const acceptedTypes = [
//                         "image/jpeg",
//                         "image/png",
//                         "image/jpg",
//                         "image/webp",
//                       ];
//                       return (
//                         acceptedTypes.includes(files[0].type) ||
//                         "Only JPEG, PNG, JPG, and WebP images are allowed"
//                       );
//                     }
//                     return true;
//                   },
//                 },
//               })}
//               className={`w-full p-1 border rounded dark:bg-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${(errors.image ? "border-red-500" : "",
//                 errors.cover_photo ? "border-red-500" : "")
//                 }`}
//             />
//             {errors.cover_photo && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.cover_photo.message}
//               </p>
//             )}
//           </div>
//         </div> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           {/* Title */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Course Title <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter course title"
//               {...register("title", { required: "Course title is required" })}
//               className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.title ? "border-red-500" : ""}`}
//             />
//             {errors.title && (
//               <p className="text-red-500">{errors.title.message}</p>
//             )}
//           </div>
//           {/* category id */}
//           {/* <div>
//             <label className="block font-semibold mb-1">
//               Category <span className="text-red-500">*</span>
//             </label>

//             <select
//               {...register("category_id", {
//                 required: "Category is required",
//               })}
//               className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.category_id ? "border-red-500" : ""}`}
//             >
//               <option value="">Select Category</option>
//               {categoryData?.data?.map((category) => (
//                 <option key={category?.id} value={category?.id}>
//                   {category?.name}
//                 </option>
//               ))}
//             </select>

//             {errors?.category_id && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.category_id.message}
//               </p>
//             )}
//           </div> */}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           {/* Instructor */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Instructor <span className="text-red-500">*</span>
//             </label>
//             {/* <select
//               {...register("instructor_id", {
//                 required: "Instructor is required",
//               })}
//               className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
//             >
//               <option value="">Select Instructor</option>
//               {instructors.map((inst) => (
//                 <option key={inst.id} value={inst.id}>
//                   {inst.name}
//                 </option>
//               ))}
//             </select> */}
//             {/* {role === "admin" ? (
//               <select
//                 {...register("instructor_id", {
//                   required: "Instructor is required",
//                 })}
//                 className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
//               >
//                 <option value="">Select Instructor</option>
//                 {instructors.map((inst) => (
//                   <option key={inst.id} value={inst.id}>
//                     {inst.name}
//                   </option>
//                 ))}
//               </select>
//             ) : (
//               <select
//                 {...register("instructor_id", {
//                   required: "Instructor is required",
//                 })}
//                 className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.instructor_id ? "border-red-500" : ""}`}
//               >
//                 <option value={user?.id}>{user?.name}</option>
//               </select>
//             )}

//             {errors?.instructor_id && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.instructor_id.message}
//               </p>
//             )} */}
//           </div>

//           {/* Course Type */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Course Type <span className="text-red-500">*</span>
//             </label>
//             <select
//               {...register("type", {
//                 required: "Course type is required",
//               })}
//               className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.type ? "border-red-500" : ""}`}
//             >
//               <option value="">Select Course Type</option>
//               <option value="paid">Paid</option>
//               <option value="free">Free</option>
//             </select>
//             {errors?.type && (
//               <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           {/* Price (hide if free) */}
//           {courseType !== "free" && (
//             <div>
//               <label className="block font-semibold mb-1">
//                 Price <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="Enter course price"
//                 {...register("price", { required: "Price required" })}
//                 className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.price ? "border-red-500" : ""}`}
//               />
//               {errors.price && (
//                 <p className="text-red-500">{errors.price.message}</p>
//               )}
//             </div>
//           )}
//           {courseType !== "free" && (
//             <div>
//               <label className="block font-semibold mb-1">Discount Price</label>
//               <input
//                 type="number"
//                 placeholder="Enter discounted price"
//                 {...register("discount_price")}
//                 className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
//               />
//             </div>
//           )}
//         </div>

//         <div className="">
//           {/* Requirements */}

//           {/* Tags */}

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           {/* Dates & Sessions */}
//           <div>
//             <label className="block font-semibold mb-1 dark:text-white">
//               Starting Date <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               {...register("startingDate", {
//                 required: "Starting date is required",
//               })}
//               className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.startingDate ? "border-red-500" : ""}`}
//             />
//             {errors?.startingDate && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.startingDate.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block font-semibold mb-1">Duration (hours)</label>
//             <input
//               type="number"
//               placeholder="Enter duration in hours"
//               {...register("duration")}
//               className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
//           {/* Number of Lectures */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Number of Lectures
//             </label>
//             <input
//               type="number"
//               placeholder="Enter number of lectures"
//               {...register("sessions")}
//               className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
//             />
//             {errors?.sessions && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.sessions.message}
//               </p>
//             )}
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Status <span className="text-red-500">*</span>
//             </label>
//             <select
//               {...register("status", {
//                 required: "Status is required",
//               })}
//               className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.status ? "border-red-500" : ""}`}
//             >
//               <option value="">Select Status</option>
//               <option value="published">Published</option>
//               <option value="unpublished">Draft</option>
//             </select>
//             {errors?.status && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.status.message}
//               </p>
//             )}
//           </div>
//         </div>
//         {/* Course mode */}
//         <div>
//           <label className="block font-semibold mb-1">
//             Course Mode <span className="text-red-500">*</span>
//           </label>
//           <select
//             {...register("mode", {
//               required: "Course mode is required",
//             })}
//             className={`w-full p-3 bg-transparent border rounded-lg dark:bg-gray-800 dark:text-white ${errors.type ? "border-red-500" : ""}`}
//           >
//             <option value="">Select Course Mode</option>
//             <option value="live">Live</option>
//             <option value="recorded">Recorded</option>
//           </select>
//           {errors?.type && (
//             <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
//           )}
//         </div>

//         {/* Learning Points */}


//         {/*  FAQ  */}


//         {/* Description */}
//         <div>
//           <label className="block font-semibold mb-1">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             placeholder="Enter course description"
//             {...register("description", { required: "Description required" })}
//             rows={4}
//             className={`w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white ${errors.description ? "border-red-500" : ""}`}
//           />
//           {errors.description && (
//             <p className="text-red-500">{errors.description.message}</p>
//           )}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           // disabled={isLoading}
//           className=" bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg"
//         >
//           Create Course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateCourse;