import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
const AboutUs = () => {
  return (
    <div>
      <h1>this is our about-us page</h1>
      <Player
        autoplay
        loop
        src="Loading.json" // Replace with your animation URL
        style={{ height: '300px', width: '300px' }}
      />
      <Player
        autoplay
        loop
        src="Lottie.json" // Replace with your animation URL
        style={{ height: '300px', width: '300px' }}
      />
      <Player
        autoplay
        loop
        src="Lottie3.json" // Replace with your animation URL
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  )
}

export default AboutUs