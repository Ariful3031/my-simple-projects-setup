import React from 'react'
import BannerImage from '../../../../assets/e-learning-banner-design.avif'

const Banner = () => {
  return (
    <div>
        <img className='w-full object-cover lg:h-[500px]' src={BannerImage} alt="" />
    </div>
  )
}

export default Banner