
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { useCreateCategoryMutation } from "../../../../redux/api/categoriesApi";


const CreateCourse = () => {

  const [createCategory, { isLoading, error }] = useCreateCategoryMutation();

  const { register, handleSubmit, control, reset, setValue, formState: { errors },
  } = useForm();

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

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      formData.append(
        "data",
        JSON.stringify({
          category_title: data?.category_title,
          category_description: data?.category_description,
        })
      );

      const res = await createCategory(formData).unwrap();

      if (res?.message === "success") {
        Swal.fire({
          icon: "success",
          title: "Course Created",
          text: res?.message || "Success",
        });
      }

    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 md:p-8 text-gray-800 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-6 shadow-xl rounded-md border border-gray-200 dark:border-gray-700">

        {/* Header */}
        <div className="shadow p-4 rounded-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-primary-500">
            Create Category
          </h2>
          <Link
            to={"/dashboard/categories-list"}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="font-bold">Dashboard</span> / Categories List
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* image */}
          <div>
            <label className="font-semibold dark:text-white">Icon image</label>

            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "image required" })}
              onChange={handleImagePreview}
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 w-40 h-24 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
              />
            )}
          </div>

          {/* Category Title */}
          <div>
            <label className="block mb-1 font-medium dark:text-white">
              Category Title
            </label>

            <input
              {...register("category_title", { required: true })}
              type="text"
              placeholder="PRIMARY"
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Category Description */}
          <div>
            <label className="block mb-1 font-medium dark:text-white">
              Category Description
            </label>

            <textarea
              {...register("category_description", { required: true })}
              placeholder="Category Description"
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
          >
            {isLoading ? "Category Creating... " : "Create Category "}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
















