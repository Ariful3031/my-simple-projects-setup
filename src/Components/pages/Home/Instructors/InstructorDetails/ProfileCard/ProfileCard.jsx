// import React from 'react'

// const ProfileCard = () => {
//     return (
//         <div className="py-16 px-6">
//             <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
//                 <img
//                     src="https://i.pravatar.cc/300"
//                     alt="Instructor"
//                     className="w-48 h-48 rounded-full object-cover"
//                 />
//                 <div>
//                     <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
//                         John Doe
//                     </h2>
//                     <p className="text-blue-500 font-medium mt-2">
//                         Senior Frontend Developer
//                     </p>
//                     <p className="mt-4 text-gray-600 dark:text-gray-300">
//                         10+ years experience teaching modern web development.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProfileCard


const ProfileCard = ({ teacher }) => {
    return (
   
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 flex my-11 flex-col md:flex-row gap-8">

                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-48 h-48 rounded-full object-cover"
                />

                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {teacher.name}
                    </h2>

                    <p className="text-indigo-500 mt-2">
                        {teacher.institute}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6 text-sm">
                        <span>⭐ {teacher.rating}</span>
                        <span>👨‍🎓 {teacher.totalStudents}+ Students</span>
                        <span>🏆 {teacher.experience}+ Years</span>
                    </div>
                </div>

            </div>
    
    );
};

export default ProfileCard;