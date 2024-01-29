import HeroCard from '../common/HeroCard'
import WasteWater from '../../assets/images/wasteWaterSolution.jpg';

const WasteWaterTreatment = () => {
    return (
        <>
            <div className="container !pt-0">
                <HeroCard />

                <section className="mx-auto py-8 bg-white p-6 rounded shadow-md">
                    <h1 className="text-4xl text-[#00539b] font-bold mb-6">Wastewater Treatment</h1>
                    <p className="mb-6">
                        Managing wastewater in rapidly growing cities is a critical challenge impacting public health and overall productivity. WASTELY AQUA addresses this concern by championing sustainable wastewater treatment solutions, ensuring environmentally friendly discharge or reuse of treated wastewater.
                    </p>
                    <p className="mb-6">
                        Wastewater treatment is a crucial process, converting wastewater into an effluent suitable for return to the water cycle or direct reuse with minimal environmental impact. It involves the removal of contaminants and pollutants from domestic, industrial, and agricultural sewage.
                    </p>
                    <p className="mb-6">
                        WASTELY AQUA advocates a comprehensive wastewater treatment model, emphasizing resource recovery through innovative technologies. Our solutions range from highly effective pre-treatment to complete nutrient removal. Key technologies include single and dual-stage activated sludge processes, granular activated sludge with Nereda® technology, SBR (CYCLOPUR®) membrane bioreactor technology (MARAPUR®), biofiltration (BIOPUR®), and moving bed biological reactor and IFAS (FLUOPUR®).
                    </p>
                    <p className="mb-6">
                        With global references ensuring the treatment of around 30 million m3 of wastewater daily, WASTELY AQUA plays a crucial role in protecting both people and the environment.
                    </p>
                    <p className="mb-6">
                        Furthermore, WASTELY AQUA has been at the forefront of R&D efforts aimed at eliminating micro-pollutants for over a decade. We offer a comprehensive suite of technologies, including ozonation (BIOZONE®) and activated carbon adsorption (CARBOPUR®, PACOUR®), as well as their combination for effective results.
                    </p>
                    <p className="mb-6">
                        As a pioneer and market leader in Switzerland, WASTELY AQUA has successfully commissioned 7 WWTPs with a cumulative capacity of 150,000 m3/d. Currently, we have 11 WWTPs under construction, focused on the advanced removal of micro-pollutants.
                    </p>
                </section>

                <section className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-6 text-[#00539b]">Wastewater Treatment Solutions for a Sustainable Future</h1>
                        <p className="text-lg max-w-md mx-auto">
                            Ensuring cleaner water, healthier communities, and a more secure water future for all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold mb-4">Tackling Wastewater Challenges Head-On</h2>
                            <p className="mb-6">
                                As cities grow and populations surge, the effective management of wastewater becomes increasingly critical for safeguarding public health and promoting environmental sustainability. At Wastely Aqua, we're committed to providing innovative and sustainable wastewater treatment solutions that transform wastewater into a valuable resource.
                            </p>
                            <p className="mb-6">
                                Our comprehensive approach encompasses:
                                <ul className="pl-4 list-disc">
                                    <li>Resource recovery technologies to extract valuable resources from wastewater</li>
                                    <li>Advanced treatment processes for effective contaminant removal</li>
                                    <li>Expert consultation and support to guide optimal solution selection</li>
                                    <li>Customizable solutions tailored to diverse industries and needs</li>
                                </ul>
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Technology Portfolio</h2>
                            <p className="mb-6">
                                We offer a diverse range of cutting-edge technologies to address various wastewater treatment challenges:
                            </p>
                            <ul className="pl-4 list-disc">
                                <li>Advanced Activated Sludge Processes</li>
                                <li>Granular Activated Sludge with Nereda® Technology</li>
                                <li>SBR (Sequential Batch Reactor) - CYCLOPUR®</li>
                                <li>Membrane Bioreactor Technology (MARAPUR®)</li>
                                <li>Biofiltration - BIOPUR®</li>
                                <li>Moving Bed Biological Reactor and IFAS (FLUOPUR®)</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
                    <div className="bg-white p-6 rounded shadow-md">
                        <p className="mb-6">
                            <strong className='text-[#00539b] font-bold mb-6'>Wastewater Treatment Solutions
                            </strong > Facing challenges with wastewater management? Wastely Aqua provides innovative and sustainable solutions to ensure environmentally friendly discharge or reuse of treated wastewater, promoting a healthier environment and a more secure water future.
                        </p>
                        <p className="mb-6">
                            Our comprehensive approach includes:
                            <ul className="pl-4 list-disc">
                                <li>Effective wastewater treatment processes</li>
                                <li>Resource recovery technologies</li>
                                <li>Micro-pollutant removal expertise</li>
                                <li>Customized solutions for diverse industries</li>
                                <li>Expert consultation and support</li>
                            </ul>
                        </p>
                        {/* Additional content suggestions here */}
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <img src={WasteWater} alt="Wastewater Treatment Plant" className="w-full h-64 object-cover" />
                    </div>

                </section>

                <section className="mt-8">
                    <h3 className="text-3xl font-semibold mb-6 text-[#00539b]">Emerging Technologies</h3>
                    <p className="mb-4">
                        The future of wastewater treatment holds promise with innovative methods beyond traditional approaches. Here are two key examples:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded shadow-md p-6">
                            <h4 className="text-lg font-semibold mb-4">Algae-based Treatment</h4>
                            <p>
                                This method harnesses the power of algae to absorb nutrients and other contaminants from wastewater. The harvested algae can then be repurposed for biofuel production, animal feed, or even fertilizer, adding a valuable economic loop to the process.
                            </p>
                            {/* Add image component with "object-cover" class for responsive scaling */}
                        </div>
                        <div className="bg-white rounded shadow-md p-6">
                            <h4 className="text-lg font-semibold mb-4">Electrochemical Treatment</h4>
                            <p>
                                Electricity takes center stage in this emerging technology, directly breaking down contaminants in wastewater through controlled oxidation or reduction processes. This holds promise for efficient treatment of industrial wastewater, offering potential for reduced discharge of harmful pollutants.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-[#00539b]">Wastewater Treatment Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Traditional Methods</h3>
                            <ul className="list-disc space-y-4">
                                <li>
                                    <span className="font-bold">Physical:</span> Removes debris and solids through screening, sedimentation, and flotation.
                                </li>
                                <li>
                                    <span className="font-bold">Chemical:</span> Neutralizes or removes contaminants using chemicals like coagulation, flocculation, and precipitation.
                                </li>
                                <li>
                                    <span className="font-bold">Biological:</span> Utilizes microorganisms to break down organic contaminants (most common for municipal wastewater).
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Advanced Methods</h3>
                            <ul className="list-disc space-y-4">
                                <li>
                                    <span className="font-bold">Membrane Filtration:</span> Employs membranes to remove various contaminants, including bacteria, viruses, and pharmaceuticals.
                                </li>
                                <li>
                                    <span className="font-bold">Reverse Osmosis:</span> Applies pressure to purify water through a semipermeable membrane, leaving contaminants behind. Often used for producing high-quality drinking water from wastewater.
                                </li>
                                <li>
                                    <span className="font-bold">Ultraviolet Disinfection:</span> Kills bacteria and viruses using ultraviolet light.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4">
                    <section className="mt-8 bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6">Choosing the Right Solution for Your Wastewater Needs</h2>
                        <p className="text-lg mb-8">
                            Finding the optimal wastewater treatment solution isn&apos;t a one-size-fits-all process. It requires careful evaluation of several key factors to ensure long-term effectiveness and sustainability. Let's explore these factors together.
                        </p>
                        <ul className="list-disc pl-8 space-y-6">
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a.5.5 0 10.707.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.707-.708l-.707-.707z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg">Contamination type and volume</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg">Desired treatment level and discharge standards</span>
                            </li>

                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg">Available budget and potential economic benefits</span>
                            </li>

                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg">Energy efficiency and environmental impact</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 mr-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-6a8 8 0 1116 0 8 8 0 01-16 0zM7 9a1 1 0 012 0v6a1 1 0 11-2 0V9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg">Sustainability considerations</span>
                            </li>
                        </ul>
                        <p className="text-lg mt-6">
                            Not sure where to start? Our experts are here to guide you through the selection process and ensure the best solution for your specific needs.
                            <a href="/contact" className="text-blue-600 font-semibold">Contact us today for a free consultation.</a>
                        </p>
                    </section>
                </section>
            </div>
        </>
    )
}

export default WasteWaterTreatment