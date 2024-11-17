import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroComponent = () => {
  return (
    <div className=" bg-[#fff9ec]">
      <div className="container mx-auto w-full py-20">
        <div className="flex flex-col lg:flex-row justify-evenly gap-5 lg:gap items-center relative">
          {/* INTRODUCE */}
          <div className="flex relative flex-col items-center gap-4 w-full lg:items-start lg:w-[40%] mb-5">
            {/* GREETING */}
            <h1 className="text-[var(--dark-color)] text-xl font-medium uppercase m-[0,0,30px] tracking-[3px]">Hi, My name is EdQuinx</h1>
            {/* ROLES */}
            <div className='flex text-[2em] xl:text-[2.5em] 2xl:text-[3em] font-bold text-[--dark-color] relative'>
              <span>I'm a&nbsp;</span>
              <div className='relative'>
                <div className='absolute bottom-0 left-0 w-full bg-[#fec448] h-0.5' />
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    'Frontend Developer',
                    1500,
                    'Backend Developer',
                    1500,
                    'Game Developer',
                    1500
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </div>
            </div>
            {/* HOMETOWN */}
            <div className="">
              <span className='text-lg'>Based in Vung Tau City, Vietnam.</span>
            </div>
            {/* ABOUT ME BUTTON */}
            <div className="">
              <a href="/" className="mt-5 inline-block px-5 py-2 text-sm text-white uppercase font-[500] leading-[1.5] tracking-[2px] bg-[var(--primary-color)] border-2 border-[var(--primary-color)] transition-all ease-in-out duration-300 hover:bg-[var(--dark-color)] hover:border-[var(--dark-color)] shadow-contact-normal hover:shadow-contact-hover">About me</a>
            </div>
          </div>
          {/* AVATAR */}
          <div className="rounded-full border-2 border-[--dark-color] overflow-hidden w-[450px]">
            <img src="./avatar.jpg" alt="EdQuinx" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent