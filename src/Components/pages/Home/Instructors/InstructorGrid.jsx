import React from 'react'
import InstructorCard from './InstructorDetails/StudentFeedbacks/InstructorCard'

const InstructorGrid = ({ teacherData }) => {
    console.log(teacherData)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                teacherData.map((teacher) =>
                    <InstructorCard key={teacher.id} teacher={teacher}></InstructorCard>
                )
            }
        </div>
    )
}

export default InstructorGrid