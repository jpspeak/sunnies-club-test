/* eslint-disable import/no-extraneous-dependencies */
'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../style.css'
import Image from 'next/image'
import { MegaDeal } from '@/app/shared/services/api/megaDealService'

export default function MegaDealsList({
  megaDeals
}: {
  megaDeals?: MegaDeal[]
}) {
  return (
    <div className='border-b-[1px] border-gray-neutral-50 mt-3'>
      <Swiper
        id='megaDealsSwiper'
        slidesPerView={1.6}
        spaceBetween={12}
        className='!overflow-x-visible'
      >
        {megaDeals?.map((megaDeal) => (
          <SwiperSlide
            key={megaDeal._id}
            className='overflow-hidden shadow-md rounded-xl'
          >
            <Image
              src={megaDeal.image}
              height={400}
              width={400}
              alt={megaDeal.name}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
