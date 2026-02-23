import React from 'react'
import { motion } from "framer-motion";
import { FaUserGraduate } from 'react-icons/fa6';
export const TrendingCategories = () => {

    const demotCategorys = [
        {
            id: "1",
            image: <FaUserGraduate />,
            title: "BCS",
            description: "প্রিলি, লিখিত, ভাইভা প্রস্তুতির সকল কোর্স।",
        },
        {
            id: "2",
            image: <FaUserGraduate />,
            title: "PRIMARY",
            description: "প্রাইমারি শিক্ষক নিয়োগ লিখিত ও ভাইভা পরীক্ষার চূড়ান্ত প্রস্তুতি।",
        },
        {
            id: "3",
            image: <FaUserGraduate />,
            title: "NTRCA",
            description: "শিক্ষক নিবন্ধন (স্কুল, স্কুল পর্যায়-২ ও কলেজ) প্রিলি.,লিখিত ও ভাইভা পরীক্ষার চূড়ান্ত প্রস্তুতি।",
        },
        {
            id: "4",
            image: <FaUserGraduate />,
            title: "BANK",
            description: "ব্যাংক প্রিলি. লিখিত ও ভাইভা পরীক্ষার চূড়ান্ত প্রস্তুতি।",
        },
        {
            id: "5",
            image: <FaUserGraduate />,
            title: "11-20th Grade",
            description: "১১তম থেকে ২০তম গ্রেডের সরকারি চাকরির চূড়ান্ত প্রস্তুতি।",
        },
        {
            id: "6",
            image: <FaUserGraduate />,
            title: "9th-10th Grade",
            description: "ATEO পরীক্ষার চূড়ান্ত প্রস্তুতি।",
        },
        {
            id: "7",
            image: <FaUserGraduate />,
            title: "RECORDED COURSES",
            description: "Recorded Course",
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
                <h1 className='section_title'>Trending Categories</h1>
                <h3 className='section_subtitle'>Our Growing Community</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5  ">
                    {
                        demotCategorys.map((categorie) =>
                            <div key={categorie?.id} className="border text-primary-600 border-gray-300 dark:border-black_primary-600 hover:border-primary-600 dark:hover:border-gray-300 flex items-center justify-center gap-3 py-1 px-3 shadow-lg hover:shadow-2xl duration-300 rounded-xl ">
                                <div className="text-4xl p-5 bg-primary-100 flex justify-center items-center rounded-xl border-2">
                                    {categorie?.image}
                                </div>
                                <div className="">
                                    <h2 className='text-black mb-1 dark:text-[#D1D5DB] text-xl font-semibold'>{categorie?.title}</h2>
                                    <h3 className='text-[#4B5563] dark:text-gray-400'>{categorie?.description}</h3>
                                </div>

                            </div>
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}
