import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='bg-[#FFF0E1] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className="card bg-gradient w-full mx-auto  max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] dark:text-white font-semibold text-center mt-5'>Login Now</h1>
                <div className="card-body">
                    <form >
                        {/* Email */}
                        <label className="label text-black dark:text-white font-semibold">Email</label>
                        <input type="email" className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                        {/* password */}
                        <label className="label text-black dark:text-white font-semibold">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"}
                                name='password' className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />

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
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className='mt-2'> Dont’t Have An Account ? please <Link className='cursor-pointer hover:underline text-red-500' to='/register'>Register</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login