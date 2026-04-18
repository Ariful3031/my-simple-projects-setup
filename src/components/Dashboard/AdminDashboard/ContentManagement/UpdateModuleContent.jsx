
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
    <div className="flex justify-center m-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl space-y-6 border border-gray-200 dark:border-gray-700">

        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Update Module & Content
        </h2>

        {/* COURSE */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            1. Select Course <span className="text-red-500">*</span>
          </label>
          <select
            onChange={(e) => handleCourseSelect(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              2. Select Module <span className="text-red-500">*</span>
            </label>
            <select
              onChange={(e) => handleModuleSelect(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              3. Select Content <span className="text-red-500">*</span>
            </label>
            <select
              onChange={(e) => handleContentSelect(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
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
          <div className="border border-gray-300 dark:border-gray-600 shadow-xl shadow-gray-200 dark:shadow-gray-900 p-5 rounded-xl bg-white dark:bg-gray-800">
            <label className="block mt-1 mb-5 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Content Details
            </label>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content Title <span className="text-red-500">*</span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content Type <span className="text-red-500">*</span>
                </label>
              </div>

              <select
                {...register("contentType", { required: true })}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              >
                <option value="">Select Type</option>
                <option value="live-link">Live Link</option>
                <option value="vedio">Record vedio Link</option>
                <option value="pdf">PDF Link</option>
              </select>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Content URL"
                  {...register("content", { required: true })}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                />
              </div>

              <button
                type="submit"
                disabled={updateLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
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

