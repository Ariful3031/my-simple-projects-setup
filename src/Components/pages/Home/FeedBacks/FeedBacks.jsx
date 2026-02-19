import React from 'react'
import { motion } from "framer-motion";
import FeedbackCard from './FeedbackCard';


export const FeedBacks = () => {
    const demofeedBacks = [
        {
            id: "1",
            name: "Md. Saad",
            role: "From Course",
            avatar: "MS",
            feedback: "কয়েকদিন হলো আপনাদেরকে পেলাম। ৫ টি ক্লাস শেষ করেছি আলহামদুলিল্লাহ। সমস্ত ক্লাস করব ইনশাআল্লাহ। আপনারা জাতির কল্যাণের জন্য যে উদ্যোগ নিয়েছেন তাতে আপনাদের সফলতা কামনা করছি। আল্লাহ আপনাদেরকে উত্তম প্রতিদান দান করুন।",
            rating: 5,
        },
        {
            id: "2",
            name: "Md. Saad",
            role: "From Course",
            avatar: "MS",
            feedback: "সমস্ত ক্লাস করব ইনশাআল্লাহ। আপনারা জাতির কল্যাণের জন্য যে উদ্যোগ নিয়েছেন তাতে আপনাদের সফলতা কামনা করছি। আল্লাহ আপনাদেরকে উত্তম প্রতিদান দান করুন।",
            rating: 3,
        },
        {
            id: "3",
            name: "Md. Saad",
            role: "From Course",
            avatar: "MS",
            feedback: "কয়েকদিন হলো আপনাদেরকে আল্লাহ আপনাদেরকে উত্তম প্রতিদান দান করুন। আপনারা জাতির কল্যাণের জন্য যে উদ্যোগ নিয়েছেন তাতে আপনাদের সফলতা কামনা করছি। ",
            rating: 5,
        },
        {
            id: "4",
            name: "Md. Saad",
            role: "From Course",
            avatar: "MS",
            feedback: " আল্লাহ আপনাদেরকে উত্তম প্রতিদান দান করুন। আপনারা জাতির কল্যাণের জন্য যে উদ্যোগ নিয়েছেন তাতে আপনাদের সফলতা কামনা করছি।",
            rating: 4,
        },
    ]
    return (
        <div className='px-2'>
            <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.2 }}
                viewport={{ once: true }}
                className=""
            >
                <h1 className='section_title'>Our Students FeedBacks</h1>
                <h3 className='section_subtitle'>Real voices. Real experiences. Discover how our courses have empowered learners to grow their skills  their goals.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        demofeedBacks.map((singleFeedback, index) => (
                            
                            <FeedbackCard key={index} singleFeedback={singleFeedback} ></FeedbackCard>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}
