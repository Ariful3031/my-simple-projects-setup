import React, { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const { signInUser, handleGoogleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleSignInUser = (data) => {
        const email = data.email;
        const password = data.password;

        signInUser(email, password)
            .then((result) => {
                // Signed in 
                toast.success("login successfull")
                navigate(location?.state?.from || '/');
                return result.user;
            })
            .catch((err) => {
                toast.error(err.message)
                console.log(err.message)
            });

    }

    

    return (
        <div className='bg-[#FFF0E1] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className="card bg-gradient w-full mx-auto  max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] dark:text-white font-semibold text-center mt-5'>Login Now</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleSignInUser)} >
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

                        {/* forgot password */}
                        <div className='mt-3'>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        {/* button  */}
                        <button className="btn btn-gradient w-full mt-4">Login</button>
                    </form>
                    {/* Demo User Button */}
                    {/* <button
                        type="button"
                        onClick={handleDemoLogin}
                        className="btn btn-primary"
                    >
                        Login as Demo User
                    </button> */}

                    <div className='flex'>
                        <p className='text-xl'>----------------</p>
                        <p className='font-bold text-xl'>or</p>
                        <p className='text-xl'>----------------</p>
                    </div>

                    {/* Google */}
                    <GoogleLogin></GoogleLogin>

                    <p className='mt-2'> Dont’t Have An Account ? please <Link className='cursor-pointer hover:underline text-red-500' to='/register'>Register</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login