import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetAllUsersAdminQuery, useUpdateSingleUserMutation } from "../../../../redux/api/authApi";

const UpdateUser = () => {
    const { email } = useParams();
    console.log(email)
    const { data, isLoading } = useGetAllUsersAdminQuery({ role: "student" });
    const [updateSingleUser, { isLoading: updateLoading }] = useUpdateSingleUserMutation();

    const { register, handleSubmit, reset, watch, setValue } = useForm();

    const [preview, setPreview] = useState("");

    // ✅ Load user default data
    useEffect(() => {
        const singleUser = data?.find((user) => user.email === email);
        if (singleUser) {
            reset(singleUser);
            setPreview(singleUser.photoURL);
        }
    }, [email, reset]);

    // ✅ Watch photoURL for live preview (when user pastes link)
    const photoURL = watch("photoURL");

    useEffect(() => {
        if (photoURL) {
            setPreview(photoURL);
        }
    }, [photoURL]);

    // ✅ Handle file upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imagePreview = URL.createObjectURL(file);
            setPreview(imagePreview);

            // form value set
            setValue("photoURL", imagePreview);
        }
    };

    // ✅ Submit
    const onSubmit = async (data) => {
        try {
            const updateData = {
                displayName: data.displayName,
                phoneNumber: data.phoneNumber,
                role: data.role,
                photoURL: data.photoURL,
            };

            const res = await updateSingleUser({
                id: data._id,
                data: updateData
            }).unwrap();

            console.log("Updated Response:", res);
            alert("User Updated Successfully ✅");

        } catch (error) {
            console.error("Update Failed:", error);
            alert("Update Failed ❌");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
            <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Update User
                    </h2>

                    <Link
                        to="/dashboard/student-list"
                        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm"
                    >
                        Users List
                    </Link>
                </div>

                {/* Profile Preview */}
                <div className="flex justify-center mb-6">
                    <img
                        src={preview || "https://via.placeholder.com/150"}
                        alt="User"
                        className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
                    />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-6"
                >

                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            {...register("displayName")}
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            disabled
                            className="w-full px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-600 text-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Phone Number
                        </label>
                        <input
                            {...register("phoneNumber")}
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Role
                        </label>
                        <select
                            {...register("role")}
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                        >
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Photo URL */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Photo URL
                        </label>
                        <input
                            {...register("photoURL")}
                            type="text"
                            placeholder="Paste image link here..."
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">
                            Upload New Photo
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300"
                        >
                            {
                                updateLoading ? "updating Student...." : "Update Student"
                            }
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateUser;