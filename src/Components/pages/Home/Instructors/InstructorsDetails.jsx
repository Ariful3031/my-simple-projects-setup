import React from 'react'
import { useParams } from 'react-router'

const InstructorsDetails = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className=''>
           <h1 className='py-10 text-xl dark:text-white'>InstructorsDetails</h1>
        </div>
    )
}

export default InstructorsDetails