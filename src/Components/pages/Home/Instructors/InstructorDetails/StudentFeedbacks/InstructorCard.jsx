import React from 'react'
import { Link } from 'react-router'

const InstructorCard = ({ teacher }) => {
    return (
        <div className=" flex flex-col border dark:border-none dark:bg-black_primary-800 p-5 shadow-xl rounded-xl">
            <img className='w-full  h-[300px] 2xl:h-[350px] rounded-sm' src={teacher?.image} alt="" />
            <h2 className='text-xl font-semibold dark:text-[#E2E8F0] mt-3 mb-2'>{teacher?.name}</h2>
            <p className='flex-1 mb-1 text-[#94A3B8]'>{teacher?.designation}</p>
            <Link to={`instructor/details/${teacher.id}`} className='btn-gradient w-full text-center'>Profile</Link>
        </div>
    )
}

export default InstructorCard