import React from 'react'
import video from "../../assets/video1.mp4";
import arrow from '../../assets/arrow.png'
import video2 from '../../assets/video1.webp'
const HeroAbout = () => {
  return (
        <section className="h-full font-secondary w-screen min-h-screen max-w-screen-2xl mx-auto relative bg-black flex items-center justify-center">
          <div className="absolute w-screen min-h-screen h-full scale-x-[-1] will-change-transform translate-x-0 translate-y-0 translate-z-0">
            <video
              src={video}
              alt="video"
              className="w-full h-full object-cover aspect-video"
              muted
              loop
              autoPlay
              playsInline
              placeholder={video2}
              controls=""
            />
          </div>
          <div className="flex items-center justify-center z-[1] w-screen h-full">
            <div className="flex items-center justify-center w-full h-full py-8 px-4 xs:px-8 s:px-12 md:px-16">
              <div className="flex items-center justify-center w-full pt-24 h-full">
                <div className="flex items-center justify-center w-full pt-6 xs:pt-8 s:pt-12 md:pt-16 lg:pt-24 xl:pt-32 h-full flex-col gap-6">
                  <div className="flex items-start w-full justify-end flex-col flex-1 h-full">
                    <h1 className="text-4xl xs:text-5xl s:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-white  font-bold">We Build Radical
                    
                      Climate Solutions 
                    </h1>
                  </div>
                  <div className="flex items-end w-full justify-start">
                    <div className="w-[90%] lg:w-[50%] flex items-end justify-start">
                      {" "}
                      <p className="text-[#9c9c9c] text-sm xs:text-base s:text-lg sm:text-xl">
                        Marble is a climate tech venture studio. Our mission: bring us at least one gigaton 
                        
                        closer to net zero and create a future that thrives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end w-full">
                      
                      <div className="flex items-center justify-center rounded-full">
                          <button className="bg-[#f9f9f9] text-black p-2 w-full h-full rounded-full font-bold flex items-center justify-center">
                            <div className="flex items-center w-8 h-8 rounded-full p-2 justify-center">
                             <img src={arrow} alt="arrow" className="w-full h-full object-cover"/>
                            </div>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  
}

export default HeroAbout