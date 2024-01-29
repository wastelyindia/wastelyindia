import React from 'react'
import Logo from '../../assets/wastely_logo.png'
import integratedWater from '../../assets/images/integrated water.jpg'
import integratedWater1 from '../../assets/images/integrated water.png'
import integratedWater2 from '../../assets/images/integrated water1.png'
import integratedWaterbg from '../../assets/images/integrated-water-background.png'


const Integrated = () => {
  return (
    <>


      <section className=" container my-16 px-4 ">
        <div className="flex flex-col mb-8 md:flex-row items-center p-4 bg-white rounded-lg shadow-md min-h-screen">
          <img src={integratedWater1} alt="Integrated treatment processes" className="w-full md:w-1/2 h-76 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div className="flex-1 lg:px-16 xl:px-28">
            <h2 className="text-2xl font-semibold mb-2">Integrated Water Management
            </h2>
            <p className="text-lg">
              This takes the broadest perspective, considering the entire water cycle from source to use and disposal. It aims to optimize water use and minimize environmental impact by linking water supply, wastewater treatment, and stormwater management.    </p>
          </div>
        </div>
        <div className="flex flex-col mb-8 md:flex-row p-4 items-center bg-white rounded-lg shadow-md min-h-screen">
          <div className="flex-1 lg:px-16 xl:px-28 ">
            <h2 className="text-2xl font-semibold mb-2">Resource Recovery</h2>
            <p className="text-lg">
              This approach goes beyond simply treating wastewater to meet discharge standards. It focuses on recovering valuable resources from the wastewater, such as water itself for reuse, nutrients for fertilizer, and energy from biogas produced during treatment.      </p>
          </div>
          <img src={integratedWater} alt="Integrated treatment processes" className="w-full md:w-1/2 h-76 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
        </div>
        <div className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow-md min-h-screen">
          <img src={integratedWater2} alt="Integrated treatment processes" className="w-full md:w-1/2 h-76 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div className="flex-1 lg:px-16 xl:px-28">
            <h2 className="text-2xl font-semibold mb-2">Integrated Treatment Processes</h2>
            <p className="text-lg">
              This refers to wastewater treatment plants that use a combination of different technologies to remove pollutants from wastewater. This can include physical, chemical, and biological processes, often arranged in a series to progressively purify the water.    </p>
          </div>
        </div>

        {/* <section className="max-w-screen mx-auto relative">
          <div
            className="bg-cover min-h-[100vh] bg-center text-center overflow-hidden bg-fixed"
            style={{
              backgroundImage: `url(${integratedWaterbg})`,
            }}
            title=""
          ></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 px-4 bg-white rounded-lg shadow-md p-6">

            <div className="md:w-[100%] px-4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits of Integrated Water Systems</h2>
              <ul className="list-disc pl-8">
                <li className="text-lg mb-2 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3a2 2 0 110 4v7a2 2 0 0 11-4H9a2 2 0 0 0-2 4v7a2 2 0 0 11-4h2m5-6a2 2 0 100 4m0-4a2 2 0 110 4m0-4a2 2 0 0 0-2 4"></path></svg>
                  Reduced water scarcity: By recovering and reusing treated wastewater, we can prevent overreliance on freshwater sources.
                </li>
                <li className="text-lg mb-2 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m12-6V4a2 2 0 0 12-2h2a2 2 0 0 12 2v16a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8"></path></svg>
                  Improved environmental protection: Effective treatment minimizes pollution, safeguarding our waterways and ecosystems.
                </li>
                <li className="text-lg mb-2 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 2c7.5 8.456 13 17.107 13 25.707-5.414-6.537-12-12.843-17-18.718C5 7.797 2.5 2 2.5 2"></path></svg>
                  ♻️ Enhanced resource efficiency: Integrated approaches conserve energy, nutrients, and other valuable resources for sustainable use.
                </li>
                <li className="text-lg mb-2 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-1-4H8l-1 4v11h11z"></path></svg>
                  Increased resilience: Diversifying water sources and treatment options makes our systems more adaptable to challenges like climate change.
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        <section className="max-w-screen mx-auto relative">
  <div
    className="bg-cover min-h-[160vh] xs:min-h-[100vh] bg-center text-center overflow-hidden bg-fixed"
    style={{
      backgroundImage: `url(${integratedWaterbg})`,
    }}
    title=""
  ></div>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-1/2 px-4 bg-white rounded-lg shadow-md p-6">
    <div className="md:w-full">
      <h2 className="text-2xl font-semibold mb-4">Benefits of Integrated Water Systems</h2>
      <ul className="list-disc pl-8">
        <li className="text-lg mb-2 flex items-center">
          <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3a2 2 0 110 4v7a2 2 0 0 11-4H9a2 2 0 0 0-2 4v7a2 2 0 0 11-4h2m5-6a2 2 0 100 4m0-4a2 2 0 110 4m0-4a2 2 0 0 0-2 4"></path></svg>
          ⏳ Reduced water scarcity: By recovering and reusing treated wastewater, we can prevent overreliance on freshwater sources.
        </li>
        <li className="text-lg mb-2 flex items-center">
          <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m12-6V4a2 2 0 0 12-2h2a2 2 0 0 12 2v16a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8"></path></svg>
          ⛰️ Improved environmental protection: Effective treatment minimizes pollution, safeguarding our waterways and ecosystems.
        </li>
        <li className="text-lg mb-2 flex items-center">
          <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 2c7.5 8.456 13 17.107 13 25.707-5.414-6.537-12-12.843-17-18.718C5 7.797 2.5 2 2.5 2"></path></svg>
          ♻️ Enhanced resource efficiency: Integrated approaches conserve energy, nutrients, and other valuable resources for sustainable use.
        </li>
        <li className="text-lg mb-2 flex items-center">
          <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-1-4H8l-1 4v11h11z"></path></svg>
          ☀️ Increased resilience: Diversifying water sources and treatment options makes our systems more adaptable to challenges like climate change.
        </li>
      </ul>
    </div>
  </div>
</section>

      </section>

    </>
  )
}

export default Integrated