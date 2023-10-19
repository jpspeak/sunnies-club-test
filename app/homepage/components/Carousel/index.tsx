/* eslint-disable import/no-extraneous-dependencies */
'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import useSWR from 'swr'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Pagination, Autoplay } from 'swiper/modules'
import './style.css'
import homepageCarouselService, {
  HomepageCarouselList
} from '@/app/shared/services/api/homepageCarouselService'
import FetchError from '@/app/shared/components/FetchError'

export default function HomepageSlider() {
  const {
    data: carousel,
    isLoading: isLoadingCarousel,
    error: errorCarousel
  } = useSWR<HomepageCarouselList>(`homepage-carousel`, () =>
    homepageCarouselService.getHomepageCarousel().then((res) => res.data)
  )
  if (errorCarousel) return <FetchError />
  if (isLoadingCarousel) return <Skeleton className=' h-[85vh]' />
  return (
    <div className='flex flex-col h-full'>
      <div className='grow'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12}
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          className='h-full'
        >
          {carousel?.map((carouselItem) => (
            <SwiperSlide key={carouselItem._id}>
              <div className='flex flex-col h-full'>
                <div className='grow'>
                  <Image
                    src={carouselItem.image}
                    height={240}
                    width={240}
                    alt={carouselItem.title}
                    quality={100}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='flex flex-col items-center mt-6'>
                  <h3 className='text-2xl font-bold text-center text-soft-black-700 max-w-[234px] '>
                    {carouselItem.title}
                  </h3>
                  <p className='mt-4 text-sm text-center text-gray-neutral-500 max-w-[234px]'>
                    {carouselItem.body}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex justify-center mt-6 swiper-custom-pagination'></div>
    </div>
  )
}
