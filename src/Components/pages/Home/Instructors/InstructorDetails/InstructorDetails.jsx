
import React from 'react'
import { useParams } from 'react-router'
import HeroInstructor from './HeroInstructor/HeroInstructor';
import ProfileCard from './ProfileCard/ProfileCard';
import Skills from './Skills/Skills';
import InstructorCourses from './InstructorCourses/InstructorCourses';
import InstructorCTA from './InstructorCTA/InstructorCTA';
import { teacherData } from '../Instructors';
import StudentFeedbacks from './StudentFeedbacks/StudentFeedbacks';

const InstructorDetails = () => {
    const { id } = useParams();
    console.log(id)
    const teacher = teacherData.find((t) => t.id === id);
    if (!teacher) {
        return (
            <div className="text-center py-20 text-red-500">
                Teacher Not Found
            </div>
        );
    }
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <HeroInstructor teacher={teacher}></HeroInstructor>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProfileCard teacher={teacher}></ProfileCard>
                <Skills teacher={teacher}></Skills>
            </div>
            <InstructorCourses teacher={teacher}></InstructorCourses>
            <StudentFeedbacks teacher={teacher}></StudentFeedbacks>

            <InstructorCTA teacher={teacher}></InstructorCTA>


        </div>
    )
}

export default InstructorDetails