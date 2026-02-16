import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router';
export const Instructors = () => {
  const teacherData = [
    {
      id: '2',
      image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
      name: "মাইদুল ইসলাম প্রধান (মুকুল)",
      designation: "বি.এ (অনার্স), এম.এ (ইংরেজি), বিসিএস ক্যাডার, প্রতিষ্ঠাতা বিদ্যাবাড়ি",
      Introduction: "Mr. Mayedul Islam Pradhan, commonly known as Mukul, is a distinguished academic and public servant with a strong background in English literature and administration. Holding a Bachelor’s (Honors) and Master’s degree in English, he brings both intellectual rigor and practical experience to his profession. Currently, he serves as an official in the Bangladesh Civil Service (Information) under the Ministry of Information, stationed at the Bangladesh Secretariat in Dhaka. With a passion for education and communication, Mr. Pradhan is well-regarded for his ability to connect with learners and inspire critical thinking, particularly in the field of English language and literature. His dedication to knowledge dissemination and his role in the government underline his commitment to nation-building and intellectual development.",
      BiographicalInfo: "Full Name: Mayedul Islam Pradhan (Mukul) Academic Qualifications: B.A. (Honors) in English M.A. in English Professional Role: BCS Information Cadre Current Position: Ministry of Information, Bangladesh Secretariat, Dhaka Affiliations: Government of the People's Republic of Bangladesh Expertise: English Language, Literature, Public Information Management Mr. Pradhan’s journey exemplifies the blend of academic excellence and public service, making him a source of inspiration for students and colleagues alike.",

    },
    {
      id: '2',
      image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
      name: "রফিকুল ইসলাম",
      designation: "সিনিয়র শিক্ষক (গণিত), বিদ্যাবাড়ি",
      Introduction: "Mr. Mayedul Islam Pradhan, commonly known as Mukul, is a distinguished academic and public servant with a strong background in English literature and administration. Holding a Bachelor’s (Honors) and Master’s degree in English, he brings both intellectual rigor and practical experience to his profession. Currently, he serves as an official in the Bangladesh Civil Service (Information) under the Ministry of Information, stationed at the Bangladesh Secretariat in Dhaka. With a passion for education and communication, Mr. Pradhan is well-regarded for his ability to connect with learners and inspire critical thinking, particularly in the field of English language and literature. His dedication to knowledge dissemination and his role in the government underline his commitment to nation-building and intellectual development.",
      BiographicalInfo: "Full Name: Mayedul Islam Pradhan (Mukul) Academic Qualifications: B.A. (Honors) in English M.A. in English Professional Role: BCS Information Cadre Current Position: Ministry of Information, Bangladesh Secretariat, Dhaka Affiliations: Government of the People's Republic of Bangladesh Expertise: English Language, Literature, Public Information Management Mr. Pradhan’s journey exemplifies the blend of academic excellence and public service, making him a source of inspiration for students and colleagues alike.",

    },
    {
      id: '3',
      image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
      name: "মো. জিহাদ হোসেন",
      designation: "শিক্ষক (ইংরেজি), বিদ্যাবাড়ি",
      Introduction: "Mr. Mayedul Islam Pradhan, commonly known as Mukul, is a distinguished academic and public servant with a strong background in English literature and administration. Holding a Bachelor’s (Honors) and Master’s degree in English, he brings both intellectual rigor and practical experience to his profession. Currently, he serves as an official in the Bangladesh Civil Service (Information) under the Ministry of Information, stationed at the Bangladesh Secretariat in Dhaka. With a passion for education and communication, Mr. Pradhan is well-regarded for his ability to connect with learners and inspire critical thinking, particularly in the field of English language and literature. His dedication to knowledge dissemination and his role in the government underline his commitment to nation-building and intellectual development.",
      BiographicalInfo: "Full Name: Mayedul Islam Pradhan (Mukul) Academic Qualifications: B.A. (Honors) in English M.A. in English Professional Role: BCS Information Cadre Current Position: Ministry of Information, Bangladesh Secretariat, Dhaka Affiliations: Government of the People's Republic of Bangladesh Expertise: English Language, Literature, Public Information Management Mr. Pradhan’s journey exemplifies the blend of academic excellence and public service, making him a source of inspiration for students and colleagues alike.",

    },
    {
      id: '3',
      image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
      name: "মো. জিহাদ হোসেন",
      designation: "শিক্ষক (ইংরেজি), বিদ্যাবাড়ি",
      Introduction: "Mr. Mayedul Islam Pradhan, commonly known as Mukul, is a distinguished academic and public servant with a strong background in English literature and administration. Holding a Bachelor’s (Honors) and Master’s degree in English, he brings both intellectual rigor and practical experience to his profession. Currently, he serves as an official in the Bangladesh Civil Service (Information) under the Ministry of Information, stationed at the Bangladesh Secretariat in Dhaka. With a passion for education and communication, Mr. Pradhan is well-regarded for his ability to connect with learners and inspire critical thinking, particularly in the field of English language and literature. His dedication to knowledge dissemination and his role in the government underline his commitment to nation-building and intellectual development.",
      BiographicalInfo: "Full Name: Mayedul Islam Pradhan (Mukul) Academic Qualifications: B.A. (Honors) in English M.A. in English Professional Role: BCS Information Cadre Current Position: Ministry of Information, Bangladesh Secretariat, Dhaka Affiliations: Government of the People's Republic of Bangladesh Expertise: English Language, Literature, Public Information Management Mr. Pradhan’s journey exemplifies the blend of academic excellence and public service, making him a source of inspiration for students and colleagues alike.",

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
        <h1 className='section_title'>Instructors</h1>
        <h3 className='section_subtitle'>#Learn from the experienced & skillful instructors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            teacherData.map((teacher) =>
              <div key={teacher?.id} className=" flex flex-col border dark:border-none dark:bg-black_primary-800 p-5 shadow-xl rounded-xl">
                <img className='w-full  h-[300px] lg:h-[350px] rounded-sm' src={teacher?.image} alt="" />
                <h2 className='text-xl font-semibold dark:text-[#E2E8F0] mt-3 mb-2'>{teacher?.name}</h2>
                <p className='flex-1 mb-1 text-[#94A3B8]'>{teacher?.designation}</p>
                <Link to={`instructor/details/${teacher?.id}`} className='btn-gradient w-full text-center'>Profile</Link>
              </div>
            )
          }
        </div>
      </motion.div>
    </div>
  )
}
