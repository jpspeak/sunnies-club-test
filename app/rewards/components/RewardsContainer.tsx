'use client'

import React from 'react'
import useSWR from 'swr'
import 'react-loading-skeleton/dist/skeleton.css'
import RewardsList from './RewardsList'
import rewardService from '@/app/shared/services/api/rewardService'
import FetchError from '@/app/shared/components/FetchError'
import Spinner from '@/app/shared/components/Spinner'

export default function RewardsContainer() {
  const {
    data: rewards,
    isLoading: isLoadingRewards,
    error: errorRewards
  } = useSWR(`/rewards`, () =>
    rewardService.getRewards().then((res) => res.data)
  )

  if (errorRewards) return <FetchError />
  if (isLoadingRewards) return <Spinner />
  return <RewardsList rewards={rewards} />
}
