"use client"
import React from 'react'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { heroSliderData } from '@/data/heroSliderData';
import Link from 'next/link';

register();

function HeroSlider() {
    return (
        <div className='text-white px-20 mt-6'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                {heroSliderData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full relative'>
                            <div className='w-ful relative '>
                                <div className=' w-full h-[80vh] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${data.image})` }}></div>
                                <div className='w-[70%] h-full absolute top-0 left-0 bg-gradient-to-r from-black'></div>
                            </div>
                            <div className='absolute top-[15%] left-10 w-[45%]'>
                                <h2 className='font-semibold text-xl mb-1'>{data.season}</h2>
                                <h1 className='font-bold text-4xl mb-4'>{data.title1} <br />{data.titile2}</h1>
                                <div className='overflow-scroll custom-scrollbar h-[30vh]'>
                                    <p className='text-justify'>
                                        {data.synopsis}
                                    </p>
                                </div>

                                <div className='mt-4'>
                                    <Link href={`/anime/${data.mal_id}`}><button className='bg-primary px-6 py-2 me-3 hover:brightness-110 ease-in-out transition-all duration-300 font-semibold'>Watch Trailer</button></Link>
                                    <button className='border-2 border-white px-6 py-2 hover:text-primary hover:border-primary ease-in-out transition-all duration-300 font-semibold'>+ Add to list</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                )}

            </Swiper>


        </div>
    )
}

export default HeroSlider