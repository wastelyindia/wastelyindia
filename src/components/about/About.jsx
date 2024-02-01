import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/Wastely_hero_1.jpeg";
import cardImg from "../../assets/images/Wastely_hero_6.jpeg";
import cardImg1 from "../../assets/images/Wastely_hero_9.jpeg";

import CardContainer from './CradContainer';
import Testimonials from './Testimonials';
import { FaGlobe, FaUserCircle, FaLeaf, FaCog, FaWater, FaEye, FaHandshake, FaTree } from 'react-icons/fa';
import { Link } from "react-router-dom";

const About = () => {

  const Navigate = useNavigate()

  const teamMembers = [
    {
      name: "John Doe",
      title: "CEO",
      image: "https://picsum.photos/100/100",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      image: "https://picsum.photos/100/100",
      description: "Nulla posuere libero pretium volutpat.",
    },
    {
      name: "Mc lenghan",
      title: "jkma",
      image: "https://picsum.photos/100/100",
      description: "Nulla posuere libero pretium volutpat.",
    },
  ];

  return (
    <>

      <div className=" ">
        <div className="  flex items-center justify-center bg-gray-100">
          <div className=" bg-cover lg:bg-[55%] bg-left bg-no-repeat p-0 py-24 sm:py-[100px] px-5 sm:px-10 lg:p-[80px] xl:py-[100px] xl:p-0 overflow-hidden bg-[#fdfdfd] bg-fixed sm:bg-scroll"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className=" w-[100%] lg:w-[55%] float-right p-0 px-5 sm:p-20 xl:p-[150px] rounded bg-[#f5f5f5]">
              <h1 className="text-4xl font-bold mb-8 text-gray-900">About Us</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                The world can't clean itself. But together we can. We're there when the world needs us. Innovative and cutting-edge technology, paired with personalized service, drives everything we do in wastewater restoration, recycling, and reuse.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 mt-8">
                <Link to="#Mission" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">OUR MISSION</Link>
                <Link to="#Vision" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">OUR VISION</Link>
                <Link to="#Values" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">WASTELY VALUES</Link>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div id="Mission" className=' container min-h-screen flex items-center '>
        <div className="px-2 py-20 w-full flex justify-center bg-white shadow-lg rounded-md">
          <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
            <div className="lg:w-1/2">
              <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none rounded-t sm:rounded-t-md border lg:rounded-lg"
                // style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97)' }}>
                style={{ backgroundImage: `url(${cardImg})` }}>
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                  <FaGlobe className="text-4xl text-indigo-600" /> </div>
              </div>
            </div>
            <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-gray-800 font-bold text-center">
                Mission
                <br />
                <span className="text-indigo-600  ">Wastely Aqua</span>
              </h2>
              <p className="mt-4 text-gray-600">
                At WASTELY AQUA, we&apos;re on a mission to redefine waste water management. Our purpose is simple yet impactful: accelerate success for our customers, people, and the planet. We&apos;re committed to outstanding customer service, creating an inspiring workplace, and championing sustainability. Join us in building a cleaner, more sustainable future together
              </p>
              <div className="flex justify-center mt-4">
                <FaUserCircle className="text-xl text-gray-500 mr-4" /> <FaLeaf className="text-xl text-green-500" /> <FaCog className="text-xl text-gray-500 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="Vision" className="container min-h-screen">
        <div className="flex flex-col justify-center h-screen ">
          <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-screen md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/2 bg-white">
              <img
                // src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                src={cardImg1}
                alt="Wastely Vision"
                className="rounded-xl object-cover w-full h-64 md:h-auto"
              />
              <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
                <FaWater className="text-4xl text-blue-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white flex flex-col space-y-2 p-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium hidden md:block">Wastely</p>
                <FaEye className="text-xl text-gray-400" />
              </div>
              <h3 className="font-black text-gray-800 md:text-3xl text-xl">Our Vision</h3>
              <p className="md:text-lg text-gray-500 text-base">
                Fighting climate change, inventing new models that balance growth and resource protection, taking action for equal opportunities, and promoting access to basic services. We're committed to providing solutions to these major global challenges.
              </p>
              <div className="flex justify-center mt-4">
                <FaTree className="text-xl text-green-500 mr-4" />
                <FaGlobe className="text-xl text-blue-400 mr-4" />
                <FaHandshake className="text-xl text-gray-500 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div id="Values" className=' min-h-screen  container'>
        <CardContainer />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg shadow-lg px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's work together!</h2>
          <p className="text-lg text-gray-200 mb-6">
            Ready to join us in making a cleaner, more sustainable future? Get in touch
            today!
          </p>
            <button
            onClick={()=> Navigate('/contact') }
              className="inline-block bg-white hover:bg-gray-100 px-6 py-2 rounded-full text-indigo-600 font-semibold shadow-sm"
            >
              Contact Us
            </button>
        </div>
      </div>

      <Testimonials />
      {/* <section className=" container py-20 md:py-32">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-7xl">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 h-24 w-24"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-base text-gray-500 mb-4">{member.title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default About;




