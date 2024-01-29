import React from 'react'
import Pollution from '../../assets/images/Rejuvenation_Pollution.png'
import Habitat from '../../assets/images/Rejuvenation_Habitat.png'
import Invasive from '../../assets/images/Rejuvenation_Invasive.jpg'
import Sedimentation from '../../assets/images/Rejuvenation_Sedimentation.jpg'

const Rejuvenation = () => {
  return (
    <>
      <div className="container">
        <header className="p-4 text-center text-4xl font-bold">
          Rejuvenating Lakes, Ponds, and Rivers
        </header>

        <section className="container mx-auto px-8 py-8 lg:py-4 text-center">
          {/* <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Understanding the Challenges</h2> */}
          <div className="flex justify-center">
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-6/12">
          Restoring our vibrant lakes, rivers, and ponds is a cornerstone for healthy ecosystems, clean water, and thriving communities.  Protecting vital aquatic habitats ensures resilient nature and life-sustaining resources for all. ✨
          This revision condenses the information into a single sentence while emphasizing the importance and benefits of rejuvenation. The added line highlights the positive long-term impacts for both nature and communities.
          </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
              <img src={Pollution} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Pollution</h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                  A toxic cocktail of sewage, runoff, and waste chokes our waterways, suffocating life with algae blooms and toxic chemicals.                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
              <img src={Sedimentation} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Sediment</h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 md:font-normal">
                  Silting rivers and smothering lakes like a slow-moving thief, robbing them of depth and life-giving waters.
                </p>      </div>
            </div>
            <div className="relative flex flex-col bg-clip-border  bg-transparent text-gray-700 shadow-md md:relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
              <img src={Invasive} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Invasive Species & Water Scarcity</h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 md:font-normal">
                  A tightening grip on a dwindling resource, climate change and overuse conspire to parch our precious water bodies.
                </p>      </div>
            </div>
            <div className="relative flex flex-col bg-clip-border  bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
              <img src={Habitat} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Habitat Degradation</h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 md:font-normal">

                  Invasive species rip apart the intricate ecosystems, while dams and development tear at the fabric of life, leaving behind vulnerable fragments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 py-8 lg:py-4 text-center">
          <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Restoration Strategies</h2>
          <div className="flex justify-center">
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-6/12">
            The good news is that there's a wealth of restoration strategies available to bring these aquatic gems back to life! Here's a glimpse into some key approaches.
          </p>
          </div>


          <div className='pt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">🚯 Addressing Pollution</h3>
                <p>Reducing pollution sources and treating existing pollution to improve water quality.</p>
              </div>

              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">🌊 Sedimentation Control</h3>
                <p>De-silting and preventing erosion to enhance water depth and flow, restoring habitat.</p>
              </div>

              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">🌿 Invasive Species Management</h3>
                <p>Removal of invasive species and habitat restoration to protect native species.</p>
              </div>

              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">🏞️ Habitat Restoration</h3>
                <p>Planting native aquatic plants and creating diverse habitats for overall ecosystem health.</p>
              </div>

              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">🤝 Community Engagement</h3>
                <p>Public education, awareness, and community involvement to support restoration efforts.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">➕ Additional Strategies</h3>
                <p>Public education, awareness, and community involvement to support restoration efforts.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-10 px-4 text-center">
          <p className="text-lg font-semibold">Implementing bioremediation with microorganisms, artificial aeration for increased oxygen levels, and fish stocking with native species can further enhance water quality and restore ecological balance in lakes, ponds, and rivers.</p>
        </section>

      </div>






    </>
  )
}

export default Rejuvenation