
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    useGetAllUsersAdminQuery,
    useUpdateSingleUserMutation,
} from "../../../../redux/api/authApi";
import Loading from "../../../pages/Loading/Loading";

const UpdateInstructor = () => {
    const { email } = useParams();

    const { data, isLoading } = useGetAllUsersAdminQuery({ role: "teacher" });

    const [updateSingleUser, { isLoading: updateLoading }] =
        useUpdateSingleUserMutation();

    const { register, handleSubmit, reset } = useForm();

    const [preview, setPreview] = useState("");
    const [imageFile, setImageFile] = useState(null);

    // load instructor
    useEffect(() => {
        const instructor = data?.find((user) => user?.email === email);

        if (instructor) {
            reset({
                ...instructor,
                achievements: instructor?.achievements?.join(", "),
                subjects: instructor?.subjects?.join(", "),
            });

            setPreview(instructor?.photoURL);
        }
    }, [email, data, reset]);

    // image preview
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    // submit
    const onSubmit = async (formDataData) => {
        try {
            const formData = new FormData();

            if (imageFile) {
                formData.append("photo", imageFile);
            }

            const updateData = {
                displayName: formDataData.displayName,
                phoneNumber: formDataData.phoneNumber,
                institute: formDataData.institute,
                jobTitle: formDataData.jobTitle,
                categoryRole: formDataData.categoryRole,
                address: formDataData.address,
                experience: Number(formDataData.experience),
                Introduction: formDataData.Introduction,
                coverPhoto: formDataData.coverPhoto,
                role: formDataData.role,
                achievements: formDataData.achievements
                    ?.split(",")
                    .map((a) => a.trim()),
                subjects: formDataData.subjects
                    ?.split(",")
                    .map((s) => s.trim()),
            };

            formData.append("data", JSON.stringify(updateData));

            await updateSingleUser({
                id: formDataData._id,
                data: formData,
            }).unwrap();

            alert("Instructor Updated Successfully ✅");
        } catch (error) {
            console.log(error);
            alert("Update Failed ❌");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">

                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Update Instructor
                    </h2>

                    <Link
                        to="/dashboard/instructor-list"
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
                    >
                        Back
                    </Link>
                </div>

                {/* Image Preview */}
                <div className="flex justify-center mb-6">
                    <img
                        src={preview || "https://via.placeholder.com/150"}
                        alt="preview"
                        className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
                    />
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-6"
                >
                    <input {...register("_id")} hidden />

                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Full Name</label>
                        <input {...register("displayName")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Email</label>
                        <input {...register("email")} disabled className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Phone Number</label>
                        <input {...register("phoneNumber")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Institute */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Institute</label>
                        <input {...register("institute")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Job Title</label>
                        <input {...register("jobTitle")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Category Role */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Category Role</label>
                        <input {...register("categoryRole")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Address</label>
                        <input {...register("address")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Experience (Years)</label>
                        <input type="number" {...register("experience")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Cover Photo */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Cover Photo URL</label>
                        <input {...register("coverPhoto")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Introduction */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Introduction</label>
                        <textarea {...register("Introduction")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                    </div>

                    {/* Achievements */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Achievements</label>
                        <input
                            {...register("achievements")}
                            placeholder="Achievement1, Achievement2"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    {/* Subjects */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Subjects</label>
                        <input
                            {...register("subjects")}
                            placeholder="Physics, Math"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Role</label>
                        <select {...register("role")} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    {/* Upload Image */}
                    <div>
                        <label className="block mb-1 text-gray-600 dark:text-gray-300">Upload New Photo</label>
                        <input type="file" onChange={handleImageUpload} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                            {updateLoading ? "Updating..." : "Update Instructor"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateInstructor;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useGetAllUsersAdminQuery, useUpdateSingleUserMutation } from "../../../../redux/api/authApi";
// import Loading from "../../../pages/Loading/Loading";


// const UpdateInstructor = () => {
//     const { email } = useParams();
//     console.log(email)
//     const { data, isLoading } = useGetAllUsersAdminQuery({ role: "teacher" });
//     console.log(data)
//     const [updateSingleUser, { isLoading: updateLoading }] = useUpdateSingleUserMutation();

//     const { register, handleSubmit, reset, watch, setValue } = useForm();
//     const [currentUser, setCurrentUser] = useState(null);
//     // console.log(currentUser)

//     const [preview, setPreview] = useState("");

//     // ✅ Load user default data
//     useEffect(() => {
//         const singleUser = data?.find((user) => user?.email === email);

//         console.log(data);
//         console.log(email);
//         console.log(singleUser);

//         if (singleUser) {
//             setCurrentUser(singleUser);
//             setPreview(singleUser?.photoURL);
//             reset(singleUser);
//         }
//     }, [email, data, reset]);

//     // ✅ Watch photoURL for live preview (when user pastes link)
//     const photoURL = watch("photoURL");

//     useEffect(() => {
//         if (photoURL) {
//             setPreview(photoURL);
//         }
//     }, [photoURL]);

//     // ✅ Handle file upload
//     const handleImageUpload = (e) => {
//         const file = e?.target?.files[0];

//         if (file) {
//             const imagePreview = URL?.createObjectURL(file);
//             setPreview(imagePreview);

//             // form value set
//             setValue("photoURL", imagePreview);
//         }
//     };

//     // ✅ Submit
//     const onSubmit = async (data) => {
//         try {

//             const formData = new FormData();

//             // image file
//             const fileInput = document.querySelector('input[type="file"]');
//             const file = fileInput?.files[0];

//             if (file) {
//                 formData.append("photo", file);
//             }

//             // other data
//             const updateData = {
//                 displayName: data?.displayName,
//                 phoneNumber: data?.phoneNumber,
//                 role: data?.role,
//             };

//             formData.append("data", JSON.stringify(updateData));

//             const res = await updateSingleUser({
//                 id: data?._id,
//                 data: formData
//             }).unwrap();

//             console.log(res);
//             alert("User Updated Successfully ✅");

//         } catch (error) {
//             console.error(error);
//             alert("Update Failed ❌");
//         }
//     };

//     if (isLoading) {
//         return <Loading></Loading>
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
//             <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
//                         Update Teacher
//                     </h2>

//                     <Link
//                         to="/dashboard/instructor-list"
//                         className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm"
//                     >
//                         Teachers List
//                     </Link>
//                 </div>

//                 {/* Profile Preview */}
//                 <div className="flex justify-center mb-6">
//                     <img
//                         src={preview || "https://via.placeholder.com/150"}
//                         alt="User"
//                         className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
//                     />
//                 </div>

//                 {/* Form */}
//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="grid md:grid-cols-2 gap-6"
//                 >

//                     {/* Name */}
//                     <div>
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Full Name
//                         </label>
//                         <input
//                             {...register("displayName")}
//                             type="text"
//                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
//                         />
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Email
//                         </label>
//                         <input
//                             {...register("email")}
//                             type="email"
//                             disabled
//                             className="w-full px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-600 text-gray-500"
//                         />
//                     </div>

//                     {/* Phone */}
//                     <div>
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Phone Number
//                         </label>
//                         <input
//                             {...register("phoneNumber")}
//                             type="text"
//                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                         />
//                     </div>

//                     {/* Role */}
//                     <div>
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Role
//                         </label>
//                         <select
//                             {...register("role")}
//                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                         >
//                             <option value="student">Student</option>
//                             <option value="teacher">Teacher</option>
//                             {/* <option value="admin">Admin</option> */}
//                         </select>
//                     </div>

//                     {/* Photo URL */}
//                     <div className="md:col-span-2">
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Photo URL
//                         </label>
//                         <input
//                             {...register("photoURL")}
//                             type="text"
//                             placeholder="Paste image link here..."
//                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                         />
//                     </div>

//                     {/* File Upload */}
//                     <div className="md:col-span-2">
//                         <label className="block mb-1 text-gray-600 dark:text-gray-300">
//                             Upload New Photo
//                         </label>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                         />
//                     </div>

//                     {/* Button */}
//                     <div className="md:col-span-2">
//                         <button
//                             type="submit"
//                             className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300"
//                         >
//                             {
//                                 updateLoading ? "updating Teacher...." : "Update Teacher"
//                             }
//                         </button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateInstructor;