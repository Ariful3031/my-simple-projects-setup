import React from 'react'

const HeroSubBanner = ({ subBannerData }) => {
    return (

        <div className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {subBannerData?.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    {subBannerData?.description}
                </p>
            </div>
        </div>


    )
}

export default HeroSubBanner