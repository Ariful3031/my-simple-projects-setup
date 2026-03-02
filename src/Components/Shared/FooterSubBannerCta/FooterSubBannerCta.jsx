
import React from 'react'
import { Link } from 'react-router'

const FooterSubBannerCta = ({ footerSubBannerCtaInfo }) => {
    console.log(footerSubBannerCtaInfo)
    // to={`${footerSubBannerCtaInfo?.buttonLInk}`} 
    return (
        <div className="py-8 md:py-20 text-center transition-colors duration-500 bg-indigo-500 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-black">
            <div className="px-2 md:px-6">
                <h2 className=" text-3xl md:text-4xl font-bold mb-4 md:mb-8text-white">
                    {footerSubBannerCtaInfo?.title}
                </h2>

                <Link
                    to={`${footerSubBannerCtaInfo?.buttonLink}`}
                    className=" px-8 py-3 font-semibold rounded-full shadow-lg  transition-all duration-300 bg-white text-indigo-600 hover:scale-105 hover:bg-gray-100 dark:bg-indigo-600 dark:text-white  dark:hover:bg-indigo-500"
                >
                    {footerSubBannerCtaInfo?.buttonName}
                </Link>

            </div>
        </div>
    )
}

export default FooterSubBannerCta