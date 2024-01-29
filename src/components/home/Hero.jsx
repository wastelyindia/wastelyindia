import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import video from '../../assets/video/wastely_water.mp4'
//import w_video from '../../assets/video/wastely water.mp4'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Hero() {


  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video className="min-w-full min-h-full absolute object-cover"
            // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            src={video}
            type="video/mp4" autoPlay muted loop></video>
        </div>
        <div className="video-content space-y-2 z-10">
          <h1 className="font-light text-6xl md:text-9xl my-10">Wastely Aqua</h1>
          <h3 className="font-light text-3xl">Water & WasteWater Reclaimation</h3>
        </div>
      </section>
{/* 
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-full h-[22rem] max-w-[60rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <video className=" min-h-full absolute object-cover"src={w_video} type="video/mp4" controls ></video>
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Lyft launching cross-platform service this week
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part of
              the story
            </p>
          </div>
        </div>
      </div> */}


     
    </>
  )
}
