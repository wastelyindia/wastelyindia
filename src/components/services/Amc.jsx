import React from 'react'
import heroImage from "../../assets/images/Wastely_hero_4.jpeg";
import { FaCalendarAlt, FaChartLine, FaCogs, FaFlask, FaHardHat, FaLock, FaPeace, FaPhoneAlt, FaRegCalendarAlt, FaShieldAlt, FaTools, FaWrench } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Amc = () => {
  const Navigation = useNavigate()
  return (
    <>

      <div className="container">
        <section className="bg-cover bg-no-repeat h-screen flex items-center justify-center relative lg:px-32">
          <div className="max-w-xl px-4 md:px-8 lg:px-12 pt-16 pb-8 text-left lg:text-center">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Peace of Mind, Guaranteed.
              <br />
              Annual Maintenance Contracts, Simplified.
            </h1>
            <p className="mt-4 text-lg lg:mt-8 lg:text-xl">
              Keep your business equipment running smoothly and efficiently with our
              affordable and reliable Annual Maintenance Contracts.
            </p>
            <div className="mt-8 hidden lg:flex flex-wrap justify-center gap-4 lg:justify-start">
              <button
                onClick={() => Navigation('/contact')}
                className="inline-block rounded-lg px-5 py-3 font-semibold text-white bg-gray-800 shadow-md hover:bg-gray-700"
              >
                Get a Free Quote
              </button>
              <button
                className="inline-block rounded-lg px-5 py-3 font-semibold text-white bg-indigo-600 shadow-md hover:bg-indigo-700"
              >
                Explore Services
              </button>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Laptops and office equipment being serviced"
            className="absolute bottom-0 right-0 h-auto w-full lg:h-full lg:w-1/2 object-cover opacity-35"
          />
        </section>

        <section className="bg-gray-100 px-6 py-10 md:px-12 lg:px-20 xl:px-40 ">
          <h2 className="text-2xl font-bold text-center text-indigo-500 mb-8">What is an Annual Maintenance Contract (AMC)?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                An Annual Maintenance Contract (AMC) is a service agreement between your business and a maintenance provider. It ensures the smooth operation and longevity of your essential equipment, typically including laptops, desktops, smartphones, and other electronic devices.
              </p>
              <ul className="list-disc space-y-2 text-gray-600">
                <li>Regular maintenance &amp; repairs at a fixed cost.</li>
                <li>Reduced downtime and improved equipment lifespan.</li>
                <li>Expert technicians for professional service.</li>
                <li>Peace of mind and focus on your core business.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <img src={heroImage} alt="AMC illustration" className="rounded-lg shadow-md w-full max-h-56 md:max-h-80" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond traditional offices, AMCs also play a crucial role in water treatment plants. With an AMC for your water treatment equipment, you benefit from:</p>
              <ul className="list-disc space-y-2 text-gray-600">
                <li>Preventative maintenance for optimal performance.</li>
                <li>Extended equipment life and reduced downtime.</li>
                <li>Reliable water quality and compliance assurance.</li>
                <li>Expert support and peace of mind.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="py-5 md:py-7 lg:py-14 relative z-40 ">
          <section className="bg-white rounded-lg shadow-md px-6 py-10 md:px-12 lg:px-20">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Benefits of an AMC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
              <div className="flex flex-col items-center space-y-4 shadow-md py-4">
                <div className="text-4xl font-bold text-indigo-600 rounded-full bg-gray-200 p-4 shadow-lg">
                  <FaWrench className=" text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Reduced downtime &amp; repair costs</h3>
                <p className="text-gray-600 text-sm">Catch small issues before they become big problems.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 shadow-md py-4">
                <div className="text-4xl font-bold text-indigo-600 rounded-full bg-gray-200 p-4 shadow-lg">
                  <FaChartLine className=" text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Improved efficiency &amp; performance</h3>
                <p className="text-gray-600 text-sm">Maximize treatment capacity and minimize energy consumption.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 shadow-md py-4">
                <div className="text-4xl font-bold text-indigo-600 rounded-full bg-gray-200 p-4 shadow-lg">
                  <FaShieldAlt className=" text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Enhanced regulatory compliance</h3>
                <p className="text-gray-600 text-sm">Stay on top of environmental regulations.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 shadow-md py-4">
                <div className="text-4xl font-bold text-indigo-600 rounded-full bg-gray-200 p-4 shadow-lg">
                  <FaCogs />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Longer equipment life</h3>
                <p className="text-gray-600 text-sm">Regular maintenance extends equipment lifespan, saving you on costly replacements.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 shadow-md py-4">
                <div className="text-4xl font-bold text-indigo-600 rounded-full bg-gray-200 p-4 shadow-lg">
                  <FaPeace className=" text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Peace of mind</h3>
                <p className="text-gray-600 text-sm">Focus on your business, leave the plant to us.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-200 rounded-lg shadow-md px-6 py-10 md:px-12 lg:px-20">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What's Included in an AMC?</h2>
            <div className="space-y-4">
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <FaCalendarAlt className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Scheduled preventive maintenance, including monthly inspections (STP, ETP, WTP)
                  </span>
                </li>
                <li className="flex items-center">
                  <FaFlask className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Chemical dosing by trained operators
                  </span>
                </li>
                <li className="flex items-center">
                  <FaTools className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Comprehensive preventative maintenance programs with parts and labor coverage for repairs
                  </span>
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Plant safety checks and compliance adherence
                  </span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Performance monitoring and reporting, including utility consumption reporting (electricity, chemicals)
                  </span>
                </li>
                <li className="flex items-center">
                  <FaLock className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Equipment and chemical security on-site
                  </span>
                </li>
                <li className="flex items-center">
                  <FaHardHat className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">
                    Workplace safety maintenance and monitoring
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">24/7 emergency call-out service</span>
                </li>
                <li className="flex items-center">
                  <FaRegCalendarAlt className="mr-3 text-indigo-600" />
                  <span className="text-lg font-medium text-gray-800">Chemical supply and management (optional)</span>
                </li>
              </ul>
            </div>

          </section>
        </div>
      </div>



    </>
  )
}

export default Amc