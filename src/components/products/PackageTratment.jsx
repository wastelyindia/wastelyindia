import React from 'react'
import packageImg from '../../assets/images/packageTreatment.WEBP'
import packageImage from '../../assets/images/packageTreatment.jpg'
import packageImage1 from '../../assets/images/package-treatment.jpg'
const PackageTratment = () => {
    return (
        <>
            <div className=" container">
                <section className='bg-white py-4 px-4 md:px-12'>
                    <h1 className=" text-[#11387f] text-5xl font-light text-center">Package treatment plants</h1>
                    <div className="flex-row md:flex justify-center items-center">
                        <div className=" flex-1">
                            <p className='text-base text-[#3c3c3c]'>A package treatment plant is a type of decentralized wastewater treatment system that is pre-engineered and assembled in a factory setting before being transported to the site for installation. These systems are often used in areas where centralized sewer systems are not practical or cost-effective</p>
                            <p className='text-base text-[#3c3c3c]'>Package treatment in wastewater treatment refers to compact and pre-engineered systems, often modular and easily transportable, designed for smaller communities, remote locations, or temporary needs, such as pre-fabricated facilities shipped to sites for installation with minimal disruption.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img src={packageImg} alt="" />
                        </div>
                    </div>
                </section>


                <section className=" bg-white mt-5 mx-auto sm:p-8">
                    <h2 className="text-3xl font-normal mb-4 heading_title">Advantages and Disadvantages of Package Treatment</h2>

                    <table className="min-w-full  border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Advantages</th>
                                <th className="py-2 px-4 border">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border">Lower Cost</td>
                                <td className="py-2 px-4 border">Package plants are typically less expensive to install and operate than traditional wastewater treatment plants.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Faster Installation</td>
                                <td className="py-2 px-4 border">Package plants can be installed quickly and easily, often with minimal disruption to the surrounding area.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Flexibility</td>
                                <td className="py-2 px-4 border">Package plants can be easily expanded or relocated as needed.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Ease of Operation</td>
                                <td className="py-2 px-4 border">Package plants are relatively easy to operate and maintain.</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Disadvantages</th>
                                <th className="py-2 px-4 border">Description</th>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Limited Capacity</td>
                                <td className="py-2 px-4 border">Package plants are not suitable for treating large volumes of wastewater.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Higher Operating Costs</td>
                                <td className="py-2 px-4 border">Package plants may have higher operating costs than traditional wastewater treatment plants, especially if they require frequent maintenance.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Potential for Environmental Impact</td>
                                <td className="py-2 px-4 border">If not properly operated and maintained, package treatment plants can have a negative impact on the environment.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            <section className='mb-8'>
                <h1 className='container  text-[#11387f] text-5xl font-normal text-center'>Technology Layout Design</h1>
                <div className="flex-row lg:flex bg-white">
                    <div className="flex1 border-b-4 lg:border-b-0 lg:border-r-4 flex-col">
                        <div className="flex-grow"></div> {/* Use flex-grow for spacing */}
                        <img src={packageImage} alt="" className="bottom-0" />
                    </div>
                    <div className="flex1">
                        <img src={packageImage1} alt="" />
                    </div>
                </div>
            </section>


        </>
    )
}

export default PackageTratment