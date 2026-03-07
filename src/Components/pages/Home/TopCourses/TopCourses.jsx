import React from 'react'
import { motion } from "framer-motion";
import { useGetCourseListQuery } from '../../../../redux/api/couresApi';
import CourseCard from '../../CoursesPage/CourseCard';
export const TopCourses = () => {

  const { data, isLoading, error } = useGetCourseListQuery();



  const demoCourses = [

    {
      id: "1",
      examTitle: "১৯তম শিক্ষক নিবন্ধন",
      batchLabel: "(বিসিএসডিসি) লাইভ ব্যাচ-৮",
      subject: "স্কুল পর্যায়-২",
      status: "ভর্তি চলছে...",
      title: "গণিত - কলেজ পর্যায় স্পেশাল লাইভ ব্যাচ-৮",

      discount: {
        percentage: 50
      },

      pricing: {
        originalPrice: 3800,
        discountedPrice: 1710,
        currency: "BDT"
      },

      rating: {
        average: 4,
        totalReviews: 120
      },

      thumbnail: "",
      isPublished: true,
      createdAt: "2026-02-21T10:00:00Z",
      // course details 
      duration: "3 Month",
      totalLecture: 25,
      enrolled: "1200+",
      language: "বাংলা",

      includes: [
        "Full lifetime access",
        "Mobile & Computer access",
        "PDF Materials",
        "Certificate"
      ],
      contact: "01884445333",

      overview: "এই কোর্সে কলেজ পর্যায়ের গণিত সম্পূর্ণভাবে সহজভাবে শেখানো হবে। লাইভ ক্লাস, প্রশ্ন সমাধান, এবং মডেল টেস্ট অন্তর্ভুক্ত।",
      instructor: {
        name: "প্রফেসর মো: সাইফুল ইসলাম",
        bio: "গণিতের অভিজ্ঞ শিক্ষক, ১০+ বছর পড়ানোর অভিজ্ঞতা। বিসিএস ও শিক্ষক নিবন্ধন পরীক্ষায় বিশেষ পারদর্শী।",
        image: "https://i.pravatar.cc/150?img=12"
      },
      routine: [
        { day: "শনিবার", topic: "বীজগণিত", time: "8:00 PM - 9:00 PM" },
        { day: "সোমবার", topic: "জ্যামিতি", time: "8:00 PM - 9:00 PM" },
        { day: "বুধবার", topic: "ত্রিকোণমিতি", time: "8:00 PM - 9:00 PM" }
      ],
      reviews: [
        { name: "রাকিব", rating: 5, comment: "দারুণ কোর্স! অনেক কিছু শিখতে পেরেছি।" },
        { name: "সাবিনা", rating: 4, comment: "ভালো, তবে আরো প্র্যাকটিস দরকার।" }
      ]
    },

    {
      id: "2",
      examTitle: "১৯তম শিক্ষক নিবন্ধন",
      batchLabel: "লাইভ ব্যাচ-৫",
      subject: "ইংরেজি",
      status: "সিট সীমিত...",
      title: "ইংরেজি - স্কুল পর্যায় লাইভ ব্যাচ-৫",

      discount: {
        percentage: 40
      },

      pricing: {
        originalPrice: 3200,
        discountedPrice: 1920,
        currency: "BDT"
      },

      rating: {
        average: 4.5,
        totalReviews: 95
      },

      thumbnail: "https://storage.biddabari.online/biddabari-bucket/backend/assets/uploaded-files/course/course-banners/courses-1771395870-870559098075430.webp",
      isPublished: true,
      createdAt: "2026-02-20T10:00:00Z",
      // course details 
      duration: "3 Month",
      totalLecture: 25,
      enrolled: "1200+",
      language: "বাংলা",

      includes: [
        "Full lifetime access",
        "Mobile & Computer access",
        "PDF Materials",
        "Certificate"
      ],
      contact: "01884445333",

      overview: "ইংরেজি ব্যাকরণ, রাইটিং এবং পরীক্ষার প্রস্তুতি নিয়ে সম্পূর্ণ কোর্স।",
      instructor: {
        name: "মিস. লায়লা আক্তার",
        bio: "ইংরেজি ভাষায় বিশেষজ্ঞ, ৭+ বছরের অভিজ্ঞতা।",
        image: "https://i.pravatar.cc/150?img=8"
      },
      routine: [
        { day: "রবিবার", topic: "Grammar Basics", time: "7:00 PM - 8:00 PM" },
        { day: "মঙ্গলবার", topic: "Writing Skills", time: "7:00 PM - 8:00 PM" }
      ],
      reviews: [
        { name: "তানভীর", rating: 5, comment: "চমৎকার ব্যাখ্যা!" },
        { name: "নুসরাত", rating: 4, comment: "ভালো কোর্স।" }
      ]
    },

    {
      id: "3",
      examTitle: "১৮তম শিক্ষক নিবন্ধন",
      batchLabel: "স্পেশাল রেকর্ডেড ব্যাচ",
      subject: "বাংলা",
      status: "রেকর্ডিং চলছে...",
      title: "বাংলা - কলেজ পর্যায় স্পেশাল ব্যাচ",

      discount: {
        percentage: 30
      },

      pricing: {
        originalPrice: 3000,
        discountedPrice: 2100,
        currency: "BDT"
      },

      rating: {
        average: 4.2,
        totalReviews: 75
      },

      thumbnail: "https://storage.biddabari.online/biddabari-bucket/backend/assets/uploaded-files/course/course-banners/courses-1771395870-870559098075430.webp",
      isPublished: true,
      createdAt: "2026-02-18T10:00:00Z",
      // course details 
      duration: "3 Month",
      totalLecture: 25,
      enrolled: "1200+",
      language: "বাংলা",

      includes: [
        "Full lifetime access",
        "Mobile & Computer access",
        "PDF Materials",
        "Certificate"
      ],
      contact: "01884445333",

      overview: "বাংলা ব্যাকরণ, সাহিত্য ও পরীক্ষার প্রস্তুতির জন্য সম্পূর্ণ কোর্স।",
      instructor: {
        name: "জনাব মো: হুমায়ুন কবির",
        bio: "বাংলা সাহিত্যে বিশেষজ্ঞ, ১২+ বছরের অভিজ্ঞতা।",
        image: "https://i.pravatar.cc/150?img=5"
      },
      routine: [
        { day: "শনিবার", topic: "ব্যাকরণ", time: "6:00 PM - 7:00 PM" },
        { day: "বুধবার", topic: "সাহিত্য", time: "6:00 PM - 7:00 PM" }
      ],
      reviews: [
        { name: "আশিক", rating: 5, comment: "খুব ভালো কোর্স!" },
        { name: "রিমা", rating: 4, comment: "সহজভাবে শেখানো হয়েছে।" }
      ]
    },

    {
      id: "4",
      examTitle: "১৯তম শিক্ষক নিবন্ধন",
      batchLabel: "লাইভ ব্যাচ-৩",
      subject: "সাধারণ জ্ঞান",
      status: "ভর্তি চলছে...",
      title: "সাধারণ জ্ঞান - পূর্ণাঙ্গ প্রস্তুতি ব্যাচ",

      discount: {
        percentage: 35
      },

      pricing: {
        originalPrice: 2800,
        discountedPrice: 1820,
        currency: "BDT"
      },

      rating: {
        average: 4.1,
        totalReviews: 60
      },

      thumbnail: "https://storage.biddabari.online/biddabari-bucket/backend/assets/uploaded-files/course/course-banners/courses-1771395870-870559098075430.webp",
      isPublished: true,
      createdAt: "2026-02-15T10:00:00Z",
      // course details 
      duration: "3 Month",
      totalLecture: 25,
      enrolled: "1200+",
      language: "বাংলা",

      includes: [
        "Full lifetime access",
        "Mobile & Computer access",
        "PDF Materials",
        "Certificate"
      ],
      contact: "01884445333",


      instructor: {
        name: "ড. মো: জাহাঙ্গীর আলম",
        bio: "সাধারণ জ্ঞান ও ইতিহাসে বিশেষজ্ঞ, ১৫+ বছরের অভিজ্ঞতা।",
        image: "https://i.pravatar.cc/150?img=7"
      },
      routine: [
        { day: "সোমবার", topic: "বাংলাদেশ বিষয়াবলী", time: "7:00 PM - 8:00 PM" },
        { day: "বৃহস্পতিবার", topic: "আন্তর্জাতিক বিষয়াবলী", time: "7:00 PM - 8:00 PM" }
      ],
      reviews: [
        { name: "সুমন", rating: 5, comment: "দারুণ কোর্স!" },
        { name: "মাহি", rating: 4, comment: "অনেক তথ্য পেয়েছি।" }
      ],
      overview: `শীঘ্রই ১৯তম 𝐍𝐓𝐑𝐂𝐀 সার্কুলার হতে যাচ্ছে‼

    পরীক্ষা পদ্ধতিতে আসছে নতুন চমক!

    জেনারেল+বিষয়ভিত্তিক (১০০+১০০)=২০০ নম্বরের পরীক্ষা একসাথেই হওয়ার সমূহ সম্ভাবনা আছে।

    বড় সমস্যা হচ্ছে, হাতে একদমই সময় নাই। পরে প্রস্তুতি শুরু করলে অবশ্যই পিছিয়ে পড়তে পারেন। 𝐂𝐮𝐭 𝐌𝐚𝐫𝐤𝐬 ভিত্তিক নতুন আঙ্গিকে 𝐍𝐓𝐑𝐂𝐀 পরীক্ষা পদ্ধতিতে জেনারেল ১০০ নম্বরের জন্য বাংলা, ইংরেজি, গণিত, সাধারণজ্ঞান থেকে সর্বোচ্চ নম্বর তুলতে হবে। এখানেই প্রতিযোগীতাটা হবে বেশি।

    কাজেই ১টি ভুলে ১৮ লাখ প্রার্থীর মাঝে হারিয়ে যেতে পারেন।

    গত বছর ১৮ লাখ ৬৫ হাজার প্রার্থীর মধ্যে 𝐍𝐓𝐑𝐂𝐀 প্রিলিমিনারিতে অংশগ্রহণ করেছে ১৩ লাখ ৪০ হাজার ৮৩৩ জন। প্রিলিমিনারিতে উত্তীর্ণ হয়েছেন ৪ লাখ ৭৯ হাজার ৯৮১ জন। প্রিলিতে ফেল করেন ৮ লাখ ৬০ হাজার ৮৫২ জন। লিখিত পরীক্ষায় অংশ নেন ৩ লাখ ৪৮ হাজার ৬৮০ জন এবং লিখিত পরীক্ষায় উত্তীর্ণ হন ৮৩ হাজার ৮৬৫ জন। ভাইভায় অংশ নেন ৮১ হাজার ২০৯ জন এবং ভাইভায় উত্তীর্ণ হন ৬০ হাজার ৬৩৪ জন।

    ১৮তম নিবন্ধনে চাহিদা ছিল ১ লক্ষ ৮২২ জনের। অথচ চূড়ান্তভাবে সুপারিশপ্রাপ্ত হন ৪১ হাজার ৬২৭ জন। তার মানে আগের নিয়োগেই আরো প্রায় ৬০ হাজার পদ শূন্য বা খালি আছে।

    সামনেই ১৯তম নিবন্ধন পরীক্ষার বড় বিজ্ঞাপন হতে যাচ্ছে। নতুন আঙ্গিকে প্রস্তুতি নিতে হবে ঠিক এখন থেকেই।

    এক্ষেত্রে আমাদের দীর্ঘ অভিজ্ঞতার সাথে একটু গুছিয়ে প্রস্তুতি নিলেই একটি 𝐌𝐏𝐎-ভুক্ত কলেজ/স্কুল এর একজন গর্বিত ও সম্মানিত শিক্ষক হওয়া এবছর আপনার কেবল সময়ের ব্যাপার বলে আমরা মনে করছি।

    নিশ্চিত থাকুন এবছর 𝐍𝐓𝐑𝐂𝐀 প্রিলি. পরীক্ষা বেশ 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞 হবে।

    গত ১৮তম 𝐍𝐓𝐑𝐂𝐀-পরীক্ষায় আমাদের বিদ্যাবাড়ি থেকে প্রিলি পরীক্ষায় ৯৮% প্রার্থী সফল হয়েছে এবং লিখিত পরীক্ষায় প্রায় ৯০% প্রার্থী সফল হয়েছে। গত বছরের ব্যাপক সাফল্যের পর এবছর আমরা আরও নতুনভাবে সাজিয়েছি ১৯তম 𝐍𝐓𝐑𝐂𝐀 নিবন্ধন পরীক্ষার জন্য সম্পূর্ণ নতুন পরীক্ষা পদ্ধতির উপর একটি 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐀𝐝𝐯𝐚𝐧𝐜𝐞 𝐋𝐢𝐯𝐞 ব্যাচ-

    “𝟏𝟗𝐭𝐡 𝐍𝐓𝐑𝐂𝐀 𝐏𝐫𝐞𝐥𝐢 𝐆𝐨𝐥𝐝 𝐋𝐢𝐯𝐞 𝐁𝐚𝐭𝐜𝐡-𝟒”

    👉 ভর্তি চলছে…

    ✅কোর্সটিতে যা থাকছে-

    💠মোট ক্লাস সংখ্যা- ৮৫টি। যার মধ্যে-

    ক) ৭৫টি বিষয়ভিত্তিক 𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 (𝐋𝐢𝐯𝐞) ক্লাস (প্রতিটি 𝐋𝐢𝐯𝐞 ক্লাস দুই ঘণ্টা করে হবে। প্রতিটি 𝐋𝐢𝐯𝐞 ক্লাস শেষে ক্লাসটি পুনরায় দেখার জন্য রেকর্ড করে দ্রুততম সময়ে নির্দিষ্ট ব্যাচে দেওয়া হবে।)

    [𝐑𝐞𝐜𝐨𝐫𝐝𝐞𝐝 𝐂𝐥𝐚𝐬𝐬 এর সুবিধা হলো অভিজ্ঞ স্যারদের তথ্যবহুল ক্লাস ইচ্ছেমতো টেনে টেনে যতবার ইচ্ছা দেখে নোট করা যায়; অফলাইনে এটি মোটেও সম্ভব নয়।]

    (১) বিষয়ভিত্তিক ক্লাস সমূহ-

    (𝐢) ইংরেজি- ১৭টি

    (𝐢𝐢) গণিত- ২১টি

    (𝐢𝐢𝐢) বাংলা- ১৪টি

    (𝐢𝐯) সাধারণ জ্ঞান- ১৪টি

    (𝐯) সাধারণ বিজ্ঞান-২টি

    (𝐯𝐢) আইসিটি-২টি

    (২) বিশেষ কেয়ার 𝐋𝐢𝐯𝐞 ক্লাস- ৬টি

    (৩) বেসিক 𝐋𝐢𝐯𝐞 ক্লাস- ৪টি

    (৪) স্পেশাল রিভিউ ক্লাস + প্রব্লেম সল্ভিং ক্লাস- ৪টি

    (৫) ওরিয়েন্টেশন ক্লাস=১টি

    খ) ৩০০০+ 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞  প্রশ্নের 𝐓𝐨𝐭𝐚𝐥 𝐋𝐢𝐯𝐞 𝐄𝐱𝐚𝐦=৯৩টি

    (𝐢) ক্লাস টেস্ট- ৭০টি;

    (𝐢𝐢) মডেল টেস্ট- ৫টি;

    (𝐢𝐢𝐢) জব সল্যুশন টেস্ট- ৪টি;

    (𝐢𝐯) সাবজেক্টিভ- ৮টি;

    (𝐯) সাম্প্রতিক টেস্ট- ২টি;

    (𝐯𝐢) সাবজেক্ট ফাইনাল টেস্ট- ৪টি;

    গ) এই কোর্সে ২৪ ঘণ্টা 𝐌𝐞𝐧𝐭𝐨𝐫𝐬𝐡𝐢𝐩 সুবিধা পাবেন, যেখানে সার্বক্ষণিক একজন অভিজ্ঞ মেন্টর আপনার প্রস্তুতি সম্পর্কিত বিষয়গুলো মনিটরিং ও গাইডলাইন প্রদান করবেন।



    ঘ) এই কোর্সের আরেকটি জরুরি বিষয় হচ্ছে, আমরা দিচ্ছি ৪ টি বিষয়ের তথ্য সমৃদ্ধ পরীক্ষায় কমন উপযোগী লেকচার শিট। ১৮তম শিক্ষক নিবন্ধন পরীক্ষায় এ সকল লেকচার শিট থেকে প্রায় ৯৯%+ প্রশ্ন কমন এসেছে। [বিসিএস ক্যাডার স্যার এবং বিদ্যাবাড়ির স্পেশাল রিসার্চ টিমের গবেষণার ভিত্তিতে এই শিটগুলো তৈরি করা হয়েছে। আমাদের ভর্তিকৃত শিক্ষার্থী ছাড়া শিটগুলো অন্য কোথাও বিক্রি করা হয় না।]

    ✍ এই কোর্সটি হবে কেবল 𝐆𝐞𝐧𝐞𝐫𝐚𝐥 বিষয়গুলোর উপর।`,
    },

    {
      id: "5",
      examTitle: "১৮তম শিক্ষক নিবন্ধন",
      batchLabel: "লাইভ ব্যাচ-২",
      subject: "পদার্থবিজ্ঞান",
      status: "নতুন ব্যাচ শুরু...",
      title: "পদার্থবিজ্ঞান - কলেজ পর্যায় লাইভ ব্যাচ-২",

      discount: {
        percentage: 45
      },

      pricing: {
        originalPrice: 4000,
        discountedPrice: 2200,
        currency: "BDT"
      },

      rating: {
        average: 4.7,
        totalReviews: 140
      },

      thumbnail: "https://storage.biddabari.online/biddabari-bucket/backend/assets/uploaded-files/course/course-banners/courses-1771395870-870559098075430.webp",
      isPublished: true,
      createdAt: "2026-02-12T10:00:00Z",

      // course details 
      duration: "3 Month",
      totalLecture: 25,
      enrolled: "1200+",
      language: "বাংলা",

      includes: [
        "Full lifetime access",
        "Mobile & Computer access",
        "PDF Materials",
        "Certificate"
      ],
      contact: "01884445333",

      overview: "পদার্থবিজ্ঞানের মৌলিক ধারণা থেকে পরীক্ষার প্রস্তুতি পর্যন্ত সবকিছু শেখানো হবে।",
      instructor: {
        name: "প্রফেসর মো: ফারুক হোসেন",
        bio: "পদার্থবিজ্ঞানে বিশেষজ্ঞ, ১৪+ বছরের অভিজ্ঞতা।",
        image: "https://i.pravatar.cc/150?img=3"
      },
      routine: [
        { day: "রবিবার", topic: "মেকানিক্স", time: "8:00 PM - 9:00 PM" },
        { day: "মঙ্গলবার", topic: "ইলেকট্রিসিটি", time: "8:00 PM - 9:00 PM" }
      ],
      reviews: [
        { name: "রাহাত", rating: 5, comment: "খুবই ভালো ব্যাখ্যা!" },
        { name: "তৃষা", rating: 4, comment: "সহজভাবে শেখানো হয়েছে।" }
      ]
    }

  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;

  return (
    <div className='px-2'>

      <div className="px-4 md:px-10 py-10">
        <h1 className='section_title text-2xl font-bold'>Top Courses</h1>
        <h3 className='section_subtitle text-gray-500 mb-8'>
          Crafted by industry pros, loved by thousands.
        </h3>

        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {
            data?.map((course, index) => (

              <CourseCard course={course} key={index}></CourseCard>

            ))
          }

        </div>
      </div>

    </div>
  )
}
