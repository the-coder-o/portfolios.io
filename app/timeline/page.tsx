import React from 'react'

import PageTitle from '@/components/page-title'
import { Timeline } from '@/components/animation/timeline'

import { timelineData } from '@/.mock/timeline.data'

const Page = () => {
  return (
    <>
      <PageTitle title="Timeline" />
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </>
  )
}

export default Page
