import { Outlet, useParams } from 'react-router-dom'

import data from '../data.json'
import Subnav from '../components/Subnav'
import StatCard from '../components/StatCard'
import DesktopSublink from '../components/DesktopSublink'

export default function Planet() {
  const { name } = useParams()
  const currentItem = data.find(item => item.name.toLowerCase() === name.toLowerCase())

  if (!currentItem) {
    throw new Error('The planet you are looking for was not found')
  }

  return (
    <>
      <Subnav currentItem={currentItem} />
      <main className="px-6 mt-16 md:px-10 xl:mt-[7.875rem]">
        <div className="max-w-container mx-auto grid gap-16 items-center md:grid-cols-2 md:gap-y-20 xl:justify-between xl:gap-y-10">
          <Outlet context={{ currentItem }} />
          <div className="hidden md:flex mt-[3.5rem] flex-col gap-4 ml-auto w-full uppercase tracking-[1.93px] text-[0.5625rem] leading-[1.5625rem] font-bold md:mt-0 xl:max-w-[350px]">
            <DesktopSublink backgroundColor={currentItem.color} to="." end num="01" text="Overview" />
            <DesktopSublink backgroundColor={currentItem.color} to="structure" num="02" text="Internal Structure" />
            <DesktopSublink backgroundColor={currentItem.color} to="surface" num="03" text="Surface Geology" />
          </div>
        </div>
      </main>
      <div className="mt-7 px-6 mb-12 md:mt-10 md:px-10 xl:mt-[5.5rem]">
        <div className="max-w-container mx-auto flex flex-col uppercase gap-2 md:flex-row md:gap-[0.6875rem] xl:gap-[1.875rem]">
          <StatCard text="Rotation Time" value={currentItem.rotation} />
          <StatCard text="Revolution Time" value={currentItem.revolution} />
          <StatCard text="Radius" value={currentItem.radius} />
          <StatCard text="Average Temp." value={currentItem.temperature} />
        </div>
      </div>
    </>
  )
}
