import image from '../../assets/images/AquaHead.jpg'
import oxidation from '../../assets/images/AdvanceOxidation.jpg'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/AquaCultur.css';

// import required modules
import { Parallax, Navigation, Autoplay } from 'swiper/modules';

const AquaCulture = () => {
    return (
        <>
            {/* <header className="text-center mb-8">
        <img src={image} alt="Aquaculture Wastewater Treatment" className="w-full h-32 object-cover rounded-md" />
    </header> */}
            <div className="container">

                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    modules={[Parallax, Navigation, Autoplay]}
                    className="AquaSwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg "
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide className=' backdrop-brightness-50'>
                        <div className="title" data-swiper-parallax="-300">
                            Chemical Treatment
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Treatment methods
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Chemical methods involve the use of coagulants, flocculants, and other chemicals to precipitate or neutralize contaminants in the wastewater, making them easier to remove.            </p>
                                <br />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='backdrop-brightness-50'>
                        <div className="title" data-swiper-parallax="-300">
                            Biological Treatment
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Treatment methods
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Biological processes use microorganisms to break down organic matter in the wastewater. Techniques such as biofilters and constructed wetlands promote the growth of beneficial bacteria that consume pollutants.            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='backdrop-brightness-50'>
                        <div className="title" data-swiper-parallax="-300">
                            Mechanical Filtration
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Treatment methods
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                In this method, physical barriers like screens or filters are used to separate solid particles from the wastewater.            </p>
                                <br /><br />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <section className="mb-8 bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-2">Importance of Treatment</h2>
                    <p>Aquaculture wastewater treatment refers to the process of treating and purifying the water used in aquaculture systems, such as fish farms or shrimp ponds, to maintain a healthy and sustainable environment for aquatic organisms. In aquaculture operations, water quality is crucial for the well-being of the cultured species, as poor water quality can lead to diseases, reduced growth, and environmental degradation.</p>
                    <p>The treatment of aquaculture wastewater typically involves the removal or reduction of various pollutants, including organic matter, nutrients (such as nitrogen and phosphorus), suspended solids, and potentially harmful microorganisms. Common methods of aquaculture wastewater treatment include physical, chemical, and biological processes</p>
                </section>


                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="mb-8 bg-white px-12 py-8">
                        <h2 className="text-2xl font-semibold mb-4">The Importance of Treating Aquaculture Wastewater</h2>
                        <p className="leading-loose">Untreated aquaculture wastewater can have a detrimental impact on both the environment and fish health. Here's why treating this wastewater is crucial:</p>
                        <ul className="list-disc pl-4 mt-4">
                            <li className="mb-2"><b>Environmental protection:</b> Excess nutrients, organic matter, and antibiotics from untreated wastewater can pollute natural waterways, harming aquatic life and ecosystems, including promoting harmful algal blooms and oxygen depletion.</li>
                            <li className="mb-2"><b>Fish health and productivity:</b> Clean water is essential for maintaining good fish health, preventing disease outbreaks, and ensuring optimal growth and productivity.</li>
                            <li className="mb-2"><b>Resource efficiency:</b> Treating and reusing water reduces the need for freshwater intake, conserving this precious resource and minimizing environmental impact.</li>
                        </ul>
                    </div>

                    <div className="mb-8 bg-white px-12 py-8">
                        <h2 className="text-2xl font-semibold mb-4">Common Pollutants in Aquaculture Wastewater</h2>
                        <p className="leading-loose">Several pollutants can be found in aquaculture wastewater, each posing its own environmental and fish health risks:</p>
                        <ul className="list-disc pl-4 mt-4">
                            <li className="mb-2"><b>Nutrients:</b> Nitrogen and phosphorus from uneaten feed and fish waste can lead to eutrophication, promoting harmful algal blooms and oxygen depletion, disrupting the delicate balance of aquatic ecosystems.</li>
                            <li className="mb-2"><b>Organic matter:</b> Excess organic matter can decrease oxygen levels and create favorable conditions for the growth of harmful bacteria, posing a threat to fish health and water quality.</li>
                            <li className="mb-2"><b>Antibiotics and other chemicals:</b> Antibiotics used in aquaculture to control diseases can persist in the water and harm non-target organisms, disrupting the natural balance of the ecosystem and potentially creating antibiotic resistance.</li>
                        </ul>
                    </div>

                </section>


                <section className="container mx-auto px-4 py-8 rounded-lg shadow-md">
                    <div className=' bg-[#ffffff] py-12 px-12'>
                    <h2 className="text-3xl font-bold mb-6 text-center">The Future of Aquaculture Wastewater Treatment</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-8">
                            <p className="leading-loose">
                                The future of aquaculture wastewater treatment is filled with promising advancements. Research and development are actively exploring innovative and sustainable technologies to improve existing methods and tackle the challenges of treating this wastewater.
                            </p>
                            <ul className="list-disc pl-4 mt-4">
                                <li className="mb-2"><b>Advanced oxidation processes:</b> These methods utilize strong oxidants like ozone or UV light to break down pollutants and improve water quality.</li>
                                <li className="mb-2"><b>Membrane filtration:</b> This technology involves separating pollutants from water through semipermeable membranes, offering efficient and effective treatment.</li>
                                <li className="mb-2"><b>Algae-based systems:</b> Utilizing algae's natural ability to absorb nutrients and purify water, these systems present a sustainable and eco-friendly approach.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <img src={oxidation} alt="Aquaculture wastewater treatment technology" className="w-full rounded-lg " />
                        </div>
                    </div>

                    <p className="text-center font-semibold mb-4">
                        By embracing these advancements and adopting effective and sustainable wastewater treatment practices, the aquaculture industry can secure a bright future for itself, ensuring environmental protection, healthy fish and shellfish populations, and responsible resource management.
                    </p>

                    <p className="text-center text-gray-500 text-sm">
                        By implementing effective wastewater treatment practices, aquaculture farms can contribute to a healthier environment, sustainable fish production, and responsible resource management.
                    </p>
                    </div>
                </section>



            </div>

        </>
    )
}

export default AquaCulture