
import React from 'react'
import { Link } from 'react-router'

const FooterSubBannerCta = ({footerSubBannerCtaInfo}) => {
    console.log(footerSubBannerCtaInfo)
    // to={`${footerSubBannerCtaInfo?.buttonLInk}`} 
    return (
        <div className=" py-8 md:py-20 bg-indigo-600 text-white text-center">
            <div className=" px-2 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">
                    {footerSubBannerCtaInfo?.title}
                </h2>
                <Link  to={`${footerSubBannerCtaInfo?.buttonLink}`} className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition">
                    {footerSubBannerCtaInfo?.buttonName}
                </Link>
            </div>
        </div>
    )
}

export default FooterSubBannerCta