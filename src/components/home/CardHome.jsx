import React from 'react'
import cardImg from "../../assets/images/Wastely_hero_6.jpeg";
import { FaRecycle, FaTintSlash } from 'react-icons/fa';

const CardHome = () => {
    return (
        <>
            <div className="container">
                <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:my-12 xl:max-w-6xl">
                    <div className="w-full h-64 lg:w-1/2 md:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src={cardImg} // Replace with your wastewater treatment image
                            alt="Wastewater treatment plant"
                        />
                    </div>

                    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                        <div className="flex flex-col p-12 md:px-16">
                            <h2 className="text-2xl font-medium uppercase text-blue-800 lg:text-4xl">
                                Ensuring Clean Water for a Healthier World
                            </h2>
                            <p className="mt-4">
                                <FaTintSlash className="text-2xl text-blue-500 mr-2" />
                                Treating wastewater is essential for protecting our communities and ecosystems.
                            </p>
                            <p className="mt-4">
                                <FaRecycle className="text-2xl text-blue-500 mr-2" />
                                We transform wastewater into a valuable resource, promoting sustainability and water security.
                            </p>
                            <div className="mt-8">
                                {/* <Link up for our newsletter
                                    to="#"
                                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-blue-800 hover:shadow-md md:w-48"
                                >
                                    Learn More
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardHome