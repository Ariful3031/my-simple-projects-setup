import React, { useState } from 'react'
import { motion } from "framer-motion";

import InstructorGrid from './InstructorGrid';
import { useGetAllUsersAdminQuery } from '../../../../redux/api/authApi';
import Loading from '../../Loading/Loading';



export const Instructors = () => {
  
  const { data, isLoading } = useGetAllUsersAdminQuery({ role: 'teacher' });
  const teacherData = data;


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='px-2'>
    
      <h1 className='section_title'>Instructors</h1>
      <h3 className='section_subtitle'>#Learn from the experienced & skillful instructors</h3>
      <InstructorGrid teacherData={teacherData}></InstructorGrid>
    </div>
  )
}
