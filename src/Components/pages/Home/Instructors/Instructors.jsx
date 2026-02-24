import React from 'react'
import { motion } from "framer-motion";

import InstructorGrid from './InstructorGrid';



export const teacherData = [
  {
    id: "1",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    name: "মাইদুল ইসলাম প্রধান (মুকুল)",
    designation: "বি.এ (অনার্স), এম.এ (ইংরেজি), বিসিএস ক্যাডার",
    institute: "বিদ্যাবাড়ি",
    experience: 12,
    totalStudents: 2500,
    totalCourses: 18,
    rating: 4.9,

    subjects: ["English Literature", "Grammar", "IELTS"],
    skills: [
      { name: "Public Speaking", percentage: 95 },
      { name: "Academic Writing", percentage: 90 },
      { name: "Communication", percentage: 92 },
    ],

    education: [
      { degree: "B.A (Honors) in English", year: "2008" },
      { degree: "M.A in English", year: "2010" },
    ],

    achievements: [
      "BCS Information Cadre",
      "Best Educator Award 2022",
      "Published 3 Academic Books",
    ],

    courses: [
      { courseId: "1" },
      { courseId: "3" },
    ],

    reviews: [
      { name: "Rahim", comment: "Amazing mentor!", rating: 4 },
      { name: "Karim", comment: "Very inspiring teacher.", rating: 4.5 },
    ],

    email: "mukul@vidyabari.edu",
    phone: "+8801712345678",
    address: "ঢাকা, বাংলাদেশ",

    Introduction:
      "Distinguished educator and public servant with expertise in English literature and communication.",
  },

  {
    id: "2",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    name: "রফিকুল ইসলাম",
    designation: "সিনিয়র শিক্ষক (গণিত)",
    institute: "বিদ্যাবাড়ি",
    experience: 10,
    totalStudents: 1800,
    totalCourses: 12,
    rating: 4.8,

    subjects: ["Algebra", "Calculus", "Higher Math"],
    skills: [
      { name: "Problem Solving", percentage: 94 },
      { name: "Mathematical Analysis", percentage: 92 },
      { name: "Teaching", percentage: 90 },
    ],

    education: [
      { degree: "B.Sc in Mathematics", year: "2009" },
      { degree: "M.Sc in Mathematics", year: "2011" },
    ],

    achievements: [
      "Math Olympiad Trainer",
      "Best Mathematics Teacher Award",
    ],

    courses: [
      { courseId: "2" },
      { courseId: "4" },
    ],

    reviews: [
      { name: "Sakib", comment: "Great math explanation!", rating: 5 },
      { name: "Mim", comment: "Very helpful sessions.", rating: 4.5 },
    ],

    email: "rafiq@vidyabari.edu",
    phone: "+8801812345678",
    address: "ঢাকা, বাংলাদেশ",

    Introduction:
      "Expert mathematics teacher specializing in higher mathematics and competitive exam preparation.",
  },

  {
    id: "3",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    name: "মো. জিহাদ হোসেন",
    designation: "শিক্ষক (ইংরেজি)",
    institute: "বিদ্যাবাড়ি",
    experience: 6,
    totalStudents: 1200,
    totalCourses: 8,
    rating: 4.7,

    subjects: ["Spoken English", "IELTS Preparation"],
    skills: [
      { name: "Fluency Development", percentage: 93 },
      { name: "Grammar Mastery", percentage: 90 },
      { name: "Communication", percentage: 91 },
    ],

    education: [
      { degree: "B.A in English", year: "2015" },
      { degree: "M.A in English", year: "2017" },
    ],

    achievements: [
      "IELTS Trainer",
      "Spoken English Expert",
    ],

    courses: [
      { courseId: "1" },
      { courseId: "5" },
    ],

    reviews: [
      { name: "Rahat", comment: "Very clear teaching style.", rating: 4.8 },
      { name: "Tania", comment: "Loved the speaking sessions.", rating: 4.7 },
    ],

    email: "jihad@vidyabari.edu",
    phone: "+8801912345678",
    address: "চট্টগ্রাম, বাংলাদেশ",

    Introduction:
      "Dedicated English teacher focused on spoken English and IELTS preparation.",
  },

  {
    id: "4",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    name: "সাবরিনা আক্তার",
    designation: "শিক্ষক (বাংলা)",
    institute: "বিদ্যাবাড়ি",
    experience: 8,
    totalStudents: 1500,
    totalCourses: 10,
    rating: 4.8,

    subjects: ["বাংলা ব্যাকরণ", "সাহিত্য"],
    skills: [
      { name: "Literature Analysis", percentage: 94 },
      { name: "Grammar Expertise", percentage: 92 },
      { name: "Teaching", percentage: 91 },
    ],

    education: [
      { degree: "B.A in Bangla", year: "2012" },
      { degree: "M.A in Bangla", year: "2014" },
    ],

    achievements: [
      "Best Bangla Teacher Award",
      "Literature Specialist",
    ],

    courses: [
      { courseId: "6" },
      { courseId: "7" },
    ],

    reviews: [
      { name: "Nadia", comment: "Amazing literature lessons.", rating: 5 },
      { name: "Shihab", comment: "Very engaging classes.", rating: 4.6 },
    ],

    email: "sabrina@vidyabari.edu",
    phone: "+8801612345678",
    address: "রাজশাহী, বাংলাদেশ",

    Introduction:
      "Experienced Bangla teacher with deep knowledge of literature and grammar.",
  },

  {
    id: "5",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    name: "ইমরান হোসেন",
    designation: "শিক্ষক (বিজ্ঞান)",
    institute: "বিদ্যাবাড়ি",
    experience: 7,
    totalStudents: 1100,
    totalCourses: 9,
    rating: 4.6,

    subjects: ["Physics", "General Science"],
    skills: [
      { name: "Concept Building", percentage: 93 },
      { name: "Problem Solving", percentage: 91 },
      { name: "Teaching", percentage: 89 },
    ],

    education: [
      { degree: "B.Sc in Physics", year: "2013" },
      { degree: "M.Sc in Physics", year: "2015" },
    ],

    achievements: [
      "Science Education Expert",
      "Concept Based Teaching",
    ],

    courses: [
      { courseId: "8" },
      { courseId: "9" },
    ],

    reviews: [
      { name: "Arif", comment: "Physics classes were great!", rating: 4.7 },
      { name: "Kona", comment: "Easy to understand concepts.", rating: 4.6 },
    ],

    email: "imran@vidyabari.edu",
    phone: "+8801512345678",
    address: "খুলনা, বাংলাদেশ",

    Introduction:
      "Science teacher specialized in Physics and general science with concept-based learning.",
  },
];

export const Instructors = () => {

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
