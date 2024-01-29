import React from 'react'
import floating from '../../assets/images/Floating-Wetlands.png'
import floating1 from '../../assets/images/Floating-wetland.jpg'
import floating2 from '../../assets/images/Floating-wetland.jpeg'

const Floating_Wetlands = () => {
    return (
        <>
            <div className="container">

                <section className='bg-white py-4 px-4 md:px-12'>
                    <h1 className=" text-[#11387f] text-5xl font-light text-center">Floating treatment plants</h1>
                    <div className="flex-row md:flex justify-center items-center">
                        <div className=" flex-1">
                            <p className='text-base text-[#3c3c3c]'>
                                Floating wetlands, also known as floating treatment wetlands (FTWs) or floating islands, are innovative and sustainable solutions used in wastewater treatment. These floating structures typically consist of vegetation planted on buoyant materials, such as floating mats or rafts, which are placed on the surface of water bodies like ponds or lagoon
                            </p>
                        </div>
                        <div className="flex-1">
                            <img src={floating} alt="" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-white rounded-lg shadow-md p-4 my-4 flex flex-col">
                        <h2 className="text-xl font-semibold mb-2"><svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-10-10C6.477 2 1 6.477 1 12c0 5.523 4.477 10 10 10z"></path></svg>
                        </h2>
                        <p>Here are some key points regarding floating wetlands in wastewater treatment
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2 5 5 2-2 6 6-2-2-5-5z" /></svg>
                                Phytoremediation</h2>
                            <p className="mb-4">Floating wetlands leverage the natural abilities of plants to absorb and filter pollutants from water. The plants' root systems provide a habitat for beneficial microorganisms, which contribute to the degradation of organic matter and the removal of nutrients and contaminants.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1 1 9.945 13.992c.309-4.867 3.07-7.822 6.914-7.822z" /></svg>
                                Nutrient Uptake</h2>
                            <p className="mb-4">The plants used in floating wetlands, such as cattails and bulrushes, absorb nutrients like nitrogen and phosphorus from the water. This can be particularly beneficial in treating wastewater with high nutrient concentrations, helping to mitigate issues like eutrophication.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /></svg>
                                Water Quality Improvement</h2>
                            <p className="mb-4">Floating wetlands can enhance water quality by reducing suspended solids, improving clarity, and lowering the concentrations of various pollutants. They contribute to the overall ecological balance of water bodies.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11v2h16v-2"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 17h4"></path></svg>
                                Aesthetic & Habitat Enhancement</h2>
                            <p className="mb-4">Beyond their functional role in wastewater treatment, floating wetlands can also enhance the aesthetic value of water bodies. Additionally, they provide habitat and support biodiversity by creating a niche environment for various aquatic organisms.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a2 2 0 002 2h14a2 2 0 002-2v-2M14 15h4"></path></svg>
                                Flexibility and Adaptability</h2>
                            <p className="mb-4">Floating wetlands are versatile and can be designed to fit different shapes and sizes of water bodies. They can be customized based on specific treatment needs and can be easily installed and maintained.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 flex">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Application in Stormwater Management</h2>
                            <p className="mb-4">In addition to wastewater treatment, floating wetlands are also utilized in stormwater management to reduce runoff, filter pollutants, and prevent soil erosion.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto p-8">
                        <div className="bg-cover min-h-[500px] bg-center text-center overflow-hidden bg-fixed"
                            style={{ backgroundImage: `url(${floating2})` }}
                            title="">
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 my-4 flex flex-col">
                            <h5 className='text-gray-500 font-medium text-sm text-left flex py-4'>
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-10-10C6.477 2 1 6.477 1 12c0 5.523 4.477 10 10 10z"></path></svg>
                                Floating Wetlands </h5>
                            <h2 className='text-[#11387f] text-5xl font-light Cd'>
                                A Greener Approach to Wastewater Treatment
                            </h2>
                            <div className="flex-row md:flex justify-center items-center">
                                <div className=" flex-1">
                                    <h2 className="text-xl font-semibold mb-2">
                                    </h2>
                                    <p className='text-base text-[#3c3c3c]'>
                                        Floating wetlands, also known as floating treatment wetlands (FTWs) or floating islands, are innovative and sustainable solutions used in wastewater treatment. These floating structures typically consist of vegetation planted on buoyant materials, such as floating mats or rafts, which are placed on the surface of water bodies like ponds or lagoon
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="mx-auto p-8 md:flex md:flex-row-reverse xl:flex-row md:flex-wrap">
                            <div className="md:w-1/2">
                                <img src={floating1} alt="Floating wetland installation"
                                    className="max-w-full h-auto object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="md:w-1/2 px-4 bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-semibold mb-4">Benefits of Floating Wetlands</h2>
                                <ul className="list-disc pl-8">
                                    <li className="text-lg md:flex xl:flex-col md:text-base xl:text-lg mb-2 list-none">
                                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        Cost-effective: Relatively inexpensive to install and maintain compared to traditional treatment plants.
                                    </li>
                                    <li className="text-lg md:flex xl:flex-col md:text-base xl:text-lg mb-2 list-none">
                                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        Sustainable: Uses natural processes and recycled materials, making them a great eco-friendly option.
                                    </li>
                                    <li className="text-lg md:flex xl:flex-col md:text-base xl:text-lg mb-2 list-none">
                                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 0l-.582-5H9"></path></svg>
                                        Versatile: Can treat a variety of wastewater types, from agricultural runoff to industrial wastewater.
                                    </li>
                                    <li className=" text-lg md:flex xl:flex-col md:text-base xl:text-lg mb-2 list-none">
                                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16"></path></svg>
                                        Habitat creation: Provides valuable habitat for fish, birds, and other wildlife.
                                    </li>
                                    <li className="text-lg md:flex xl:flex-col md:text-base xl:text-lg mb-2 list-none">
                                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10m-9 4h4"></path></svg>
                                        Aesthetically pleasing: Adds a touch of beauty to any body of water.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                        <p className="text-center text-gray-500 text-sm">
                            Overall, floating wetlands offer a green and effective way to treat wastewater. As research and development continue, we can expect to see even more widespread adoption of this innovative technology.
                        </p>

            </div>

        </>
    )
}

export default Floating_Wetlands