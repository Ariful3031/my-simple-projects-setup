
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "ব্রেইনলুমের শিক্ষা সংক্রান্ত সকল কার্যক্রম কি শুধু অনলাইনেই হয়?",
        answer:
            "-হ্যাঁ। ব্রেইনলুমের সকল ক্লাস ও ভর্তি সংক্রান্ত কার্যক্রম অনলাইনেই পরিচালিত হয়। এটি একটি অনলাইন ভিত্তিক প্রতিষ্ঠান, যেখানে আপনি ওয়েবসাইট ও অ্যাপের মাধ্যমে চাকরির প্রস্তুতি নিতে পারবেন ও ডিজিটাল স্কিল শিখতে পারবেন।",
    },
    {
        question: "ব্রেইনলুমের সাথে অন্যান্য অনলাইন কোচিং প্ল্যাটফর্ম গুলোর পার্থক্য কি?",
        answer:
            "ব্রেইনলুমের বিশেষত্ব হলো, এখানে প্রতিটি বিষয় পরিচালনা করা হয় অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা, যারা বিভিন্ন সরকারি প্রতিষ্ঠানে ক্যাডার-নন ক্যাডারসহ অন্যান্য উচ্চ পদগুলোতে কর্মরত রয়েছেন। প্রতিটি ক্লাস লাইভ জুম সেশন হিসেবে নেয়া হয়, এবং ক্লাস শেষে মানসম্মত লেকচার শিট প্রদান করা হয়। এর ফলে শিক্ষার্থীরা সহজেই পঠিত বিষয়গুলো বুঝতে এবং সেই অনুযায়ী প্রস্তুতি নিতে পারে।",
    },
    {
        question: "ব্রেইনলুমের কোর্সে ভর্তি হওয়ার প্রক্রিয়া কি?",
        answer:
            "তিনটি পদ্ধতিতে, আপনি ব্রেইনলুমের প্রিমিয়াম কোর্সগুলো কিনতে পারবেন। প্রথম পদ্ধতি, হটলাইন নাম্বারে ফোন করে। দ্বিতীয় পদ্ধতি, ওয়েবসাইটে লগ-ইন করে, আপনার পছন্দনীয় কোর্সটি বেঁছে নিন।এরপর, ‘কোর্সটি কিনুন’ অপশনে ক্লিক করে আপনি খুব সহজেই যেকোনো কোর্স কিনতে পারবেন। তৃতীয় পদ্ধতি, ব্রেইনলুমের বিভিন্ন পেইজ, গ্রুপ, ইউটিউব চ্যানেলে কমেন্ট করে আপনি ভর্তি সংক্রান্ত বিষয়ে আগ্রহ প্রকাশ করলেই আমাদের প্রতিনিধি দল আপনার সাথে যোগাযোগ করবে।",
    },
    {
        question: "ব্রেইনলুমের কোন কোর্সগুলো সবচেয়ে জনপ্রিয়?",
        answer:
            "আমাদের সকল কোর্সই জনপ্রিয়। তবে, বিসিএস, প্রাইমারি, NTRCA কোর্সগুলোর চাহিদা সবচাইতে বেশি।এরমধ্যে প্রাইমারি ও NTRCA তে আমাদের সাফল্যের হার শতভাগ।",
    },
    {
        question: "ব্রেইনলুমের লাইভ ক্লাসগুলো কীভাবে পরিচালিত হয়?",
        answer:
            "পেইড ক্লাসের ক্ষেত্রে, সরাসরি জুম অ্যাপের মাধ্যমে লাইভ ক্লাসগুলো পরিচালিত হয়।সেক্ষেত্রে আপনাকে জুম আইডি লিংক, পাসওয়ার্ড দিয়ে দেয়া হবে।আর ফ্রি লাইভ ক্লাসগুলো আপনি সহজেই ব্রেইনলুমের ফেসবুক পেইজে, ইউটিউবে পেয়ে যাবেন।",
    },
    {
        question: "কোর্স শেষ করার পর কি কোন ক্যারিয়ার গাইডলাইন পাওয়া যাবে?",
        answer:
            "অবশ্যই।আমাদের অ্যালামনাই গ্রুপ আছে, সেখানে কোর্স শেষে আপনাকে যুক্ত করা হবে।এখানে, আপনি নিয়মিত ফ্রিতে গুরুত্বপূর্ণ লাইভ ক্লাসে অংশ নিতে পারবেন যা আমরা কেবল আমাদের প্রিমিয়াম শিক্ষার্থীদের দিয়ে থাকি।",
    },
    {
        question: "বিদ্যাবাড়ি থেকে সরকারি চাকরির পরীক্ষার জন্য কি ১০০% প্রস্তুতি নেওয়া সম্ভব কিনা?",
        answer:
            "অবশ্যই সম্ভব।কেননা, আমরা চাকরীর সিলেবাসভিত্তিক কোর্সগুলো সম্পন্ন করিয়ে থাকি।আপনার চাকরীর প্রস্তুতি শতভাগ সম্পন্ন করতে যা পুরোপুরি সহায়ক হবে।",
    },
    {
        question: "",
        answer:
            "",
    },
    {
        question: "",
        answer:
            "",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className='px-2'>
            <motion.div

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.2 }}
                viewport={{ once: true }}
            >
                <h1 className='section_title'> Frequently asked questions (FAQ)</h1>
                {/* <h3 className='section_subtitle'>#Explore latest news and articles</h3> */}
                <div className="border-t border-gray-200 max-w-4xl mx-auto px-4 mt-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="dark:text-white text-black font-medium">{faq.question}</span>
                                <span className="text-gray-500">
                                    {openIndex === index ? "▴" : "▾"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="pb-4 text-gray-500 dark:text-gray-500 text-sm md:text-base">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>


        // <section className="">
        //     <h2 className="heading-title">
        //         Frequently Asked Questions
        //     </h2>


        // </section>
    );
}