
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  useGetCourseListQuery,
  useUpdateContentMutation,
} from "../../../../redux/api/couresApi";
import Loading from "../../../pages/Loading/Loading";

export default function UpdateModuleContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(null);
  const [selectedContentIndex, setSelectedContentIndex] = useState(null);

  const { data: courses = [], isLoading } = useGetCourseListQuery();
  const [updateContent, { isLoading: updateLoading }] =
    useUpdateContentMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const contentType = watch("contentType");

  // ------------------ DERIVED DATA ------------------
  const modules = selectedCourse?.topics || [];

  const contents =
    modules?.[selectedModuleIndex]?.sub_topics || [];

  const selectedContent =
    modules?.[selectedModuleIndex]?.sub_topics?.[
    selectedContentIndex
    ];

  // ------------------ PREFILL ------------------
  useEffect(() => {
    if (selectedContent) {
      reset({
        title: selectedContent?.title || "",
        contentType: selectedContent?.type || "link",
        content: selectedContent?.link || "",
      });
    }
  }, [selectedContent, reset]);
  // ------------------ HANDLERS ------------------

  const handleCourseSelect = (id) => {
    const course = courses.find((c) => c._id === id);
    setSelectedCourse(course);
    setSelectedModuleIndex(null);
    setSelectedContentIndex(null);
  };

  const handleModuleSelect = (index) => {
    setSelectedModuleIndex(Number(index));
    setSelectedContentIndex(null);
  };

  const handleContentSelect = (index) => {
    setSelectedContentIndex(Number(index));
  };

  // ------------------ UPDATE ------------------
  const onSubmit = async (data) => {
    if (
      selectedCourse === null ||
      selectedModuleIndex === null ||
      selectedContentIndex === null
    ) {
      return toast.error("সব select করুন");
    }

    try {
      await updateContent({
        courseId: selectedCourse._id,
        moduleIndex: selectedModuleIndex,
        subIndex: selectedContentIndex,
        data: {
          title: data?.title,
          type: data?.contentType,
          link: data?.content,
        },
      }).unwrap();

      Swal.fire("Success!", "Content updated successfully", "success");
    } catch (err) {
      toast.error(err?.data?.message || "Update failed");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex justify-center m-6">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl space-y-6">

        <h2 className="text-3xl font-bold text-center">
          Update Module & Content
        </h2>

        {/* COURSE */}
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            1. Select Course <span className="text-red-500">*</span>
          </label>
          <select
            onChange={(e) => handleCourseSelect(e.target.value)}
            className="w-full p-3 border rounded-xl"
          >
            <option value="">Select Course</option>
            {courses?.map((c) => (
              <option key={c._id} value={c._id}>
                {c?.title}
              </option>
            ))}
          </select>
        </div>

        {/* MODULE */}
        {selectedCourse && (
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              2. Select Module <span className="text-red-500">*</span>
            </label>
            <select
              onChange={(e) => handleModuleSelect(e.target.value)}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Select Module</option>
              {modules.map((m, i) => (
                <option key={i} value={i}>
                  {m.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* CONTENT */}
        {selectedModuleIndex !== null && (

          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              3. Select Content <span className="text-red-500">*</span>
            </label>
            <select
              onChange={(e) => handleContentSelect(e.target.value)}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Select Content</option>
              {contents.map((c, i) => (
                <option key={i} value={i}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* FORM */}
        {selectedContent && (

          <div className=" border border-gray-300 shadow-xl shadow-gray-200 dark:border-gray-600 p-5 rounded-xl">
            <label className="block mt-1 mb-5 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Content Details
            </label>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content Title <span className="text-red-500">*</span>
                </label>

              </div>
              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
                className="w-full p-3 border rounded-xl"
              />

              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content Type <span className="text-red-500">*</span>
                </label>

              </div>

              <select
                {...register("contentType", { required: true })}
                className="w-full p-3 border rounded-xl"
              >
                <option value="">Select Type</option>
                <option value="live-link">Live Link</option>
                <option value="vedio">Record vedio Link</option>
                <option value="pdf">PDF Link</option>
              </select>

              {/* {contentType && ( */}

              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Content URL"
                  {...register("content", { required: true })}
                  className="w-full p-3 border rounded-xl"
                />
              </div>

              {/* )} */}

              <button
                type="submit"
                disabled={updateLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                {updateLoading ? "Updating..." : "Update"}
              </button>
            </form>
          </div>

        )}
      </div>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// // import LoadingSpinner from "../../../../shared/LoadingSpinner";
// import {
//   useGetCourseListQuery,
//   useGetSingleCourseTopicQuery,
//   useGetModuleContentsQuery,
//   useUpdateModuleMutation,
//   useDeleteModuleMutation,
//   useUpdateContentMutation,
//   useDeleteContentMutation,
//   useGetSingleModuleContentsQuery,
// } from "../../../../redux/api/couresApi";
// // ../../../../../redux/api/courseApi";
// import Loading from "../../../pages/Loading/Loading";

// export default function UpdateModuleContent() {
//   // ------------------ STATE ------------------
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [selectedModuleId, setSelectedModuleId] = useState(null);
//   const [selectedContentId, setSelectedContentId] = useState(null);
//   const [moduleType, setModuleType] = useState("live");

//   // ------------------ API QUERIES ------------------
//   const { data: coursesData = [], isLoading: coursesLoading } =
//     useGetCourseListQuery();

//   const { data: modulesRes, isLoading: modulesLoading } =
//     useGetSingleCourseTopicQuery(
//       { courseId: selectedCourseId, mode: moduleType },
//       { skip: !selectedCourseId }
//     );

//   const { data: contentsRes, isLoading: contentsLoading } =
//     useGetModuleContentsQuery(selectedModuleId, { skip: !selectedModuleId });

//   const modules = modulesRes?.data || [];
//   const contents = contentsRes?.data || [];

//   // ------------------ MODULE MUTATIONS ------------------
//   const [updateModule, { isLoading: updateModuleLoading }] =
//     useUpdateModuleMutation();
//   const [deleteModule, { isLoading: deleteModuleLoading }] =
//     useDeleteModuleMutation();

//   // ------------------ CONTENT MUTATIONS ------------------
//   const [updateContent, { isLoading: updateContentLoading }] =
//     useUpdateContentMutation();
//   const [deleteContent, { isLoading: deleteContentLoading }] =
//     useDeleteContentMutation();

//   // ------------------ CONTENT FORM ------------------
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const contentType = watch("contentType");

//   const { data: singleContentRes, isLoading: singleContentLoading } =
//     useGetSingleModuleContentsQuery(selectedContentId?.id, {
//       skip: !selectedContentId?.id,
//     });

//   // ------------------ EFFECTS ------------------
//   // Prefill content form
//   useEffect(() => {
//     if (singleContentRes?.data) {
//       const content = singleContentRes.data;
//       reset();
//       setValue("title", content.title || "");
//       setValue("contentType", content.contentType || "classLink");
//       setValue("content", content.content || "");
//       setValue(
//         "startDate",
//         content.startDate
//           ? new Date(content.startDate).toISOString().split("T")[0]
//           : ""
//       );
//       setValue("startTime", content.startTime || "");
//     } else {
//       reset();
//     }
//   }, [singleContentRes, reset, setValue]);

//   // ------------------ HANDLERS ------------------
//   const handleCourseSelect = (courseId) => {
//     setSelectedCourseId(courseId);
//     setSelectedModuleId(null);
//     setSelectedContentId(null);
//   };

//   const handleModuleSelect = (moduleId) => {
//     setSelectedModuleId(moduleId);
//     setSelectedContentId(null);
//   };

//   const handleContentSelect = (contentId) => {
//     const parsed = JSON.parse(contentId);
//     setSelectedContentId(parsed);
//   };

//   const handleModuleUpdate = async (data) => {
//     if (!selectedModuleId) return;
//     try {
//       const res = await updateModule({ id: selectedModuleId, data }).unwrap();
//       if (res?.status) Swal.fire("Success!", "Module updated successfully", "success");
//     } catch (err) {
//       toast.error(err?.data?.message || "Failed to update module");
//     }
//   };

//   const handleModuleDelete = async () => {
//     if (!selectedModuleId) return;
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This will delete the module and its contents!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (!result.isConfirmed) return;
//       try {
//         await deleteModule(selectedModuleId).unwrap();
//         Swal.fire("Deleted!", "Module deleted successfully", "success");
//         setSelectedModuleId(null);
//         setSelectedContentId(null);
//       } catch (err) {
//         toast.error(err?.data?.message || "Failed to delete module");
//       }
//     });
//   };

//   const handleContentUpdate = async (data) => {
//     if (!selectedContentId) return;
//     try {
//       const res = await updateContent({ id: selectedContentId?.id, data }).unwrap();
//       if (res?.status) Swal.fire("Success!", "Content updated successfully", "success");
//     } catch (err) {
//       toast.error(err?.data?.message || "Failed to update content");
//     }
//   };

//   const handleContentDelete = async () => {
//     if (!selectedContentId) return;
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This content will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (!result.isConfirmed) return;
//       try {
//         await deleteContent(selectedContentId?.mongoId).unwrap();
//         Swal.fire("Deleted!", "Content deleted successfully", "success");
//         setSelectedContentId(null);
//         reset();
//       } catch (err) {
//         toast.error(err?.data?.message || "Failed to delete content");
//       }
//     });
//   };

//   if (coursesLoading) return <Loading />;

//   return (
//     <div className="flex justify-center m-6">
//       <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 space-y-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
//           Update Module & Content
//         </h2>

//         {/* COURSE SELECT */}
//         <div>
//           <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//             1. Select Course
//           </label>
//           <select
//             value={selectedCourseId || ""}
//             onChange={(e) => handleCourseSelect(e.target.value)}
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition"
//           >
//             <option value="">-- Choose Course --</option>
//             {coursesData?.map((c) => (
//               <option key={c._id} value={c._id}>
//                 {c.title}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* MODULE TYPE */}
//         {selectedCourseId && (
//           <div>
//             <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//               Module Type
//             </label>
//             <select
//               value={moduleType}
//               onChange={(e) => setModuleType(e.target.value)}
//               className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition"
//             >
//               <option value="live">Live</option>
//               <option value="recorded">Recorded</option>
//               <option value="resource">Resource</option>
//             </select>
//           </div>
//         )}

//         {/* MODULE SELECT */}
//         {selectedCourseId && (
//           <div>
//             <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//               2. Select Module
//             </label>
//             {modulesLoading ? (
//               <p className="text-gray-500">Loading modules...</p>
//             ) : (
//               <select
//                 value={selectedModuleId || ""}
//                 onChange={(e) => handleModuleSelect(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition"
//               >
//                 <option value="">-- Choose Module --</option>
//                 {modules?.map((m) => (
//                   <option key={m.id} value={m.id}>
//                     {m.topic}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         )}

//         {/* MODULE ACTIONS */}
//         {selectedModuleId && (
//           <div className="flex gap-4 mt-2">
//             <button
//               onClick={handleModuleDelete}
//               disabled={deleteModuleLoading}
//               className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
//             >
//               {deleteModuleLoading ? "Deleting..." : "Delete Module"}
//             </button>
//           </div>
//         )}

//         {/* CONTENT SELECT */}
//         {selectedModuleId && (
//           <div>
//             <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//               3. Select Content
//             </label>
//             {contentsLoading ? (
//               <p className="text-gray-500">Loading content...</p>
//             ) : (
//               <select
//                 value={JSON.stringify(selectedContentId) || ""}
//                 onChange={(e) => handleContentSelect(e.target.value)}
//                 className="w-full p-3 border rounded-xl bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition"
//               >
//                 <option value="">-- Choose Content --</option>
//                 {contents?.map((c) => (
//                   <option
//                     key={c.id}
//                     value={JSON.stringify({ id: c.id, mongoId: c._id })}
//                   >
//                     {c.title}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         )}

//         {/* CONTENT FORM */}
//         {selectedContentId && !singleContentLoading && (
//           <div className="shadow-lg border dark:bg-gray-700 p-6 rounded-xl mt-4">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
//               Content Details
//             </h3>
//             <form onSubmit={handleSubmit(handleContentUpdate)} className="space-y-4">
//               <div>
//                 <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//                   Content Title
//                 </label>
//                 <input
//                   type="text"
//                   {...register("title", { required: "Content title required" })}
//                   className="w-full p-3 border rounded-xl dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400"
//                 />
//                 {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//                   Content Type
//                 </label>
//                 <select
//                   {...register("contentType", { required: "Content type required" })}
//                   className="w-full p-3 border rounded-xl dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400"
//                 >
//                   <option value="">-- Choose Type --</option>
//                   <option value="classLink">Zoom Link (Class)</option>
//                   <option value="link">Youtube Link</option>
//                   <option value="pdf">PDF (Drive Link)</option>
//                 </select>
//                 {errors.contentType && <p className="text-red-500 text-sm mt-1">{errors.contentType.message}</p>}
//               </div>

//               {["classLink", "link", "pdf"].includes(contentType) && (
//                 <div>
//                   <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
//                     Content URL
//                   </label>
//                   <input
//                     type="url"
//                     {...register("content", { required: "Content URL required" })}
//                     className="w-full p-3 border rounded-xl dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400"
//                   />
//                   {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
//                 </div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Start Date</label>
//                   <input
//                     type="date"
//                     {...register("startDate")}
//                     className="w-full p-3 border rounded-xl dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Start Time</label>
//                   <input
//                     type="time"
//                     {...register("startTime")}
//                     className="w-full p-3 border rounded-xl dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <button
//                   type="submit"
//                   disabled={updateContentLoading}
//                   className="px-6 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition"
//                 >
//                   {updateContentLoading ? "Updating..." : "Update Content"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleContentDelete}
//                   disabled={deleteContentLoading}
//                   className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
//                 >
//                   {deleteContentLoading ? "Deleting..." : "Delete Content"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


















// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import {
//   useGetCourseListQuery,
//   useUpdateContentMutation,
// } from "../../../../redux/api/couresApi";

// export default function UpdateModuleContent() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedContent, setSelectedContent] = useState(null);

//   const { data: courses = [] } = useGetCourseListQuery();
//   const [updateContent] = useUpdateContentMutation();

//   const { register, handleSubmit, reset, watch } = useForm();
//   const contentType = watch("content_type");

//   // Prefill form when selecting content
//   useEffect(() => {
//     if (selectedCourse && selectedContent) {
//       const [topicIndex, subIndex] = selectedContent.split("-").map(Number);
//       const sub = selectedCourse.topics[topicIndex]?.sub_topics[subIndex];
//       if (sub) {
//         reset({
//           topic: selectedCourse.topics[topicIndex].title,
//           content_title: sub.title,
//           content_type: sub.type || "video", // যদি type থাকে
//           content: sub.link || "", // যদি link থাকে
//         });
//       }
//     }
//   }, [selectedCourse, selectedContent, reset]);
//   const onSubmit = async (data) => {
//     if (!selectedCourse || !selectedContent) {
//       toast.error("Select course and content first!");
//       return;
//     }

//     try {
//       await updateContent({
//         courseId: selectedCourse._id,
//         contentId: selectedContent,
//         data: {
//           topic: data.topic,
//           title: data.content_title,
//           type: data.content_type,
//           link: data.content,
//         },
//       }).unwrap();

//       Swal.fire({
//         title: "Updated!",
//         text: "Content updated successfully ✅",
//         icon: "success",
//       });
//     } catch (err) {
//       toast.error(err?.data?.message || "Failed to update content ❌");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-6">
//       <h2 className="text-2xl font-bold text-center">Update Content</h2>

//       {/* Select Course */}
//       <select
//         value={selectedCourse?._id || ""}
//         onChange={(e) =>
//           setSelectedCourse(courses.find((c) => c._id === e.target.value))
//         }
//         className="w-full p-3 border rounded"
//       >
//         <option value="">-- Select Course --</option>
//         {courses.map((c) => (
//           <option key={c._id} value={c._id}>
//             {c.title}
//           </option>
//         ))}
//       </select>

//       {/* Select Content */}
//       {selectedCourse && (
//         <select
//           value={selectedContent || ""}
//           onChange={(e) => setSelectedContent(e.target.value)}
//           className="w-full p-3 border rounded"
//         >
//           <option value="">-- Select Content --</option>
//           {selectedCourse.topics?.map((topic, i) =>
//             topic.sub_topics?.map((sub, j) => (
//               <option key={`${i}-${j}`} value={`${i}-${j}`}>
//                 {topic.title} → {sub.title}
//               </option>
//             ))
//           )}
//         </select>
//       )}
//       {/* Edit Form */}
//       {selectedContent && (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Topic"
//             {...register("topic", { required: true })}
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="text"
//             placeholder="Content Title"
//             {...register("content_title", { required: true })}
//             className="w-full p-3 border rounded"
//           />

//           <select
//             {...register("content_type", { required: true })}
//             className="w-full p-3 border rounded"
//           >
//             <option value="">-- Select Type --</option>
//             <option value="video">YouTube</option>
//             <option value="pdf">PDF</option>
//             <option value="class">Zoom Class</option>
//           </select>

//           {contentType && (
//             <input
//               type="url"
//               {...register("content", { required: true })}
//               placeholder="Content Link"
//               className="w-full p-3 border rounded"
//             />
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded"
//           >
//             Update Content
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }