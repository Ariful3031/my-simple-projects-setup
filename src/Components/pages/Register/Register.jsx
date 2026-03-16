import React, { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useRegisterUserMutation } from '../../../redux/api/authApi';

const Register = () => {
    const [registerUser, { isLoading, error }] = useRegisterUserMutation()
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(createUser)
    const handleCreateUser = async (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password)

        try {
            const result = await createUser(email, password);
            const userInfo = {
                email: result?.user?.email,
                emailVerified: result?.user?.emailVerified,
                displayName: result?.user?.displayName,
                photoURL: result?.user?.photoURL,
                creationTime: result?.user?.metadata?.creationTime,
                lastSignInTime: result?.user?.metadata?.lastSignInTime,
                accessToken: result?.user?.accessToken,
                phoneNumber: result?.user?.phoneNumber,
            };
            // এখানে Redux / RTK Query mutation call করো
            const res = await registerUser(userInfo).unwrap();
            if (res?.insertedId) {
                console.log('User saved in DB');
            }

            // Step 4: navigate after login
            navigate(location?.state?.from || '/');
            toast.success('Login successful');

        } catch (err) {
            toast.error(err.message || "Something went wrong");
        }

    }

    return (
        <div className='bg-[#FFF0E1] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className=" card bg-gradient w-full mx-auto max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] dark:text-white font-semibold text-center mt-5'>Register Now</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleCreateUser)}>
                        {/* Name */}
                        <label className="label text-black dark:text-white font-semibold">Name</label>
                        <input type="text"
                            {...register("name", { required: true })}
                            name='name' className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Name" />
                        {errors.name && <p className='text-red-700'>Name is required</p>}
                        {/* image url */}

                        <label className="label text-black dark:text-white font-semibold">URL</label>
                        <input type="url"
                            {...register("image", { required: true })}
                            name='image' className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Image Url" />
                        {errors.image && <p className='text-red-700'>image is required</p>}
                        {/* Email */}
                        <label className="label text-black dark:text-white font-semibold">Email</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            name='email' className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />
                        {errors.email && <p className='text-red-700'>Email is required</p>}

                        {/* password */}
                        <label className="label text-black dark:text-white font-semibold">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"}
                                {...register("password", { required: true })}
                                name='password' className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />
                            {errors.password && <p className='text-red-700'>Password is required</p>}
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-xl absolute right-2 top-2 z-50">{
                                showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                        </div>

                        {/* button  */}
                        <button className="btn btn-gradient w-full mt-4"> Register</button>
                    </form>

                    <div className='flex'>
                        <p className='text-xl'>----------------</p>
                        <p className='font-bold text-xl'>or</p>
                        <p className='text-xl'>----------------</p>
                    </div>

                    {/* Google */}
                    <GoogleLogin></GoogleLogin>
                    <p className='mt-2'> Already Have An Account ? please  <Link className='cursor-pointer hover:underline text-red-500' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register