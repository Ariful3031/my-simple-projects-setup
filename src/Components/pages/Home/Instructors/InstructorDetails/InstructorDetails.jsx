import React from 'react';
import { useParams } from 'react-router';
import HeroInstructor from './HeroInstructor/HeroInstructor';
import ProfileCard from './ProfileCard/ProfileCard';
import Skills from './Skills/Skills';
import InstructorCourses from './InstructorCourses/InstructorCourses';
import InstructorCTA from './InstructorCTA/InstructorCTA';
import StudentFeedbacks from './StudentFeedbacks/StudentFeedbacks';
import { useGetAllUsersAdminQuery } from '../../../../../redux/api/authApi';
import InstructorDetailsSkeletonPage from '../../../LoadingPage/InstructorDetailsSkeletonPage';

const InstructorDetails = () => {
    const { data, isLoading } = useGetAllUsersAdminQuery();
    const { id } = useParams();

    // Show skeleton while loading
    if (isLoading) {
        return <InstructorDetailsSkeletonPage />;
    }

    // Once loaded, find the teacher
    const teacher = data?.find((t) => t._id === id);

    if (!teacher) {
        return (
            <div className="text-center py-20 text-red-500">
                Teacher Not Found
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 p-5">
            <HeroInstructor teacher={teacher} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProfileCard teacher={teacher} />
                <Skills teacher={teacher} />
            </div>
            <InstructorCourses teacher={teacher} />
            <StudentFeedbacks teacher={teacher} />
            <InstructorCTA teacher={teacher} />
        </div>
    );
};

export default InstructorDetails;