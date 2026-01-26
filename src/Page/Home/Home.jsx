import React from 'react'
import BookingCard from '../../Components/Home/BookingCard'
import Test from '../../Components/Home/Color'
import Color from '../../Components/Home/Color'
import GradientColor from '../../Components/Home/GradientColor'
import ThreeColorGradient from '../../Components/Home/ThreeColorGradient'

const Home = () => {
  return (
    <div className='min-h-[75vh]'>

      <p>3 color Gradient</p>
      <ThreeColorGradient></ThreeColorGradient>
      <p>2 color Gradient</p>
      <GradientColor></GradientColor>
      <p>3 color Gradient</p>
      <BookingCard></BookingCard>
      <Color></Color>


    </div>
  )
}

export default Home