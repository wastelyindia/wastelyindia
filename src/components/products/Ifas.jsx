import AerationVideo from '../../assets/video/membrane.mp4'
import ifas from '../../assets/images/IFAS.jpg'


const Ifas = () => {
  return (
    <>
      <div className="container !pt-[0px]">
        <div className=" mx-auto p-4 ">
          <div className="bg-white p-6 rounded-md shadow-md lg:py-20 lg:px-24 my-10">
            <div className=" flex-row md:flex gap-10 ">
              <section className="mb-6">
                <h2 className="mb-2 text-gray-400 font-medium">Introduction to IFAS</h2>
                <h1 className="text-3xl heading_title font-bold mb-10">IFAS Wastewater Treatment Systems</h1>
                <p>
                  Integrated Fixed Film Activated Sludge (IFAS) is an innovative wastewater treatment technology that offers several advantages over conventional activated sludge technologies. It involves adding an attached growth media to an activated sludge tank to facilitate biomass growth and strengthen the treatment process.
                </p>
              </section>
              <img src={ifas} className=" md:w-[50%] h-auto" alt="" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md lg:py-20 lg:px-24 my-10">
            <h1 className="text-3xl heading_title font-bold text-center mb-10">Membrane Technologies</h1>
            <div className="flex-row md:flex gap-10 ">
              <video controls height="auto" className=" w-full md:w-[50%]">
                <source src={AerationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <section className="mb-6">
                <h2 className=" mb-2 text-gray-400 font-medium">Membrane</h2>
                <p>
                  Membrane processes involve the use of semi-permeable barriers to separate solids and contaminants from water. Common membrane technologies in wastewater treatment include microfiltration (MF), ultrafiltration (UF), nanofiltration (NF), and reverse osmosis (RO).                </p>
              </section>
            </div>
          </div>
          <div>
            <h1 className=' text-2xl heading_title text-center my-8 font-bold'>IFAS/Membrane combination</h1>
            <div className="lg:flex lg:space-x-6">
              <section className="mb-6 lg:w-1/3 bg-white p-4 rounded-md">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Advantages:</h2>
                  <ul className="list-disc pl-8">
                    <li>Superior effluent quality thanks to IFAS's biological treatment and MBRs' high clarity and pathogen removal.</li>
                    <li>Ideal for challenging wastewater streams or stringent discharge requirements.</li>
                    <li>Achieves higher treatment efficiency than conventional methods.</li>
                    <li>Compact footprint, making it suitable for space-constrained sites.</li>
                    <li>Potential for reduced operating costs.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-6 lg:w-1/3 bg-white  p-4 rounded-md">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">How It Works:</h2>
                  <p className="mb-4">
                    The IFAS/Membrane combination integrates two powerful technologies:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>IFAS (Integrated Fixed-Film Activated Sludge) provides biological treatment using a fixed media to support a biofilm of microorganisms.</li>
                    <li>MBRs (Membrane Bioreactors) use membranes to physically separate treated water from solids, ensuring high-quality effluent.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-6 lg:w-1/3 bg-white p-4 rounded-md">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Benefits for Your Facility:</h2>
                  <p>
                    Implementing this innovative technology can bring numerous benefits to your wastewater treatment facility, including:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>Enhanced treatment performance and effluent quality.</li>
                    <li>Compliance with stringent discharge regulations.</li>
                    <li>Compact footprint and reduced space requirements.</li>
                    <li>Potential for cost savings in operations and maintenance.</li>
                    <li>Improved process stability and resilience to shock loads.</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>


        <div className=" mx-auto p-8">
          <h2 className="text-2xl heading_title text-center my-8 font-bold">Treatment Technology Comparison:</h2>

          <table className="min-w-full border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Feature</th>
                <th className="py-2 px-4 border">IFAS</th>
                <th className="py-2 px-4 border">MBR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">Technology</td>
                <td className="py-2 px-4 border">Biological (activated sludge + biofilm)</td>
                <td className="py-2 px-4 border">Physical separation (membranes)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Solid-liquid separation</td>
                <td className="py-2 px-4 border">Settling tanks</td>
                <td className="py-2 px-4 border">Membranes</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Footprint</td>
                <td className="py-2 px-4 border">Moderate</td>
                <td className="py-2 px-4 border">Compact</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Effluent quality</td>
                <td className="py-2 px-4 border">Good</td>
                <td className="py-2 px-4 border">Excellent</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Sludge production</td>
                <td className="py-2 px-4 border">High</td>
                <td className="py-2 px-4 border">Moderate</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Cost</td>
                <td className="py-2 px-4 border">Moderate</td>
                <td className="py-2 px-4 border">High</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Applications</td>
                <td className="py-2 px-4 border">Municipal, industrial wastewater</td>
                <td className="py-2 px-4 border">Municipal, industrial, reuse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Ifas