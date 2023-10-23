/* eslint-disable import/no-extraneous-dependencies */
'use client'

import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import useSWR from 'swr'
import 'swiper/css'
import MegaDealsList from './MegaDealsList'
import megaDealService, {
  MegaDeals
} from '@/app/shared/services/api/megaDealService'
import FetchError from '@/app/shared/components/FetchError'

export default function MegaDealsContainer() {
  const {
    data: megaDeals,
    isLoading: isLoadingMegaDeals,
    error: errorMegaDeals
  } = useSWR<MegaDeals>(`mega-deals`, () =>
    megaDealService.getMegaDeals().then((res) => res.data)
  )

  const renderList = () => {
    if (errorMegaDeals) return <FetchError />
    if (isLoadingMegaDeals)
      return <Skeleton count={1} className=' h-[200px] w-[200px]' />
    return <MegaDealsList megaDeals={megaDeals} />
  }

  return (
    <div
      className={`mt-[40px] mb-[40px] ${megaDeals?.length === 0 && 'hidden'}`}
    >
      <h2 className='text-xl'>Announcements</h2>
      {renderList()}
    </div>
  )
}
