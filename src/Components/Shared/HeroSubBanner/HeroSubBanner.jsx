import React from 'react'

const HeroSubBanner = ({ subBannerData }) => {
    return (
        <div className="">

            {
                subBannerData?.subBannerImage ? (

                    <div className="py-52 text-white text-center bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${subBannerData?.subBannerImage})`,
                            // backgroundImage: "url('/banner.jpg')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}

                        <div className="relative max-w-4xl mx-auto px-6">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {subBannerData?.title}
                            </h1>
                            <p className="text-lg md:text-xl opacity-90">
                                {subBannerData?.description}
                            </p>
                        </div>
                    </div>
                ) : (

                    <div className=" py-20 text-center text-white bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-900 dark:via-purple-900 dark:to-black transition-colors duration-500">
                        <div className="max-w-4xl mx-auto px-6">
                            <h1 className=" text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-whit">
                                {subBannerData?.title}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                                {subBannerData?.description}
                            </p>
                        </div>
                    </div>
                )
            }







        </div>


    )
}

export default HeroSubBanner