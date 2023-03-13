import { NavLink } from 'react-router-dom'

export default function Subnav({ currentItem }) {
  const activeStyles = {
    borderBottomColor: currentItem.color,
    color: '#fff'
  }

  return (
    <nav className="flex justify-between px-6 uppercase text-[0.5625rem] leading-3 tracking-[2px] font-bold border-b-[1px] border-b-lines h-[50px] text-[#838391] md:hidden">
      <NavLink
        to="."
        end
        className="flex justify-center items-center border-b-4 border-b-transparent pt-1 min-w-[80px]"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Overview
      </NavLink>
      <NavLink
        to="structure"
        className="flex justify-center items-center border-b-4 border-b-transparent pt-1 min-w-[80px]"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Structure
      </NavLink>
      <NavLink
        to="surface"
        className="flex justify-center items-center border-b-4 border-b-transparent pt-1 min-w-[80px]"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Surface
      </NavLink>
    </nav>
  )
}
