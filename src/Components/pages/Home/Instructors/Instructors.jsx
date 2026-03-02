import React, { useState } from 'react'
import { motion } from "framer-motion";

import InstructorGrid from './InstructorGrid';
import { useGetAllUsersAdminQuery } from '../../../../redux/api/authApi';
import Loading from '../../Loading/Loading';



export const Instructors = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("latest");
  // const { data, isLoading } = useGetAllUsersAdminQuery({ role: 'teacher', searchText: searchTerm, sort: orderBy });
  const { data, isLoading } = useGetAllUsersAdminQuery();
  const teacherData = data;
  console.log(data)


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='px-2'>
      <motion.div

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 * 0.2 }}
        viewport={{ once: true }}

      >
        <h1 className='section_title'>Instructors</h1>
        <h3 className='section_subtitle'>#Learn from the experienced & skillful instructors</h3>
        <InstructorGrid teacherData={teacherData}></InstructorGrid>
      </motion.div>
    </div>
  )
}
