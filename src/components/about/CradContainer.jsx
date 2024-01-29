import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/CardContainer.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/images/Wastely_hero_1.jpeg';
import slide_image_2 from '../../assets/images/Wastely_hero_2.jpeg';
import slide_image_3 from '../../assets/images/Wastely_hero_3.jpeg';
import slide_image_4 from '../../assets/images/Wastely_hero_7.jpeg';
import slide_image_5 from '../../assets/images/Wastely_hero_9.jpeg';
import slide_image_6 from '../../assets/images/Wastely_hero_5.jpeg';
import slide_image_7 from '../../assets/images/Wastely_hero_8.jpeg';

function CardContainer() {
    return (
        <div className="min-h-screen bg-white shadow-lg rounded-md relative z-10">
            <div className="">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        clickable: true,
                        style: {
                            backdropFilter: 'brightness(0.5)',
                            color: 'white',
                          },
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="Card_Value_Swiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_1} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Worthiness <span className='text-red-500'>(W)</span>: </h1>
                                <p className="text-gray-200">
                                    “Every drop we manage holds immeasurable worth, contributing to a cleaner and sustainable future.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_2} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Assurance <span className='text-red-500'>(A)</span>: </h1>
                                <p className="text-gray-200">
                                    “With WASTELY AQUA, rest assured that your waste water is in expert hands, guaranteeing responsible and reliable management.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_3} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Spontaneity <span className='text-red-500'>(S)</span>: </h1>
                                <p className="text-gray-200">
                                    “In the world of waste water, adaptability is key. WASTELY AQUA embraces spontaneity, finding innovative solutions for a rapidly changing environment.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_4} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Tactfulness <span className='text-red-500'>(T)</span>: </h1>
                                <p className="text-gray-200">
                                    “Our approach is not just about managing waste water; it&apos;s about doing so with tactfulness, considering environmental impact and community well-being.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_5} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Excellence <span className='text-red-500'>(E)</span>: </h1>
                                <p className="text-gray-200">
                                    “Striving for excellence in waste water management – because every drop matters and deserves nothing less than the best.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_6} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Liveliness <span className='text-red-500'>(L)</span>: </h1>
                                <p className="text-gray-200">
                                    “Revitalizing the environment with the liveliness of sustainable practices, WASTELY AQUA brings vibrancy to waste water management.”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={slide_image_7} alt="" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 bg-gray-500/50 w-[80%] text-center">
                                <h1 className="text-white font-semibold text-4xl">Yeehaw <span className='text-red-500'>(Y)</span>: </h1>
                                <p className="text-gray-200">
                                    “Yeehaw to a cleaner tomorrow! WASTELY AQUA brings enthusiasm to waste water management, turning challenges into opportunities.”
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default CardContainer;