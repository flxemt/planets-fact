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
      <main className="grid md:grid-cols-2 px-6 md:px-10 md:gap-x-16 xl:container xl:justify-between xl:mt-[7.875rem]">
        <Outlet context={{ currentItem }} />
        <div className="hidden md:flex mt-[3.5rem] flex-col gap-4 ml-auto w-full uppercase tracking-[1.93px] text-[0.5625rem] leading-[1.5625rem] font-bold xl:max-w-[350px] xl:mt-10">
          <DesktopSublink backgroundColor={currentItem.color} to="." end num="01" text="Overview" />
          <DesktopSublink backgroundColor={currentItem.color} to="structure" num="02" text="Internal Structure" />
          <DesktopSublink backgroundColor={currentItem.color} to="surface" num="03" text="Surface Geology" />
        </div>
      </main>
      <section className="xl:container px-6 flex flex-col mt-7 mb-12 uppercase gap-2 md:mt-10 md:px-10 md:flex-row md:gap-[0.6875rem] xl:mt-[5.5rem] xl:gap-[1.875rem]">
        <StatCard text="Rotation Time" value={currentItem.rotation} />
        <StatCard text="Revolution Time" value={currentItem.revolution} />
        <StatCard text="Radius" value={currentItem.radius} />
        <StatCard text="Average Temp." value={currentItem.temperature} />
      </section>
    </>
  )
}
