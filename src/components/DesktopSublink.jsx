import { NavLink } from 'react-router-dom'

export default function DesktopSublink({ num, text, backgroundColor, ...props }) {
  const activeStyles = {
    backgroundColor
  }

  return (
    <NavLink
      {...props}
      className="flex border-[1px] border-[#393950] py-2 px-5 transition-colors text-[0.75rem] leading-body xl:px-7 xl:py-3 hover:bg-[#313148]"
      style={({ isActive }) => (isActive ? activeStyles : null)}
    >
      <span className="mr-4 opacity-50">{num}</span>
      <span>{text}</span>
    </NavLink>
  )
}
