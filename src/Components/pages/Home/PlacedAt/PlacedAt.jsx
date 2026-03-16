import React from 'react'
import { motion } from "framer-motion";
export const PlacedAt = () => {
    return (
        <div className='px-2'>
            <motion.div
            
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
            >

            <h1 className='section_title'> Our students are placed at</h1>
            <h3 className='section_subtitle'>Our Growing Community</h3>
            <div className="section_title flex ">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" alt="" />
                <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg" alt="" />
            </div>
            </motion.div>
            <motion.div
           
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
            >

            <h1 className='section_title'> Our students are placed at</h1>
            <h3 className='section_subtitle'>Our Growing Community</h3>
            <div className="section_title flex ">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" alt="" />
                <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg" alt="" />
            </div>
            </motion.div>
        </div >
    )
}
