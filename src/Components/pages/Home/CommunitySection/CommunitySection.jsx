import React from 'react'
import { motion } from "framer-motion";
import { FaUserGraduate } from 'react-icons/fa';

export const CommunitySection = () => {
    const CommunityData = [
        {
            id: "1",
            image: <FaUserGraduate />,
            quentity: "200+",
            title: "Students Enrolled",
        },
        {
            id: "2",
            image: <FaUserGraduate />,
            quentity: "2+",
            title: "Expert Instructors",
        },
        {
            id: "3",
            image: <FaUserGraduate />,
            quentity: "4+",
            title: "Active Courses",
        },
        {
            id: "4",
            image: <FaUserGraduate />,
            quentity: "90%",
            title: "Success Rate",
        },
    ]
    return (
        <div className='px-2'>
            <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.2 }}
                viewport={{ once: true }}
            >
                <h1 className='section_title'>Our Growing Community</h1>
                <h3 className='section_subtitle'>Join thousands of learners and experts in our thriving educational ecosystem.</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10  ">
                    {
                        CommunityData.map((community) => 
                            <div key={community?.id} className="border text-primary-600 border-gray-300 dark:border-black_primary-600 hover:border-primary-600 dark:hover:border-gray-300 p-5 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl duration-300 rounded-xl ">
                                <div className="text-4xl p-5 bg-primary-100 flex justify-center items-center rounded-full border-2">
                                    {community?.image}
                                </div>
                                <h2 className='my-3'>{community?.quentity}</h2>
                                <h3 className=''>{community?.title}</h3>

                            </div>
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}
