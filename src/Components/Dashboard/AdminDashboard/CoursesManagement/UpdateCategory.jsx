// import React from 'react'
// import { useParams } from 'react-router'

// const UpdateCategory = () => {
//     const id = useParams();
//     const categoryId = id?.id;
//     return (
//         <div>UpdateCategory {categoryId}</div>
//     )
// }

// export default UpdateCategory


import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router";
import { useGetAllCategoriesListQuery, useUpdateSingleCategoryMutation } from "../../../../redux/api/categoriesApi";


const UpdateCategory = () => {
    const id = useParams();
    const categoryId = id?.id;
    const { data } = useGetAllCategoriesListQuery({ id: categoryId })
    const [updateSingleCategory, { isLoading }] = useUpdateSingleCategoryMutation();
    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm();

    const [preview, setPreview] = useState(null);
    const [removeImage, setRemoveImage] = useState(false);
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };


    // default value set 

    useEffect(() => {
        if (data?.length > 0) {
            const category = data[0];

            reset({
                category_title: category?.category_title,
                category_description: category?.category_description,
            });

            setPreview(category?.image);
        }
    }, [data, reset]);

    // update form 

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
                    removeImage: removeImage
                })
            );

            const res = await updateSingleCategory({ id: categoryId, formData }).unwrap();
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
        <div className=" bg-gray-100 dark:bg-gray-900 p-4 md:p-8 text-gray-800 dark:text-white">
            <div className="bg-white dark:bg-gray-800 p-6 shadow-xl rounded-md">
                {/* Header */}

                <div className="shadow p-4 rounded-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
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
                            {...register("image")}
                            onChange={handleImagePreview}
                            className="w-full mt-2 p-2 border rounded-lg"
                        />

                        {preview && (
                            <div className="mt-3">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="w-40 h-24 object-cover rounded-lg"
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        setPreview(null);
                                        setRemoveImage(true);
                                    }}
                                    className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
                                >
                                    Remove Image
                                </button>
                            </div>
                        )}
                    </div>


                    <div>
                        <label className="block mb-1 font-medium">
                            Category Title
                        </label>

                        <input
                            {...register("category_title")}
                            type="text"
                            placeholder="PRIMARY"
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Category Description
                        </label>

                        <textarea
                            {...register("category_description")}
                            placeholder="Category Description"
                            className="w-full border rounded p-2"
                        />
                    </div>


                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    >
                        {
                            isLoading ? "Category Updating... " : "Update Category "
                        }

                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateCategory;
















