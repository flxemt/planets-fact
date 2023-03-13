import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import data from '../data.json'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.documentElement.className = isOpen ? 'overflow-hidden' : ''
  }, [isOpen])

  const navItems = data.map(item => (
    <li key={item.name} className="text-[#c1c1c8] hover:text-white transition-colors duration-300">
      <NavLink
        to={`/${item.name.toLocaleLowerCase()}`}
        className="nav-link h-full flex items-center relative"
        style={{ '--line-color': item.color }}
      >
        {item.name}
      </NavLink>
    </li>
  ))

  const mobileNavItems = data.map(item => (
    <li key={item.name} className="transition-colors tracking-[1.36px] py-5 border-b-[1px] border-b-[#1f1f39]">
      <NavLink className="flex items-center" to={`/${item.name.toLocaleLowerCase()}`} onClick={() => setIsOpen(false)}>
        <div className="w-[20px] h-[20px] rounded-full mr-6" style={{ backgroundColor: item.iconColor }}></div>
        <span>{item.name}</span>
        <img className="ml-auto" src="/assets/icon-chevron.svg" alt="Chevron icon" />
      </NavLink>
    </li>
  ))

  return (
    <nav className="py-4 uppercase border-b-[1px] border-b-lines xl:py-0 xl:h-[85px]">
      <div className="max-w-[1368px] mx-auto flex justify-between items-center md:flex-col xl:flex-row px-6 h-full xl:pl-8 xl:pr-10">
        <div className="font-display text-[1.75rem] leading-[2.25rem] tracking-[-1px]">The planets</div>
        <ul className="hidden md:flex gap-[2.0625rem] md:mt-10 font-bold text-h4 leading-h4 tracking-h4 xl:mt-0 h-full">
          {navItems}
        </ul>
        <div
          className="fixed left-0 top-0 w-full h-full bg-dark-blue mt-[4.3rem] transition-all duration-300 z-10 md:hidden"
          style={{ transform: `translateY(${isOpen ? '0' : '100%'})`, visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <ul className="px-6 mt-6 font-bold text-[0.9375rem] leading-h3">{mobileNavItems}</ul>
        </div>
        <button aria-label="Open navigation" onClick={toggleOpen} className="md:hidden">
          <img src="/assets/icon-hamburger.svg" alt="Hamburger icon" />
        </button>
      </div>
    </nav>
  )
}
