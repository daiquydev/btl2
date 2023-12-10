import React from 'react'
import StatisticWidget from '../components/Widget/Statistic.jsx'
import AchievementWidget from '../components/Widget/Achievment.jsx'
import DashboardHeader from '../components/Other/DashboardHeader.jsx'
import ScrolledCard from '../components/Widget/ScrolledCard.jsx'
import { useOutletContext } from 'react-router-dom'
import { BarChar } from './BarChar.js'

function Dashboard() {
  const avatar =
    'https://t3.ftcdn.net/jpg/06/40/47/64/360_F_640476411_FVLNRxjUPGncmrsUyYXszXcsI8qpRJOb.jpg'
  const [sidebarToggle] = useOutletContext()

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: 'Admin' }}
        />

        {/* Laba */}
        <div className="px-2 mx-auto mainCard">
          <BarChar />
        </div>
      </main>
    </>
  )
}

export default Dashboard
