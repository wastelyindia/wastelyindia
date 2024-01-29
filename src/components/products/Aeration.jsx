import React from 'react'
// import AerationVideo from '../../assets/video/Aeration.mp4'
import AerationImg from '../../assets/images/Aeration.jpg'
import oxygination from '../../assets/images/oxygination.jpeg'

const Aeration = () => {
  return (
    <>

      <section className=" container mx-auto p-4 !pt-0">
        <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center overflow-hidden overflow-y-auto   bg-fixed" style={{ backgroundImage: `url(${AerationImg})` }}>
          <div className="flex flex-col items-center justify-center gap-x-10 md:gap-x-20 backdrop-brightness-50 md:px-4">
            <div className=" max-w-72 md:max-w-[54rem] mt-40 md:mt-4">
              <h2 className="text-xl font-bold mb-4 text-white">Aeration & Types</h2>
              <p className='text-white'>Aeration is the process of circulating air through a liquid to remove dissolved gases and oxidize metals. It's crucial in drinking water treatment and the activated sludge process for wastewater treatment, fostering microbial growth.</p>
            </div>
          </div>

          <div className="backdrop-brightness-50">
            <h2 className="text-2xl font-bold mb-4 text-white text-center"></h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className=" text-white p-4 rounded-md max-w-72 text-center">
                  <div className="font-bold mb-2">Fine Bubble Diffusers</div>
                  <p>Submersible systems with energy-efficient fine bubbles for optimal air-water contact.</p>
                </div>
                <div className=" text-white p-4 rounded-md max-w-72 text-center">
                  <div className="font-bold mb-2">Coarse Bubble Diffusers</div>
                  <p>Produce larger bubbles suitable for conventional aeration, sludge storage, and aerobic digesters.</p>
                </div>
                <div className=" text-white p-4 rounded-md max-w-72 text-center">
                  <div className="font-bold mb-2">Surface Aeration</div>
                  <p>Ideal for shallow water applications, rapidly introducing large amounts of oxygen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white mt-8 rounded-md">
          <table className="table-auto px-4 w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-300">Title</th>
                <th className="p-4 border-b border-l border-slate-300">Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Objectives of Aeration */}
              <tr>
                <th className="p-4 border-b border-gray-300">Objectives of Aeration</th>
                <td className="p-4 border-b  border-l border-gray-300">In wastewater treatment, aeration aims to remove carbon dioxide, oxidize soluble iron and manganese, reduce ammonia, hydrogen sulfide, and control bacteria.</td>
              </tr>

              {/* Industrial Application */}
              <tr>
                <th className="p-4 border-b border-gray-300">Industrial Application</th>
                <td className="p-4 border-b  border-l border-gray-300">In industrial water conditioning, aeration's major goal is to remove carbon dioxide.</td>
              </tr>

              {/* Types in Brief */}
              <tr>
                <th className="p-4 border-b border-gray-300">Types</th>
                <td className="p-4 border-b  border-l border-gray-300">
                  <ul className="list-disc ml-8">
                    <li><span className="font-semibold">Fine Bubble Diffusers:</span> Efficient submersible systems.</li>
                    <li><span className="font-semibold">Coarse Bubble Diffusers:</span> Effective for various applications.</li>
                    <li><span className="font-semibold">Surface Aeration:</span> Rapid oxygen addition in shallow waters.</li>
                  </ul>
                </td>
              </tr>

              {/* Aeration in Wastewater Treatment */}
              <tr>
                <th className="p-4 border-b border-gray-300">Aeration in Wastewater Treatment</th>
                <td className="p-4 border-b  border-l border-gray-300">
                  {/* Activated Sludge Process */}
                  <table className="table-fixed w-full border-b border-gray-300">
                    <tbody>
                      <tr className=' border-gray-300'>
                        <td className='p-4 font-semibold'>Activated Sludge Process:</td>
                        <td className='p-4 border-l border-gray-300'>Utilized in secondary treatment, microbes in activated sludge feed on organic material, forming flocks that settle out. Recirculation enhances decomposition rates.</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Water-fall aeration and Air diffusion */}
                  <table className="table-fixed w-full">
                    <tbody>
                      <tr className=''>
                        <td className='p-4 font-semibold'>Water-fall aeration:</td>
                        <td className='p-4 border-l border-gray-300' >Utilizes spray nozzles.</td>
                      </tr>
                      <tr className=''>
                        <td className='p-4 font-semibold'>Air diffusion:</td>
                        <td className='p-4 border-l border-gray-300'>Air is diffused into counter-current flowing water.</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </section>
      <section className="container mx-auto mt-6 p-4">
        <h1 className="text-2xl font-bold heading_title text-center">Diffused Air vs. Mechanical Aeration Systems Overview</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Diffused Aeration Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pros-cons bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">Pros:</h3>
              <ul className="list-disc ml-8">
                <li>Complete mixing from bottom to top.</li>
                <li>Suitable for deeper tanks.</li>
                <li>Higher oxygen transfer efficiency.</li>
                <li>Low environmental impact.</li>
                <li>Low maintenance.</li>
                <li>Flexible design.</li>
                <li>Lower long-term costs.</li>
                <li>Reliable in extreme weather.</li>
                <li>Safe with onshore motors.</li>
              </ul>
            </div>
            <div className="pros-cons bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">Cons:</h3>
              <ul className="list-disc ml-8">
                <li>Greater complexity.</li>
                <li>Higher initial cost.</li>
                <li>Susceptible to fouling.</li>
                <li>Less effective in very shallow tanks.</li>
                <li>Less effective in harsh environments.</li>
                <li>Not portable.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Mechanical Aeration Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pros-cons bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">Pros:</h3>
              <ul className="list-disc ml-8">
                <li>Strong localized mixing.</li>
                <li>Simplicity and lower capital costs.</li>
                <li>Greater efficacy in shallow tanks.</li>
                <li>Greater efficacy in harsh environments.</li>
                <li>Portability.</li>
              </ul>
            </div>
            <div className="pros-cons bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">Cons:</h3>
              <ul className="list-disc ml-8">
                <li>Localized mixing, less efficient throughout.</li>
                <li>Lower aeration efficiency.</li>
                <li>More difficult blower management.</li>
                <li>Higher energy demands.</li>
                <li>More maintenance requirements.</li>
                <li>Higher operational costs.</li>
                <li>Poor harsh-weather performance.</li>
                <li>Unpleasant odors.</li>
                <li>Less efficacy for very deep tanks.</li>
                <li>Less safety with electrical wires in wastewater.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>



      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold ">Oxygenation in Wastewater Treatment</h1>
      </header>

      <section className="container mx-auto mt-0 p-4">

        <section className="mb-8 flex flex-col lg:flex-row p-8 bg-white rounded-lg shadow-md">
          <img src={oxygination} alt="Image of wastewater treatment with oxygenation" className="w-full lg:w-1/3 h-fit  object-cover rounded-lg  md:left-0 mt-8 " />
          <div className="flex-1 mb-4 md:mb-0 p-4">
            <p className="mb-4">Wastewater treatment has evolved over the years, and professionals seek innovative solutions for more reliable and efficient processes. Oxygenation emerges as a pure environmental aid, offering a holistic approach to enhance treatment plants.</p>
            <h2 className="text-3xl font-bold mb-4 text-center  heading_title">Why is oxygen important</h2>
            <p>
              <span className="font-semibold">Microbial activity:</span> Wastewater treatment relies on microorganisms to break down organic matter and pollutants.
              These microbes, mostly bacteria, need oxygen to survive and thrive. Without sufficient oxygen, they can't do their job effectively, leading to incomplete treatment and potential environmental harm.
            </p>
            <p>
              <span className="font-semibold">Treatment processes:</span> Oxygenation plays a vital role in various wastewater treatment processes, particularly in the secondary treatment stage known as the activated sludge process. In this stage, oxygen is bubbled into the wastewater to maintain a healthy population of bacteria in the "activated sludge." These bacteria consume organic matter and pollutants, converting them into harmless byproducts like water and carbon dioxide.
            </p>
          </div>

        </section>


        <div className="container">
          <h2 className="text-2xl font-bold text-center heading_title">How is Oxygen Added</h2>
          <p className='text-center py-4'>Adding oxygen is crucial for biological wastewater treatment as it fuels the microorganisms that break down organic matter. Here are some common methods:</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white py-4 px-4">
              <h3 className="text-xl font-bold text-center">Mechanical Aeration</h3>
              <p>The most common method, using diffusers or mixers to create bubbles and increase oxygen levels, similar to how a whisker aerates milk.</p>
            </div>
            <div className="flex-1 p-4 bg-white">
              <h3 className="text-xl font-bold text-center">Pure Oxygen Injection</h3>
              <p>More efficient than air aeration, this method pumps pure oxygen directly into the water, providing higher oxygen concentrations but at a higher cost.</p>
            </div>
            <div className="flex-1 p-4 bg-white">
              <h3 className="text-xl font-bold text-center">Membrane Aeration</h3>
              <p>Fine membranes allow oxygen diffusion from air into the wastewater, offering energy efficiency and suitability for smaller treatment plants.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-center heading_title">Benefits of Proper Oxygenation</h2>
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Benefit</th>
                <th className="py-2 px-4 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Improved Treatment Efficiency</td>
                <td className="py-2 px-4 border-b">Adequate oxygen levels ensure optimal activity of the bacteria, leading to more efficient breakdown of pollutants and clearer treated wastewater.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Reduced Odor</td>
                <td className="py-2 px-4 border-b">Anaerobic decomposition, which occurs in the absence of oxygen, produces foul-smelling gases like hydrogen sulfide. Proper oxygenation prevents these odors and makes the treatment process more pleasant.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Enhanced Sludge Settling</td>
                <td className="py-2 px-4 border-b">Good oxygenation promotes healthy bacterial growth, resulting in larger and denser flocs (clumps of bacteria). These flocs settle more readily, simplifying the solids separation process in the treatment plant.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Environmental Protection</td>
                <td className="py-2 px-4 border-b">Effective wastewater treatment with proper oxygenation safeguards receiving waters from harmful pollutants, protecting aquatic ecosystems and public health.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Nutrient removal:</td>
                <td className="py-2 px-4 border-b">Some bacteria can remove nitrogen and phosphorus from wastewater, which are important pollutants that can contribute to harmful algal blooms. Oxygen is essential for these specialized bacteria to do their job.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Aeration