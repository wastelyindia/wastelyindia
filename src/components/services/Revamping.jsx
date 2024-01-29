import React from 'react'
import { FaCog,  FaListAlt, FaDollarSign, FaCheck } from "react-icons/fa";
import revamping from '../../assets/images/revamping.jpeg'
import revampingAerial from '../../assets/images/revamping.jpg'

const Revamping = () => {
  return (
    <>
      <section className="bg-gray-100 px-4 py-16 lg:px-8 flex flex-col items-center space-y-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Revamping & Retrofitting: Breathe New Life into Wastewater Treatment
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="border rounded-lg px-6 py-8 shadow-md text-center">
            <FaCog className="text-6xl text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Revamp or Retrofit?</h2>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>
                Meet stricter discharge standards <FaCheck className="inline-block ml-2 text-teal-500" />
              </li>
              <li>
                Increase treatment capacity for growing populations <FaCheck className="inline-block ml-2 text-teal-500" />
              </li>
              <li>
                Boost efficiency with newer technologies <FaCheck className="inline-block ml-2 text-teal-500" />
              </li>
              <li>
                Address aging infrastructure and process inefficiencies <FaCheck className="inline-block ml-2 text-teal-500" />
              </li>
            </ul>
          </div>
          <img
          src={revamping}
            alt="Wastewater treatment plant with aeration tanks and equipment"
            className="rounded-lg shadow-md min-h-64 mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Exploring the Options: Revamp vs. Retrofit</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Revamping entails a comprehensive overhaul, while retrofitting focuses on targeted improvements. Choose the approach that best aligns with your needs and budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg px-6 py-4 shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Revamping</h3>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>Major infrastructure upgrades (tanks, pipes, etc.)</li>
              <li>Process changes for enhanced treatment</li>
              <li>Integration of new advanced technologies</li>
              <li>Suitable for significant capacity or efficiency improvements</li>
            </ul>
          </div>
          <div className="border rounded-lg px-6 py-4 shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Retrofitting</h3>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>Adding or replacing specific components (pumps, membranes, etc.)</li>
              <li>Targeted upgrades for specific aspects (nitrification, disinfection)</li>
              <li>Cost-effective solution for addressing specific issues</li>
              <li>Less downtime compared to large-scale revamping</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4" ></h2>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Charting the Course: Planning & Implementation</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Successful revamping and retrofitting hinge on meticulous planning and expert execution. Here are key steps to consider:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="border rounded-lg px-6 py-4 shadow-md text-center">
            <FaListAlt className="text-6xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thorough Evaluation</h3>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>Assess existing plant's capacity, performance, and limitations.</li>
              <li>Analyze influent characteristics and effluent discharge requirements.</li>
              <li>Evaluate potential technology options and their suitability.</li>
            </ul>
          </div>
          <div className="border rounded-lg px-6 py-4 shadow-md text-center">
            <FaDollarSign className="text-6xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Considerations</h3>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>Conduct detailed cost-benefit analysis of different options.</li>
              <li>Factor in capital expenditure, operational costs, and potential savings.</li>
              <li>Secure funding and allocate resources for project execution.</li>
            </ul>
          </div>
          <div className="border rounded-lg px-6 py-4 shadow-md text-center">
            <FaCog className="text-6xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementation & Operation</h3>
            <ul className="list-disc pl-4 text-gray-600 leading-relaxed">
              <li>Engage experienced engineers and skilled personnel for execution.</li>
              <li>Develop detailed construction plans and timelines.</li>
              <li>Ensure smooth integration of new technologies and training for operators.</li>
              <li>Monitor performance and optimize operations after project completion.</li>
            </ul>
          </div>
        </div>
        <img
        src={revampingAerial}
          alt="Aerial view of a wastewater treatment plant with upgraded infrastructure"
          className="rounded-lg shadow-md mt-10 lg:hidden" />

      </section>
    </>
  )
}

export default Revamping