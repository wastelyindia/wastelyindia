import aboutImg from '../../assets/images/Wastely_hero_4.jpeg'
import operation1 from '../../assets/images/O&M.jpeg'
import operation2 from '../../assets/images/O&M1.jpeg'
import operation3 from '../../assets/images/O&M2.jpeg'
import {
  FaTachometerAlt,
  FaWrench,
  FaShieldAlt,
  FaUserCog,
  FaMoneyBillAlt,
  FaChartLine,
  FaTools,
  FaFileInvoice,
} from "react-icons/fa";

const OprationAndMaintanence = () => {
  return (
    <>



      <section className=" container max-w-screen mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-8">Keeping the Waters Clean: Operation & Maintenance in Wastewater Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={operation1} alt="Wastewater plant maintenance technicians inspecting equipment" className="w-full h-64 rounded-lg mb-4 shadow-md md:h-[520px]" />
            <p className="text-lg leading-relaxed text-gray-700">Effective O&M ensures smooth operation, cleaner effluent, and a healthier environment. Let's explore the key elements!</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={operation2} alt="Wastewater plant control room with monitoring screens" className="w-full h-64 rounded-lg mb-4 shadow-md md:h-[520px]" />
            <p className="text-lg leading-relaxed text-gray-700">Advanced systems and skilled personnel work together to keep wastewater treatment plants running efficiently.</p>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaTachometerAlt className="text-teal-500 text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Monitoring & Process Control</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Real-time data analysis with <FaChartLine className="inline-block mr-2 text-teal-500" /> sensors and monitors</li>
                  <li>Optimizing treatment efficiency through adjustments and automation</li>
                  <li>Automated control systems for consistent performance</li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaWrench className="text-teal-500 text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Preventive Maintenance</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Regular equipment inspections and cleaning with the right <FaTools className="inline-block mr-2 text-teal-500" /></li>
                  <li>Predictive maintenance strategies to prevent breakdowns</li>
                  <li>Spare parts inventory management for faster repairs</li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaShieldAlt className="text-teal-500 text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Safety Protocols</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Strict safety protocols and training for all personnel</li>
                  <li>Appropriate personal protective equipment (PPE)</li>
                  <li>Regular safety audits and corrective actions</li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaUserCog className="text-teal-500 text-2xl mr-4" />
              <div>
            <h4 className="text-xl font-semibold mb-1">Staff Training & Certification</h4>
            <ul className="list-disc pl-4 text-sm text-gray-700">
              <li>On-going skills & knowledge development</li>
              <li>Relevant wastewater treatment certifications</li>
              <li>Effective knowledge sharing & collaboration</li>
            </ul>
          </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaFileInvoice className="text-teal-500 text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Record Keeping & Reporting</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Detailed records of process data, maintenance activities, and incidents</li>
                  <li>Reports on plant performance, compliance, and O&M costs</li>
                  <li>Data-driven decision-making for continuous improvement</li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-4 flex items-center">
              <FaMoneyBillAlt className="text-teal-500 text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Cost Savings & Benefits</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Reduced operational costs through minimized downtime and failures</li>
                  <li>Extended lifespan of treatment plant assets</li>
                  <li>Improved compliance with environmental regulations</li>
                  <li>Protection of public health and the environment</li>
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-8">O&M: The Ongoing Journey to Cleaner Waters</h2>
            <p className="text-lg leading-relaxed text-gray-700">Remember, effective O&M is a continuous process that requires dedication and effort. By embracing these key elements, wastewater treatment plants can ensure reliable and efficient operation, contributing to cleaner and healthier communities for all.</p>
          </div>
        </div>

      </section>


    </>
  )
}

export default OprationAndMaintanence