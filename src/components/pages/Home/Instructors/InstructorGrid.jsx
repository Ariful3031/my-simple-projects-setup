import React from 'react'
import InstructorCard from './InstructorDetails/StudentFeedbacks/InstructorCard'

const InstructorGrid = ({ teacherData }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                teacherData?.map((teacher, index) =>
                    <InstructorCard key={index} teacher={teacher}></InstructorCard>
                )
            }
        </div>
    )
}

export default InstructorGrid