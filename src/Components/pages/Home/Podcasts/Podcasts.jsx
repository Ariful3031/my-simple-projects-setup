import React from 'react'
import { motion } from "framer-motion";
export const Podcasts = () => {
    return (
        <div className='px-2'>
            <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
            >
                <h1 className='section_title'>Learn Smarter Our Podcasts</h1>
                <h3 className='section_subtitle'>Quick tips and stories to boost your course automation skills.</h3>
                <div className="section_title flex">
                    <img src="https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389976.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg" alt="" />
                </div>
            </motion.div>
        </div>
    )
}
