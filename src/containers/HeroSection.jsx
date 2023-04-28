import React from 'react'
import video from '../assets/video.mp4'
const HeroSection = () => {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute w-full z-[-1] h-screen scale-x-[-1]">
        <video src={video} alt="video" className="w-full h-full object-cover aspect-video" loop autoPlay={true}/>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection