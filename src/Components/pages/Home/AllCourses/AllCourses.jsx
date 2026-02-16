import React from 'react'
import { motion } from "framer-motion";
export const AllCourses = () => {
  return (
    <div className='px-2'>
      <motion.div

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 * 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
      >
        <h1 className='section_title'>Explore All Our Courses</h1>
        <h3 className='section_subtitle'>Find the perfect course to power your career.</h3>
        <div className="section_title">
          Daynamic part section
        </div>
      </motion.div>
    </div>
  )
}
