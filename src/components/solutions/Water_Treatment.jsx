import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Zoom, EffectFade } from 'swiper/modules';
import '../../styles/Water_Treatment.css';
import Waterdropbg from '../../assets/images/Waterdropbg.jpg'
import waterTreat1 from '../../assets/images/Wastely_Water_Treatment1.jpg'
import waterTreat2 from '../../assets/images/Wastely_Water_Treatment2.jpg'
import waterTreat3 from '../../assets/images/Wastely_Water_Treatment3.jpg'
import waterTreat8 from '../../assets/images/Wastely_Water_Treatment4.jpeg'
import waterTreat4 from '../../assets/images/Wastely_Water_Treatment5.jpeg'
import waterTreat5 from '../../assets/images/Wastely_Water_Treatment6.jpeg'
import waterTreat6 from '../../assets/images/Wastely_Water_Treatment7.jpeg'
import waterTreat7 from '../../assets/images/Wastely_Water_Treatment8.jpeg'

const Water_Treatment = () => {
  return (
    <>

      <div className=" container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          zoom={false}
          effect={'fade'}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Zoom, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat4} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat6} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat5} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat8} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat7} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="swiper-zoom-container"><img src={waterTreat3} alt="" /></div></SwiperSlide>
        </Swiper>
      </div>
      <div className=" container">


        <div className="mx-auto py-8 bg-white p-6 rounded shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-[#00539b]">WASTELY AQUA Water Treatment Solutions</h1>
          <p className="mb-6">
            WASTELY AQUA promotes best-in-class, proprietary technologies to provide you with comprehensive and individualized water treatment solutions. These include:
            <ul>
              <li>BIODEN® for selective nitrate removal</li>
              <li>The innovative Lamella Clarifier technology OPUR-SK</li>
              <li>Advanced Adsorption and Membrane Filtration processes</li>
            </ul>
          </p>
          <p className="mb-6">
            By integrating a wide spectrum of chemical, physical, and biological processes, our solutions ensure efficient extraction of potable water from all available sources of fresh water as well as used water for direct or indirect potable reuse.
          </p>
          <p className="mb-6">
            WASTELY AQUA follows the most exacting standards of water treatment to ensure the safe and secure supply of water. Our water treatment facilities are highly scalable and adaptable to various business models, including EPC, DBO, and BOOT.
          </p>
          <p className="mb-6">
            Our global projects enable the production of over 19 million m3 of pure water every day, benefiting over 96 million people worldwide.
          </p>
          <p className="mb-6">
            We have successfully executed large-scale projects such as Panjrapur (455 MLD) in India, Izmir (360 MLD) in Turkey, Upper Ruvu WTP (200 MLD) in Tanzania, and Putatan (150 MLD) in the Philippines, providing high-quality treated water to millions of people every day.
          </p>
        </div>


        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">The Crucial Process of Wastewater Treatment</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img src={Waterdropbg} alt="Wastewater treatment plant" className="rounded-lg shadow-md mx-auto w-full h-auto" />
            </div>
            <div className="w-full sm:w-1/2 px-4 lg:px-8 my-4">
              <p className="text-base text-gray-700 mb-4">
                Wastewater treatment is a crucial process that aims to remove contaminants and pollutants from water before it is released back into the environment. The water treatment process involves several stages to ensure that the treated water meets regulatory standards and is safe for discharge.
              </p>
              <p className="text-base text-gray-700 mb-4">
                It also plays a vital role in protecting public health and preserving the ecosystem. Without proper wastewater treatment, polluted water can lead to contamination of drinking water sources, spread of diseases, and harm aquatic life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Water_Treatment