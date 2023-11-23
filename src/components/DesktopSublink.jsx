import { NavLink } from 'react-router-dom'

export default function DesktopSublink({ num, text, backgroundColor, ...props }) {
  const activeStyles = {
    backgroundColor
  }

  return (
    <NavLink
      {...props}
      className="flex border-[1px] border-[#393950] text-[0.5625rem] tracking-[1.93px] py-2 px-5 transition-colors leading-body xl:px-7 xl:py-3 xl:text-[0.75rem] xl:tracking-[2.57px] hover:bg-[#313148]"
      style={({ isActive }) => (isActive ? activeStyles : null)}
    >
      <span className="mr-4 xl:mr-7 opacity-50">{num}</span>
      <span>{text}</span>
    </NavLink>
  )
}
