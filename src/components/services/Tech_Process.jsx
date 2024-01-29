import pump from '../../assets/images/tech-process.jpeg'
import { FaBacteria, FaCloud, FaFilter, FaRecycle, FaShieldAlt } from 'react-icons/fa'
import { IoWater } from "react-icons/io5";

const Tech_Process = () => {
  return (
    <>
      <section className="container max-w-screen mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center heading_title"> How Wastewater Gets Treated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={pump} alt="Wastewater treatment plant" className="w-full max-h-[500px] rounded-lg mb-4 shadow-md md:h-auto" />
            <h3 className="text-2xl font-medium mb-2">From Drain to Clean</h3>
            <p className="text-lg leading-relaxed text-gray-700">Every time you turn on the tap, the water has gone through a journey. Today, we explore the amazing science behind wastewater treatment, ensuring clean water for our communities and environment.</p>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
              <FaFilter className="text-teal-500 text-5xl sm:text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Screening</h4>
                <p className="text-sm text-gray-700">The first step involves the removal of large objects such as sticks, leaves, and plastics.</p>
                <p className="font-semibold">Purpose:</p>
                <p>Prevents damage to downstream equipment and facilitates subsequent treatment processes.</p>

              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
              <FaCloud className="text-teal-500 text-5xl sm:text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Primary Treatment</h4>
                <p className="text-sm text-gray-700">Involves the physical separation of solid and liquid components through settling and sedimentation.</p>
                <p className="font-semibold">Purpose:</p>
                <p>Removes a significant portion of suspended solids and some organic matter.</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
              <FaBacteria className="text-teal-500 text-5xl sm:text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Secondary Treatment</h4>
                <p className="text-sm text-gray-700">Biological processes where microorganisms break down organic pollutants in the wastewater.</p>
                <p className="font-semibold">Purpose:</p>
                <p>Further reduces organic matter and helps in the removal of dissolved and suspended contaminants.</p>

              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-medium my-4">More Steps for Extra Cleanliness</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg shadow-md p-4 flex ">
            <IoWater className="text-teal-500 text-5xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Tertiary Treatment</h4>
              <p className="text-sm text-gray-700">Additional treatment to further purify the water by removing remaining contaminants.</p>
              <p className="font-semibold">Methods:</p>
              <p>Filtration, chemical treatment, and advanced oxidation processes.</p>
              <p className="font-semibold">Purpose:</p>
              <p>Achieve higher water quality standards for specific applications or environmental discharge.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
            <FaShieldAlt className="text-teal-500 text-5xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Disinfection</h4>
              <p className="text-sm text-gray-700">Killing or inactivating pathogenic microorganisms to ensure the water is safe for discharge or reuse.</p>
              <p className="font-semibold">Methods:</p>
              <p>Chlorination, ultraviolet (UV) disinfection, ozonation.</p>
              <p className="font-semibold">Purpose:</p>
              <p>Prevent the spread of waterborne diseases.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
            <FaRecycle  className="text-teal-500 text-5xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Sludge Treatment</h4>
              <p className="text-sm text-gray-700">Handling and treatment of the solid residue (sludge) generated during the treatment process.</p>
              <p className="font-semibold">Purpose:</p>
              <p>Ensure proper handling and disposal of solid residues, promoting environmental sustainability and resource recovery.</p>
              <p className="font-semibold">Methods:</p>
              <p>Anaerobic digestion, dewatering, and disposal or beneficial reuse.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-4 flex">
            <FaRecycle  className="text-teal-500 text-5xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Advanced Treatment Technologies</h4>
              <p className="text-sm text-gray-700">Innovative technologies like <span className=' font-semibold text-base'>membrane bioreactors, reverse osmosis, and advanced oxidation processes </span> .</p>
          <p className="font-semibold">Purpose:</p>
          <p>Address specific challenges, enhance treatment efficiency, and meet stringent water quality standards.</p>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Tech_Process