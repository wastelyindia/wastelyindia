import React from 'react'
import sludge from '../../assets/images/sludge dewatering.jpeg'
import sludgeHero from '../../assets/images/sludge-dewatering-transformed.jpeg'
import Tilt from 'react-parallax-tilt';

const Sludge = () => {
    return (
        <>
            <div className="container mx-auto p-4 !pt-0">
                {/* <img src={sludgeHero} alt="" /> */}
                <div className="relative  bg-white">
                    <h1 className="text-4xl font-bold mb-4 text-center heading_title">Sludge Management Excellence</h1>

                    <img src={sludgeHero} alt="" className="w-full h-4/5" />
                    <p className="text-lg text-center py-4 ">Filter presses produce excellent cake dryness, making sludge management efficient and eco-friendly.</p>

                </div>

                <section className="py-10 relative">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-6 heading_title">Sludge Treatment</h2>
                        <div className="sm:float-right sm:w-2/4 md:w-2/5 lg:w-1/4 float-none">
                            <Tilt scale={0.9} transitionSpeed={2500}>
                                <img src={sludge} alt="" className="float-right rounded-lg" /></Tilt>
                        </div>
                        <p className="mb-4">
                            With the increase in volume of treated sewage, cities and municipalities across the globe are grappling with the issue of sludge management. Sludge is rich in organic matter; when treated properly, it becomes a resource rather than a liability. WASTELY’s proven technological know-how in sludge management allows the utilization of valuable biogas, which in turn serves as the energy source for an entire wastewater treatment plant thereby rendering it energy-neutral.
                        </p>
                        <p className="mb-4">
                            The savings that result from such a self-sustaining process are substantial both in terms of operational expenditure as well as in minimizing the carbon footprint of the wastewater treatment facility.
                        </p>
                        <p className="mb-4">
                            Sludge treatment is an integral part of efficient wastewater treatment. In addition, the anaerobic stabilization of sewage sludge secures an ecologically and economically advantageous supply of green energy through the use of the biogas produced. WASTELY is an expert for anaerobic sludge digestion systems and has installed more than 70 plants since 1995, producing &gt; 30 MW of green energy, thus saving costs and contributing to climate protection.
                        </p>
                        <p className="mb-4">
                            Among the success stories of WASTELY’s sludge management, two are scripted at Kodungaiyur in Chennai, India, and at Adana, Turkey. These plants have been time-tested benchmarks for sludge treatment over the years.
                        </p>
                    </div>
                </section>




                <div className="flex flex-col p-4">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                <h2 className="text-2xl font-bold my-4 heading_title text-center">Sludge Dewatering Benefits</h2>
                                <table className="min-w-full border divide-y divide-gray-200">
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Waste Volume Reduction:</td>
                                            <td className=' py-2 px-5'>Because sludge dewatering focuses on weight and volume reduction to minimize waste disposal costs, water removal is the principal means to reduce volume before the sludge by-product can be economically disposed of.</td>
                                        </tr>
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Reduced Transportation Costs:</td>
                                            <td className=' py-2 px-5'>Managing sludge can be a costly business. Dry, high solids cakes mean lower costs. Use of dewatering equipment is an effective tool for managing sludge accumulation, reducing both transportation costs and storage expenses.</td>
                                        </tr>
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Consistent Cake Dryness with Lower Risk of Spilling/Leaking:</td>
                                            <td className=' py-2 px-5'>Use of sludge dewatering filter presses produces consistent cake dryness. The dry, high solids cakes not only mean lower costs of transport but also provide a lower risk of spilling/leaking onto the roads. This is a major issue, particularly when trucking through residential areas.</td>
                                        </tr>
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Wastewater Recycling:</td>
                                            <td className=' py-2 px-5'>Recycling wastewater is another benefit of sludge dewatering. Once the treated water from sludge dewatering is free of hazards and contaminants, it can be reclaimed by industries and communities. Though the water is typically non-potable, it still has many applications. Steam powered plants are one good example of using reclaimed water to the benefit of a company or community.</td>
                                        </tr>
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Equipment is Easily Automated:</td>
                                            <td className=' py-2 px-5'>A lot of folks think of filter presses as labor-intensive pieces of equipment. But, in fact, sludge dewatering presses can come with automatic cloth washers, mechanically-assisted cake release, and sophisticated control systems, allowing communication to the main plant control system, all making sludge dewatering much easier.</td>
                                        </tr>
                                        <tr className="text-left">
                                            <td className="font-bold py-2 px-5">Eco-Friendly:</td>
                                            <td className=' py-2 px-5'>Finally, sludge dewatering is environmentally friendly in several ways, the first being reducing the volume of the waste to a more compact, manageable size for disposal. While the dry cakes are disposed of, the reuse of the filtrate can reduce the demand for new sources of water necessary for treatment in municipal and industrial wastewater plants, and also reduce the amount of water needed for treatment overall.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sludge