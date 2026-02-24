import React from 'react'

const Skills = ({ teacher }) => {

    // if (!teacher) {
    //     return (
    //         <div className="text-center py-20 text-red-500">
    //             Instructor Not Found
    //         </div>
    //     );
    // }

    return (
        <div className="w-full my-11 border-2 border-gray-200 rounded-xl shadow-xl hover:shadow-2xl p-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Professional Skills
            </h3>

            {teacher.skills?.map((skill, index) => (
                <div key={index} className="mb-5">
                    <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                            className="h-2 bg-indigo-600 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills